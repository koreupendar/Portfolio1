import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Linkedin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  user_name: z.string().trim().min(1, "Name is required").max(100),
  user_email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const contactInfo = [
  { icon: Mail, label: "koreupendar12345@gmail.com", href: "mailto:koreupendar12345@gmail.com" },
  { icon: Phone, label: "+91-9392228532", href: "tel:+919392228532" },
  { icon: Linkedin, label: "Kore Upendar", href: "https://www.linkedin.com/feed/" },
];

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }

    setSending(true);
    try {
      await emailjs.sendForm("service_sfwjbc1", "template_p8q91qh", formRef.current, "EaNvgU0JMV7pezaoh");
      toast.success("Message sent successfully!");
      formRef.current.reset();
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-12">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            {contactInfo.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 flex items-center gap-4 group"
              >
                <div className="p-3 rounded-lg bg-primary/15 text-primary group-hover:bg-primary/25 transition-colors">
                  <c.icon size={22} />
                </div>
                <span className="text-foreground text-sm font-medium">{c.label}</span>
              </a>
            ))}
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-6 space-y-4 gradient-border">
            <input
              name="user_name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
            />
            <input
              name="user_email"
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full py-3 rounded-lg font-medium text-primary-foreground flex items-center justify-center gap-2 disabled:opacity-60"
              style={{ background: "var(--gradient-primary)" }}
            >
              {sending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
