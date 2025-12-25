import emailjs from "@emailjs/browser";

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "Email service is not configured. Please set up EmailJS environment variables in your Vite project."
    );
  }

  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: data.name,
        reply_to: data.email,
        message: data.message,
      },
      publicKey
    );
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Email send failed:", error);
    throw error;
  }
}
