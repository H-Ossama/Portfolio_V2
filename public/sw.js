const CACHE_NAME = 'portfolio-v2'
const STATIC_CACHE = 'static-v2'
const DYNAMIC_CACHE = 'dynamic-v2'
const IMAGE_CACHE = 'images-v2'

// Essential files that must be cached for offline functionality
const ESSENTIAL_URLS = [
  '/',
  '/en',
  '/fr',
  '/de',
  '/manifest.json',
  '/images/hattan-profile.png',
  '/images/og-image.jpg'
]

// Extended list of static assets to cache
const STATIC_ASSETS = [
  // Fonts
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap',
  'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2',
  
  // Icons and images
  '/images/profile-placeholder.svg',
  
  // Document assets
  '/certificates/EFET.jpg',
  '/certificates/MultyHexa.jpg',
  '/certificates/MultyHexa-Releve-de-Notes.jpg',
  '/certificates/Oussma_Hattan_Resume.pdf',
]

// Cache size limits
const DYNAMIC_CACHE_LIMIT = 35
const IMAGE_CACHE_LIMIT = 30

// Performance detection for mobile optimization
const isMobile = () => {
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    (navigator.userAgent.includes('Mobile') && navigator.maxTouchPoints > 0)
  )
}

// Mobile-specific optimizations
const MOBILE_OPTIMIZATIONS = {
  // Shorter cache retention on mobile to save storage
  cacheLimits: {
    dynamic: 20,
    image: 15
  },
  // More aggressive offline caching on mobile
  networkTimeoutMs: 2000
}

// Cache limits based on device type
const getCacheLimits = () => {
  if (isMobile()) {
    return MOBILE_OPTIMIZATIONS.cacheLimits
  }
  return { 
    dynamic: DYNAMIC_CACHE_LIMIT, 
    image: IMAGE_CACHE_LIMIT 
  }
}

// Helper function to clean up caches to prevent them from growing too large
const trimCache = async (cacheName, maxItems) => {
  const cache = await caches.open(cacheName)
  const keys = await cache.keys()
  
  if (keys.length > maxItems) {
    // Delete oldest items first (beyond the limit)
    for (let i = 0; i < keys.length - maxItems; i++) {
      await cache.delete(keys[i])
    }
  }
}

// Installation - Cache essential files
self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      // Cache essential files
      caches.open(CACHE_NAME).then(cache => {
        console.log('[Service Worker] Caching essential files')
        return cache.addAll(ESSENTIAL_URLS)
      }),
      
      // Cache static assets
      caches.open(STATIC_CACHE).then(cache => {
        console.log('[Service Worker] Caching static assets')
        return cache.addAll(STATIC_ASSETS)
      })
    ]).then(() => {
      return self.skipWaiting()
    })
  )
})

// Optimized fetch strategy with network timeout for mobile
self.addEventListener('fetch', event => {
  const requestUrl = new URL(event.request.url)
  
  // Handle different types of resources differently
  if (event.request.method !== 'GET') {
    // Don't cache non-GET requests
    return
  }
  
  // Handle image requests specially (with image-specific cache)
  if (/\.(jpe?g|png|gif|svg|webp)$/i.test(requestUrl.pathname)) {
    event.respondWith(handleImageRequest(event.request))
    return
  }
  
  // API requests - network only
  if (requestUrl.pathname.includes('/api/')) {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match('/offline')
      })
    )
    return
  }
  
  // Use network-first strategy for HTML pages
  if (requestUrl.pathname === '/' || 
      requestUrl.pathname.match(/\/(en|fr|de)$/) ||
      event.request.headers.get('Accept').includes('text/html')) {
    event.respondWith(handleHTMLRequest(event.request))
    return
  }

  // For all other requests, use cache-first strategy
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          // Return cached version immediately
          return cachedResponse
        }
        
        // If not in cache, fetch from network and cache for later
        return fetch(event.request)
          .then(response => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200) {
              return response
            }
            
            // Clone the response to cache it and return it
            const responseToCache = response.clone()
            caches.open(DYNAMIC_CACHE)
              .then(cache => {
                cache.put(event.request, responseToCache)
                // Trim cache to prevent it from growing too large
                const limits = getCacheLimits()
                trimCache(DYNAMIC_CACHE, limits.dynamic)
              })
            
            return response
          })
          .catch(() => {
            // If both cache and network fail, show offline page
            if (event.request.headers.get('Accept').includes('text/html')) {
              return caches.match('/offline')
            }
            
            // For other resources, just fail
            return new Response('Network error', {
              status: 408,
              headers: { 'Content-Type': 'text/plain' }
            })
          })
      })
  )
})

// Special handler for HTML requests - network-first approach
const handleHTMLRequest = (request) => {
  // For mobile devices, use a shorter network timeout
  const networkTimeoutMs = isMobile() ? 
    MOBILE_OPTIMIZATIONS.networkTimeoutMs : 3000
  
  return new Promise(resolve => {
    let networkTimedOut = false
    
    // Set a timeout for network request
    const timeoutId = setTimeout(() => {
      networkTimedOut = true
      // Try to get from cache if network is too slow
      caches.match(request).then(cachedResponse => {
        if (cachedResponse) {
          resolve(cachedResponse)
        }
      })
    }, networkTimeoutMs)
    
    // Try network first
    fetch(request)
      .then(response => {
        clearTimeout(timeoutId)
        
        // Only cache successful responses
        if (!networkTimedOut) {
          const responseToCache = response.clone()
          caches.open(CACHE_NAME)
            .then(cache => cache.put(request, responseToCache))
          
          resolve(response)
        }
      })
      .catch(() => {
        clearTimeout(timeoutId)
        // Fallback to cache if network fails
        caches.match(request)
          .then(cachedResponse => {
            resolve(cachedResponse || caches.match('/offline'))
          })
      })
  })
}

// Special handler for image requests - cache-first with background update
const handleImageRequest = (request) => {
  return caches.match(request)
    .then(cachedResponse => {
      // Return cached image immediately if available
      if (cachedResponse) {
        // In the background, fetch a fresh version if possible
        fetch(request)
          .then(networkResponse => {
            caches.open(IMAGE_CACHE)
              .then(cache => {
                cache.put(request, networkResponse)
                // Trim image cache
                const limits = getCacheLimits()
                trimCache(IMAGE_CACHE, limits.image)
              })
          })
          .catch(() => {
            // Silently fail background update
          })
          
        return cachedResponse
      }
      
      // If not in cache, fetch from network and cache it
      return fetch(request)
        .then(response => {
          if (!response || response.status !== 200) {
            return response
          }
          
          const responseToCache = response.clone()
          caches.open(IMAGE_CACHE)
            .then(cache => {
              cache.put(request, responseToCache)
              // Trim image cache
              const limits = getCacheLimits()
              trimCache(IMAGE_CACHE, limits.image)
            })
          
          return response
        })
        .catch(() => {
          // For failed image loads, return a placeholder
          return caches.match('/images/profile-placeholder.svg')
        })
    })
}

// Activation - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            // Delete any old versions of our caches
            if (
              cacheName !== CACHE_NAME && 
              cacheName !== STATIC_CACHE && 
              cacheName !== DYNAMIC_CACHE &&
              cacheName !== IMAGE_CACHE
            ) {
              console.log('[Service Worker] Removing old cache:', cacheName)
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => {
        console.log('[Service Worker] Claiming clients')
        return self.clients.claim()
      })
  )
})

// Handle messages from client
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})
