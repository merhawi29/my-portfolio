import emailjs from '@emailjs/browser'

export type ContactFormData = {
  name: string
  email: string
  message: string
}

const getEnv = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('Email service is not configured. Please set up EmailJS environment variables. Check the README for setup instructions.')
  }

  return { serviceId, templateId, publicKey }
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const { serviceId, templateId, publicKey } = getEnv()

  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: data.name,
        reply_to: data.email,
        message: data.message,
      },
      { publicKey }
    )
  } catch (error: any) {
    // Handle EmailJS specific errors
    if (error?.status === 412) {
      throw new Error('Gmail authentication error (412). Please reconnect your Gmail service in EmailJS dashboard: Go to Email Services → Select your service → Disconnect → Connect Account again. This usually happens when the Gmail token expires.')
    }
    if (error?.status === 400) {
      throw new Error('Invalid request (400). Please check your EmailJS service and template configuration. Ensure your template uses: {{from_name}}, {{reply_to}}, and {{message}}')
    }
    if (error?.status === 403) {
      throw new Error('Access denied (403). Please check your EmailJS Public Key.')
    }
    if (error?.status === 404) {
      throw new Error('Service or template not found (404). Please verify your Service ID and Template ID.')
    }
    if (error?.text) {
      throw new Error(`EmailJS error: ${error.text}`)
    }
    // Re-throw if it's already an Error instance
    if (error instanceof Error) {
      throw error
    }
    throw new Error('Failed to send email. Please try again later.')
  }
}


