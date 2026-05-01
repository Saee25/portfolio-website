import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { profile } from "@/data/portfolio";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message received",
      description: "Thank you for reaching out. I will get back to you shortly.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-pad">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Get in <span className="neon-text">Touch</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="glass rounded-2xl p-8 neon-border space-y-5"
          >
            <h3 className="font-bold text-xl mb-4">Get in touch</h3>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-primary transition-colors">
              <span className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center"><Mail className="w-4 h-4 text-primary" /></span>
              <span className="text-sm">{profile.email}</span>
            </a>
            <a href={`tel:${profile.phone}`} className="flex items-center gap-3 hover:text-primary transition-colors">
              <span className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center"><Phone className="w-4 h-4 text-primary" /></span>
              <span className="text-sm">{profile.phone}</span>
            </a>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center"><MapPin className="w-4 h-4 text-primary" /></span>
              <span className="text-sm">{profile.location}</span>
            </div>

            <div className="pt-4 border-t border-border/50 flex gap-3">
              <a href={profile.links.github} target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full glass flex items-center justify-center hover:neon-glow hover:scale-110 transition-all"><Github className="w-4 h-4" /></a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full glass flex items-center justify-center hover:neon-glow hover:scale-110 transition-all"><Linkedin className="w-4 h-4" /></a>
              <a href={profile.links.leetcode} target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full glass flex items-center justify-center hover:neon-glow hover:scale-110 transition-all"><SiLeetcode className="w-4 h-4" /></a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="glass rounded-2xl p-8 space-y-4"
          >
            <input
              required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
            <input
              required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Your email"
              className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
            <textarea
              required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Your message"
              className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-full bg-gradient-hero text-primary-foreground font-medium flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
