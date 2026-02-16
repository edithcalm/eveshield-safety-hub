import { Shield, MapPin, Wifi, Users, Heart, Eye, Sparkles, ArrowRight } from "lucide-react";
import braceletDuo from "@/assets/bracelet-duo.png";
import braceletSingle from "@/assets/bracelet-single.png";
import braceletThird from "@/assets/bracelet-third.png";
import SectionWrapper from "@/components/SectionWrapper";
import { Link } from "react-router-dom";

const values = [
  { icon: Heart, title: "Accessibility", description: "Technology that works for everyone, regardless of economic status or location." },
  { icon: Shield, title: "Dignity", description: "Every individual deserves safety solutions that respect their humanity." },
  { icon: Users, title: "Community-Led Innovation", description: "Solutions built with and for the communities they serve." },
  { icon: Eye, title: "Trauma-Informed Design", description: "Every feature is designed with sensitivity to lived experiences of violence." },
];

const productFeatures = [
  { icon: Shield, title: "Instant SOS Trigger", desc: "Silent or voice-activated emergency alert at the press of a button." },
  { icon: MapPin, title: "GPS Location Sharing", desc: "Real-time location broadcasting to trusted contacts and responders." },
  { icon: Wifi, title: "Low-Connectivity Optimization", desc: "Functions reliably even in areas with limited network infrastructure." },
  { icon: Users, title: "Linked to Trusted Contacts", desc: "Pre-configured network of family, friends, and community responders." },
  { icon: Sparkles, title: "Community Response Model", desc: "Connected to a broader ecosystem of verified support and rapid response." },
];

const steps = [
  { step: "01", title: "Wear the Bracelet", desc: "A discreet, comfortable wearable designed for everyday use." },
  { step: "02", title: "Trigger Silent or Voice SOS", desc: "Activate an emergency signal with a simple gesture or voice command." },
  { step: "03", title: "Alert Trusted Contacts", desc: "Instantly notify your pre-selected network with your live location." },
  { step: "04", title: "Connect to Support Ecosystem", desc: "Access community responders, services, and support infrastructure." },
];

const WhoWeAre = () => {
  return (
    <div>
      {/* HERO */}
      <section className="gradient-hero pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="container-narrow mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight fade-in-up">
            Reimagining Safety Through{" "}
            <span className="gradient-purple-text">Technology & Community</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed fade-in-up-delay-1">
            EveShield is a Kenya-based social impact safety technology initiative building wearable emergency response infrastructure designed for dignity, accessibility, and real-world use.
          </p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="section-padding bg-background">
        <SectionWrapper>
          <div className="container-narrow mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="glass-card p-8 sm:p-10">
                <h3 className="text-xs uppercase tracking-[0.2em] text-primary mb-4 font-semibold">Our Vision</h3>
                <p className="text-lg sm:text-xl font-display font-medium leading-relaxed">
                  A world where every woman and vulnerable individual has access to immediate, dignified safety infrastructure.
                </p>
              </div>
              <div className="glass-card p-8 sm:p-10">
                <h3 className="text-xs uppercase tracking-[0.2em] text-primary mb-4 font-semibold">Our Mission</h3>
                <p className="text-lg sm:text-xl font-display font-medium leading-relaxed">
                  To design and deploy wearable emergency response technology that bridges the gap between risk and response in Kenya and beyond.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Core <span className="gradient-purple-text">Values</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {values.map((v, i) => (
                <div key={i} className="glass-card p-6 text-center group glow-purple-hover transition-all duration-500 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/25 transition-colors">
                    <v.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </section>

      {/* PRODUCT */}
      <section className="section-padding gradient-section">
        <SectionWrapper>
          <div className="container-narrow mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
                  The EveShield{" "}
                  <span className="gradient-purple-text">Safety Bracelet</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  EveShield is not just hardware. It is a community-powered response ecosystem. Our bracelet combines cutting-edge wearable technology with community infrastructure to create a comprehensive safety solution.
                </p>
                <div className="flex flex-col gap-3">
                  {productFeatures.map((f, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <f.icon size={16} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{f.title}</h4>
                        <p className="text-xs text-muted-foreground">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <img src={braceletDuo} alt="EveShield Safety Bracelet" className="w-72 sm:w-80 lg:w-96 float-animation drop-shadow-2xl" />
                <img src={braceletSingle} alt="EveShield Bracelet Side" className="absolute -bottom-6 -right-4 w-36 sm:w-44 float-animation-delayed drop-shadow-2xl opacity-60" />
                <img src={braceletThird} alt="EveShield Bracelet Pattern" className="absolute -bottom-4 -left-4 w-32 sm:w-40 float-animation drop-shadow-2xl opacity-70" style={{ animationDelay: "1s" }} />
              </div>
            </div>
          </div>
        </SectionWrapper>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-padding bg-background">
        <SectionWrapper>
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
                How It <span className="gradient-purple-text">Works</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <div key={i} className="glass-card p-6 sm:p-8 text-center relative group glow-purple-hover transition-all duration-500 hover:-translate-y-1">
                  <div className="text-5xl font-display font-bold gradient-purple-text opacity-30 mb-4">{s.step}</div>
                  <h3 className="font-display font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  {i < steps.length - 1 && (
                    <ArrowRight size={20} className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-primary/40" />
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm glow-purple glow-purple-hover transition-all duration-300 hover:bg-accent"
              >
                Join Early Access
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </SectionWrapper>
      </section>
    </div>
  );
};

export default WhoWeAre;
