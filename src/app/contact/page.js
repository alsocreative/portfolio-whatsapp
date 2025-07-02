import WhatsAppLayout from '../../components/WhatsAppLayout';

export const metadata = {
  title: "Contact - John Doe | Developer Portfolio",
  description: "Get in touch with John Doe for new opportunities and collaborations.",
};

export default function ContactPage() {
  return <WhatsAppLayout defaultContact="contact" />;
}
