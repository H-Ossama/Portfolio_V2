import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate message length
    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      )
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { error: 'Message must be less than 1000 characters' },
        { status: 400 }
      )
    }

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email configuration missing: EMAIL_USER or EMAIL_PASS not set')
      return NextResponse.json(
        { error: 'Email service configuration error. Please try again later.' },
        { status: 500 }
      )
    }

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Verify transporter configuration
    try {
      await transporter.verify()
    } catch (verifyError) {
      console.error('SMTP connection failed:', verifyError)
      return NextResponse.json(
        { error: 'Email service temporarily unavailable. Please try again later.' },
        { status: 503 }
      )
    }

    // Email content
    const mailOptions = {
      from: `"${name} via Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // send to yourself
      subject: `🔔 CONTACT FROM ${name.toUpperCase()}: ${subject}`,
      replyTo: `"${name}" <${email}>`, // Allow easy replies to the actual sender
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high',
        'Priority': 'urgent',
        'Return-Path': email,
        'X-Original-Sender': email
      },
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Message</title>
          <!--[if mso]>
          <noscript>
            <xml>
              <o:OfficeDocumentSettings>
                <o:AllowPNG/>
                <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
            </xml>
          </noscript>
          <![endif]-->
          <style>
            * { box-sizing: border-box; margin: 0; padding: 0; }
            
            @media only screen and (max-width: 600px) {
              .container { width: 100% !important; margin: 0 !important; }
              .header { padding: 25px 20px !important; }
              .content { padding: 25px 20px !important; }
              .card { margin: 15px 0 !important; padding: 20px !important; }
              .contact-grid { display: block !important; }
              .contact-item { margin-bottom: 15px !important; border-bottom: 1px solid #eee !important; padding-bottom: 10px !important; }
              .btn { display: block !important; margin: 10px 0 !important; padding: 15px !important; text-align: center !important; }
              .message-content { padding: 20px !important; }
              .stats { flex-direction: column !important; gap: 15px !important; }
              .stat-item { text-align: center !important; }
            }

            @media only screen and (max-width: 480px) {
              .header h1 { font-size: 22px !important; }
              .priority-badge { font-size: 11px !important; padding: 6px 12px !important; }
            }
          </style>
        </head>
        <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6;">
          
          <!-- Email Container -->
          <table class="container" cellpadding="0" cellspacing="0" border="0" style="max-width: 650px; margin: 20px auto; background: #ffffff; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); overflow: hidden;">
            
            <!-- Header Section -->
            <tr>
              <td class="header" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center; position: relative;">
                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPgo=') repeat; opacity: 0.3;"></div>
                <div style="position: relative; z-index: 1;">
                  <h1 style="color: #ffffff; margin: 0 0 10px 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">📧 New Contact Message</h1>
                  <div class="priority-badge" style="display: inline-block; background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.3); color: #ffffff; padding: 8px 16px; border-radius: 20px; font-size: 12px; font-weight: 600; letter-spacing: 0.5px;">
                    🔔 HIGH PRIORITY
                  </div>
                </div>
              </td>
            </tr>
            
            <!-- Content Section -->
            <tr>
              <td class="content" style="padding: 35px 30px;">
                
                <!-- Quick Stats -->
                <div class="stats" style="display: flex; gap: 20px; margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #f8f9ff 0%, #f0f2ff 100%); border-radius: 12px; border: 1px solid #e1e8ff;">
                  <div class="stat-item" style="flex: 1; text-align: center;">
                    <div style="font-size: 24px; font-weight: 700; color: #667eea; margin-bottom: 5px;">📤</div>
                    <div style="font-size: 12px; color: #64748b; font-weight: 500;">NEW MESSAGE</div>
                  </div>
                  <div class="stat-item" style="flex: 1; text-align: center;">
                    <div style="font-size: 24px; font-weight: 700; color: #f59e0b; margin-bottom: 5px;">⚡</div>
                    <div style="font-size: 12px; color: #64748b; font-weight: 500;">IMMEDIATE</div>
                  </div>
                  <div class="stat-item" style="flex: 1; text-align: center;">
                    <div style="font-size: 24px; font-weight: 700; color: #10b981; margin-bottom: 5px;">✓</div>
                    <div style="font-size: 12px; color: #64748b; font-weight: 500;">DELIVERED</div>
                  </div>
                </div>

                <!-- Contact Information Card -->
                <div class="card" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 25px; margin: 20px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                  <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 15px; border-bottom: 2px solid #f1f5f9;">
                    <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                      <span style="color: white; font-size: 18px; font-weight: bold;">👤</span>
                    </div>
                    <div>
                      <h2 style="color: #1e293b; margin: 0; font-size: 18px; font-weight: 600;">Contact Information</h2>
                      <p style="color: #64748b; margin: 0; font-size: 14px;">Message received ${new Date().toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}</p>
                    </div>
                  </div>
                  
                  <div class="contact-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div class="contact-item">
                      <div style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px;">Full Name</div>
                      <div style="color: #1e293b; font-size: 16px; font-weight: 600;">${name}</div>
                    </div>
                    
                    <div class="contact-item">
                      <div style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px;">Email Address</div>
                      <a href="mailto:${email}" style="color: #667eea; font-size: 16px; text-decoration: none; font-weight: 500; word-break: break-all;">${email}</a>
                    </div>
                    
                    <div class="contact-item" style="grid-column: 1 / -1;">
                      <div style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px;">Subject Line</div>
                      <div style="color: #1e293b; font-size: 16px; font-weight: 600; background: #f8fafc; padding: 12px; border-radius: 8px; border-left: 4px solid #667eea;">${subject}</div>
                    </div>
                  </div>
                </div>

                <!-- Message Content Card -->
                <div class="card" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 0; margin: 20px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.05); overflow: hidden;">
                  <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); color: white; padding: 20px;">
                    <div style="display: flex; align-items: center;">
                      <span style="font-size: 20px; margin-right: 10px;">💬</span>
                      <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Message Content</h3>
                    </div>
                  </div>
                  <div class="message-content" style="padding: 25px; background: #fafbfc;">
                    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; line-height: 1.8; color: #1e293b; font-size: 15px; white-space: pre-wrap; word-wrap: break-word; box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);">${message}</div>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div style="text-align: center; margin: 30px 0;">
                  <a href="mailto:${email}?subject=Re: ${subject}" class="btn" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 15px; margin: 0 8px 12px 0; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3); transition: all 0.3s ease;">
                    📧 Reply to ${name}
                  </a>
                  <a href="mailto:${email}" class="btn" style="display: inline-block; background: linear-gradient(135deg, #64748b 0%, #475569 100%); color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 15px; margin: 0 8px 12px 0; box-shadow: 0 4px 12px rgba(100, 116, 139, 0.3);">
                    ✉️ New Email
                  </a>
                </div>

                <!-- Footer -->
                <div style="border-top: 1px solid #e2e8f0; padding-top: 25px; text-align: center; margin-top: 30px;">
                  <div style="background: linear-gradient(135deg, #f8f9ff 0%, #f0f2ff 100%); padding: 20px; border-radius: 8px; border: 1px solid #e1e8ff;">
                    <p style="color: #64748b; font-size: 13px; margin: 0 0 8px 0; font-weight: 500;">
                      🚀 <strong>Portfolio Contact System</strong>
                    </p>
                    <p style="color: #94a3b8; font-size: 12px; margin: 0; line-height: 1.5;">
                      Auto-generated from your portfolio website • Marked as high priority<br>
                      Reply directly to this email to respond to ${name}
                    </p>
                  </div>
                </div>

              </td>
            </tr>
          </table>
          
        </body>
        </html>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Log successful submission (without sensitive data)
    console.log(`Contact form submission from: ${name} (${email}) - Subject: ${subject}`)

    return NextResponse.json(
      { 
        message: 'Message sent successfully! I\'ll get back to you soon.',
        success: true 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    
    // Return different error messages based on error type
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        return NextResponse.json(
          { error: 'Email authentication failed. Please try again later.' },
          { status: 503 }
        )
      }
      if (error.message.includes('timeout')) {
        return NextResponse.json(
          { error: 'Request timeout. Please check your connection and try again.' },
          { status: 408 }
        )
      }
    }

    return NextResponse.json(
      { error: 'Failed to send message. Please try again or contact me directly.' },
      { status: 500 }
    )
  }
}
