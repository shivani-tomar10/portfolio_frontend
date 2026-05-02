import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        toast({
          title: 'Message sent!',
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        toast({
          title: 'Error',
          description: 'Failed to send message. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-12">
            Let's <span className="text-gradient">connect</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-8"
          >
            <p className="text-muted-foreground leading-relaxed">
              Have a project in mind or just want to chat? Drop me a message and I'll get back to you within 24 hours.
            </p>

            {[
              { icon: Mail, label: 'hello@developer.com' },
              { icon: MapPin, label: 'San Francisco, CA' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="text-primary" size={18} />
                </div>
                <span className="text-sm text-muted-foreground">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              />
              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              />
            </div>
            <textarea
              placeholder="Your message..."
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="flex items-center gap-2 px-8 py-3 rounded-lg font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <Send size={16} />
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
