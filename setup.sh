#!/bin/bash

# Portfolio Setup Script
# This script helps you set up the portfolio website with your personal information

echo "🚀 Portfolio Website Setup"
echo "=========================="
echo ""

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "📧 Setting up email configuration..."
    cp .env.example .env.local
    echo "✅ Created .env.local file"
    echo "⚠️  Please edit .env.local and add your Gmail credentials"
    echo ""
else
    echo "✅ .env.local already exists"
fi

# Check if placeholder images exist
echo "🖼️  Checking image placeholders..."
if [ ! -f public/images/profile-placeholder.jpg ]; then
    touch public/images/profile-placeholder.jpg
    echo "✅ Created profile image placeholder"
fi

if [ ! -f public/images/og-image.jpg ]; then
    touch public/images/og-image.jpg
    echo "✅ Created OG image placeholder"
fi

for i in {1..4}; do
    if [ ! -f "public/images/project-$i.jpg" ]; then
        touch "public/images/project-$i.jpg"
        echo "✅ Created project-$i image placeholder"
    fi
done

# Check if resume exists
if [ ! -f public/files/hattan-oussama-resume.pdf ]; then
    touch public/files/hattan-oussama-resume.pdf
    echo "✅ Created resume placeholder"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Edit src/config/portfolio.ts with your personal information"
echo "2. Replace placeholder images in public/images/ with your actual images"
echo "3. Add your resume as public/files/hattan-oussama-resume.pdf"
echo "4. Configure email settings in .env.local"
echo "5. Run 'npm run dev' to start the development server"
echo ""
echo "📚 For detailed instructions, see README.md"
