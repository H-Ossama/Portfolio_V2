import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case '&':
        return '&amp;'
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '"':
        return '&quot;'
      case "'":
        return '&#39;'
      default:
        return char
    }
  })
}

export async function POST(request: NextRequest) {
  try {
    const emailUser = process.env.EMAIL_USER?.trim() ?? ''
    // Gmail "app passwords" are often shown grouped with spaces; strip all whitespace.
    const emailPass = (process.env.EMAIL_PASS ?? '').replace(/\s+/g, '')
    const emailTo = process.env.EMAIL_TO?.trim() || emailUser

    let body: ContactFormData
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON payload' },
        { status: 400 }
      )
    }

    const name = (body.name ?? '').trim()
    const email = (body.email ?? '').trim()
    const subject = (body.subject ?? '').trim()
    const message = (body.message ?? '').trim()

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeSubject = escapeHtml(subject)
    const safeMessageHtml = escapeHtml(message).replace(/\r\n|\r|\n/g, '<br />')

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
        { error: 'Please write a message with at least 10 characters.' },
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
    if (!emailUser || !emailPass) {
      const missing = [
        !emailUser ? 'EMAIL_USER' : null,
        !emailPass ? 'EMAIL_PASS' : null,
      ].filter(Boolean)

      console.error(`Email configuration missing: ${missing.join(', ')}`)
      if (process.env.NODE_ENV !== 'production') {
        console.error(
          `Hint: create a .env.local file and set ${missing.join(' and ')}. See CONTACT_SETUP.md.`
        )
      }
      return NextResponse.json(
        {
          error: 'Email service is not configured yet. Please try again later.',
        },
        { status: 500 }
      )
    }

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
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
      from: `"${name} via Portfolio" <${emailUser}>`,
      to: emailTo,
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
      text: `New message from your portfolio\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n`,
      html: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>New message from your portfolio</title>
  </head>
  <body style="margin:0;padding:0;background:#f6f7fb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0f172a;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f6f7fb;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="640" style="max-width:640px;width:100%;background:#ffffff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(2,6,23,0.08);">
            <tr>
              <td style="padding:20px 24px;background:linear-gradient(135deg,#2563eb,#7c3aed);color:#ffffff;">
                <div style="font-size:14px;opacity:0.9;">Portfolio Contact</div>
                <div style="font-size:22px;font-weight:700;margin-top:4px;">New message received</div>
                <div style="font-size:13px;opacity:0.9;margin-top:6px;">${escapeHtml(new Date().toLocaleString())}</div>
              </td>
            </tr>

            <tr>
              <td style="padding:24px;">
                <div style="font-size:14px;color:#334155;margin-bottom:14px;">
                  You received a new message from your portfolio contact form.
                </div>

                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
                  <tr>
                    <td style="padding:14px 16px;background:#f8fafc;border-bottom:1px solid #e5e7eb;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#64748b;">Details</td>
                  </tr>
                  <tr>
                    <td style="padding:16px;">
                      <div style="display:flex;flex-wrap:wrap;gap:10px 16px;">
                        <div style="min-width:220px;flex:1;">
                          <div style="font-size:12px;color:#64748b;">Name</div>
                          <div style="font-size:15px;font-weight:600;color:#0f172a;">${safeName}</div>
                        </div>
                        <div style="min-width:220px;flex:1;">
                          <div style="font-size:12px;color:#64748b;">Email</div>
                          <div style="font-size:15px;font-weight:600;">
                            <a href="mailto:${safeEmail}" style="color:#2563eb;text-decoration:none;">${safeEmail}</a>
                          </div>
                        </div>
                        <div style="min-width:100%;">
                          <div style="font-size:12px;color:#64748b;margin-top:6px;">Subject</div>
                          <div style="font-size:15px;font-weight:600;color:#0f172a;">${safeSubject}</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>

                <div style="height:16px;"></div>

                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
                  <tr>
                    <td style="padding:14px 16px;background:#f8fafc;border-bottom:1px solid #e5e7eb;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#64748b;">Message</td>
                  </tr>
                  <tr>
                    <td style="padding:16px;font-size:15px;line-height:1.65;color:#0f172a;">
                      ${safeMessageHtml}
                    </td>
                  </tr>
                </table>

                <div style="height:18px;"></div>

                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td align="left">
                      <a href="mailto:${safeEmail}?subject=${encodeURIComponent(`Re: ${subject}`)}" style="display:inline-block;background:#2563eb;color:#ffffff;text-decoration:none;font-weight:600;padding:12px 16px;border-radius:10px;">Reply</a>
                      <span style="font-size:12px;color:#64748b;margin-left:10px;">or just hit “Reply” in your email client</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:16px 24px;border-top:1px solid #e5e7eb;background:#ffffff;color:#64748b;font-size:12px;">
                Sent from your portfolio contact form. Reply-to is set to the sender.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`,
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
