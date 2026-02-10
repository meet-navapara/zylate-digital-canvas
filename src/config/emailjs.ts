// EmailJS Configuration
// To set up EmailJS:
// 1. Sign up at https://www.emailjs.com/
// 2. Connect your Gmail account (zylateinfotech@gmail.com)
// 3. Create two email templates:
//    - Template 1: For company notifications (to zylateinfotech@gmail.com)
//    - Template 2: For user confirmations (to user's email)
// 4. Get your Service ID, Template IDs, and Public Key from EmailJS dashboard
// 5. Replace the values below or use environment variables

export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_dkzb5kl", // Your EmailJS Service ID
  TEMPLATE_ID_COMPANY: "template_fqx70mj", // Template for company email (to zylateinfotech@gmail.com)
  TEMPLATE_ID_USER: "template_mcxjyjk", // Template for user confirmation email
  PUBLIC_KEY: "EK2G7-EyQhAJvp6zM", // Your EmailJS Public Key
};

// Email templates content for reference
// These will be used in EmailJS template editor

export const EMAIL_TEMPLATES = {
  // Template for company email (to zylateinfotech@gmail.com)
  COMPANY_EMAIL: {
    subject: "New Contact Form Submission - {{from_name}}",
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
          .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #667eea; }
          .message-box { background: white; padding: 15px; border-radius: 5px; border-left: 3px solid #764ba2; margin-top: 10px; }
          .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>You have received a new message from your website</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">{{from_name}}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">{{from_email}}</div>
            </div>
            <div class="field">
              <div class="label">Company:</div>
              <div class="value">{{company}}</div>
            </div>
            <div class="field">
              <div class="label">Service Needed:</div>
              <div class="value">{{service}}</div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="message-box">{{message}}</div>
            </div>
            <div class="footer">
              <p>This email was sent from your website contact form.</p>
              <p>Reply to: {{from_email}}</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
  },
  
  // Template for user confirmation email
  USER_EMAIL: {
    subject: "Thank You for Contacting Zylate Digital Canvas",
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .message { background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 3px solid #667eea; }
          .info-box { background: #e8f4f8; padding: 15px; border-radius: 5px; margin: 15px 0; }
          .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          .button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 10px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You, {{to_name}}!</h1>
            <p>We've received your message</p>
          </div>
          <div class="content">
            <div class="message">
              <p>Dear {{to_name}},</p>
              <p>Thank you for contacting <strong>Zylate Digital Canvas</strong>. We have successfully received your message and our team will get back to you within 24 hours.</p>
              <p>We appreciate your interest in our services and look forward to helping you with your project.</p>
            </div>
            <div class="info-box">
              <p><strong>What happens next?</strong></p>
              <ul>
                <li>Our team will review your message</li>
                <li>We'll respond to you within 24 hours</li>
                <li>We may contact you for additional details if needed</li>
              </ul>
            </div>
            <div style="text-align: center;">
              <p>If you have any urgent questions, feel free to contact us directly:</p>
              <p><strong>Email:</strong> zylateinfotech@gmail.com</p>
              <p><strong>Phone:</strong> +91 7383168307</p>
            </div>
            <div class="footer">
              <p>Best regards,<br>The Zylate Digital Canvas Team</p>
              <p>This is an automated confirmation email. Please do not reply to this message.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
  },
};

