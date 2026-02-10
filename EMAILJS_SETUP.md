# EmailJS Setup Guide

This guide will help you set up EmailJS to send emails from the contact form without a backend.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier allows 200 emails/month)
3. Verify your email address

## Step 2: Connect Your Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Select **Gmail** as your email service
4. Follow the instructions to connect your Gmail account (zylateinfotech@gmail.com)
5. Note down your **Service ID** (e.g., `service_xxxxx`)

## Step 3: Create Email Templates

### Template 1: Company Notification Email

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Name it: "Company Contact Form"
4. Set **To Email** to: `zylateinfotech@gmail.com`
5. Set **From Name** to: `{{from_name}}`
6. Set **From Email** to: `zylateinfotech@gmail.com`
7. Set **Reply To** to: `{{from_email}}`
8. Set **Subject** to: `New Contact Form Submission - {{from_name}}`
9. In the **Content** section, use this HTML:

```html
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
```

10. Click **Save**
11. Note down the **Template ID** (e.g., `template_xxxxx`)

### Template 2: User Confirmation Email

1. Create another template
2. Name it: "User Confirmation"
3. Set **To Email** to: `{{to_email}}`
4. Set **From Name** to: `Zylate Digital Canvas`
5. Set **From Email** to: `zylateinfotech@gmail.com`
6. Set **Subject** to: `Thank You for Contacting Zylate Digital Canvas`
7. In the **Content** section, use this HTML:

```html
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
```

8. Click **Save**
9. Note down the **Template ID** (e.g., `template_xxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in EmailJS dashboard
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxx`)
3. Copy it

## Step 5: Configure Your Application

You have two options:

### Option A: Environment Variables (Recommended)

1. Create a `.env` file in the root of your project
2. Add the following:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID_COMPANY=your_company_template_id_here
VITE_EMAILJS_TEMPLATE_ID_USER=your_user_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Restart your development server

### Option B: Direct Configuration

1. Open `src/config/emailjs.ts`
2. Replace the placeholder values with your actual EmailJS credentials:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: "your_service_id_here",
  TEMPLATE_ID_COMPANY: "your_company_template_id_here",
  TEMPLATE_ID_USER: "your_user_template_id_here",
  PUBLIC_KEY: "your_public_key_here",
};
```

## Step 6: Test the Form

1. Start your development server
2. Go to the contact form
3. Fill out and submit the form
4. Check:
   - You should receive an email at zylateinfotech@gmail.com
   - The user should receive a confirmation email at their email address

## Troubleshooting

- **Emails not sending**: Check that all IDs and keys are correct
- **Template variables not working**: Make sure variable names match exactly (case-sensitive)
- **CORS errors**: EmailJS handles CORS automatically, but check your browser console
- **Rate limiting**: Free tier allows 200 emails/month

## Support

For EmailJS support, visit: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)

