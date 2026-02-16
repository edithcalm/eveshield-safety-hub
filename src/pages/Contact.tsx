import { useState } from "react";
import { MapPin, Phone, Mail, ArrowRight, Users, CheckCircle } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    interest: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const formBody = new URLSearchParams();
      formBody.append("entry.name", formData.name);
      formBody.append("entry.email", formData.email);
      formBody.append("entry.phone", formData.phone);
      formBody.append("entry.city", formData.city);
      formBody.append("entry.interest", formData.interest);

      // For the Google Sheet, we simulate the submission
      // In production, connect to Google Apps Script web app
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* HEADER */}
      <section className="gradient-hero pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="container-narrow mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight fade-in-up">
            Get in <span className="gradient-purple-text">Touch</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed fade-in-up-delay-1">
            Join the movement, ask questions, or partner with us to build a safer Kenya.
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="section-padding bg-background">
        <SectionWrapper>
          <div className="container-narrow mx-auto">
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-16">
              <div className="glass-card p-6 sm:p-8 text-center glow-purple-hover transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-4">
                  <MapPin size={22} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">Office</h3>
                <p className="text-sm text-muted-foreground">Manga House<br />9 Kiambere Rd, UpperHill<br />Nairobi, Kenya</p>
              </div>
              <div className="glass-card p-6 sm:p-8 text-center glow-purple-hover transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-4">
                  <Phone size={22} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">Phone</h3>
                <p className="text-sm text-muted-foreground">
                  <a href="tel:+254721606409" className="hover:text-foreground transition-colors">+254 721 606 409</a><br />
                  <a href="tel:+254792868385" className="hover:text-foreground transition-colors">+254 792 868 385</a>
                </p>
              </div>
              <div className="glass-card p-6 sm:p-8 text-center glow-purple-hover transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-4">
                  <Mail size={22} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">
                  <a href="mailto:eveshield2@gmail.com" className="hover:text-foreground transition-colors">eveshield2@gmail.com</a>
                </p>
              </div>
            </div>

            {/* FORM */}
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                  Join the <span className="gradient-purple-text">Early Access</span> List
                </h2>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                  <Users size={16} className="text-primary" />
                  <span className="text-sm text-primary font-medium">1,284 People Already Joined</span>
                </div>
              </div>

              {submitted ? (
                <div className="glass-card p-10 text-center glow-purple fade-in-up">
                  <CheckCircle size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-display font-bold mb-2">You're on the list!</h3>
                  <p className="text-muted-foreground">Thank you for joining the EveShield movement. We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-10 space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                        placeholder="+254..."
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2">City</label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                        placeholder="Nairobi"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Interest</label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                      >
                        <option value="">Select interest</option>
                        <option value="early-access">Early Access User</option>
                        <option value="partner">Partner / Organization</option>
                        <option value="investor">Investor</option>
                        <option value="volunteer">Volunteer / Advocate</option>
                        <option value="media">Media / Press</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm glow-purple glow-purple-hover transition-all duration-300 hover:bg-accent disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {submitting ? "Submitting..." : "Join Early Access"}
                    {!submitting && <ArrowRight size={16} />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </SectionWrapper>
      </section>

      {/* WHATSAPP COMMUNITY */}
      <section className="section-padding gradient-section">
        <SectionWrapper>
          <div className="container-narrow mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Be Part of the <span className="gradient-purple-text">Community</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8">
              Connect with advocates, early supporters, and community members helping shape the future of safety in Kenya.
            </p>
            <a
              href="https://chat.whatsapp.com/IGK8HRMceia4ReTvn4CMVe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] font-semibold text-sm transition-all duration-300 hover:bg-[hsl(142,70%,45%)]"
              style={{ boxShadow: "0 0 30px hsl(142 70% 40% / 0.3)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 0 0 .612.616l4.529-1.456A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 0 1-5.39-1.582l-.386-.236-2.687.864.882-2.634-.258-.404A9.935 9.935 0 0 1 2 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
              Join WhatsApp Community
            </a>
          </div>
        </SectionWrapper>
      </section>
    </div>
  );
};

export default Contact;
