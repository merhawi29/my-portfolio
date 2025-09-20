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
}


