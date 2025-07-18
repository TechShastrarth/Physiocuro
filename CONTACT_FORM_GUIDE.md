# Contact Form Setup Guide

## Current Status
✅ **Working**: The contact form is fully functional and compatible with Next.js 15
✅ **Fixed Issues**: 
- TypeScript compatibility
- React JSX syntax (`class` → `className`)
- Proper form validation
- Next.js App Router compatibility
- Removed SEO dependency issues

## To Enable Email Functionality

### 1. Install EmailJS
```bash
npm install @emailjs/browser
```

### 2. Set up EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create an account and get your:
   - Service ID
   - Template ID  
   - Public Key

### 3. Add Environment Variables
Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 4. Update the Contact Page
In `src/app/contact-us/page.tsx`, uncomment the EmailJS code and comment out the demo alert:

```typescript
// Uncomment this import at the top:
// import emailjs from '@emailjs/browser';

// In the sendEmail function, uncomment the EmailJS code:
emailjs
  .sendForm(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
    form.current,
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
  )
  .then(
    (result: any) => {
      alert("Message sent successfully!");
      form.current?.reset();
    },
    (error: any) => {
      console.error("Error:", error);
      alert("Failed to send message. Please try again.");
    }
  );

// Comment out the demo alert:
// alert("Form submitted successfully! Email functionality can be enabled by installing @emailjs/browser package.");
```

### 5. EmailJS Template Variables
Make sure your EmailJS template uses these variables:
- `{{user_name}}` - for the name field
- `{{user_email}}` - for the email field  
- `{{user_phone}}` - for the phone field

## Form Features
- ✅ Proper form validation with `required` attributes
- ✅ Correct input types (`email`, `tel`, `text`)
- ✅ Form reset after submission
- ✅ Hover effects on submit button
- ✅ Responsive design
- ✅ TypeScript support

## Meta Tags
The contact page has comprehensive SEO meta tags configured in `src/app/contact-us/layout.tsx`:
- Title: "Contact Us - Physiocuro | Book Appointment | Dombivli East Clinic"
- Description: Contact information and appointment booking
- Keywords: Contact-related search terms
- OpenGraph and Twitter card support
