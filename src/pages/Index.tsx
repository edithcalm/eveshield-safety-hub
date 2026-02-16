import { Link } from "react-router-dom";
import { Shield, MapPin, Wifi, Users, ArrowRight } from "lucide-react";
import braceletDuo from "@/assets/bracelet-duo.png";
import braceletSingle from "@/assets/bracelet-single.png";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionWrapper from "@/components/SectionWrapper";

const features = [
  { icon: Shield, title: "Instant SOS Activation", description: "One-touch silent or voice-activated emergency trigger for immediate response." },
  { icon: MapPin, title: "Real-Time Location Sharing", description: "GPS-enabled location sharing with trusted contacts during emergencies." },
  { icon: Wifi, title: "Low-Connectivity Design", description: "Engineered to function in areas with limited or unreliable network coverage." },
  { icon: Users, title: "Community-Linked Support", description: "Connected to a verified community response network for rapid assistance." },
];

const Index = () => {
  return (
    <div>
      {/* HERO */}
      <section className="gradient-hero min-h-screen flex items-center relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="container-narrow mx-auto px-4 sm:px-6 pt-24 pb-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] tracking-tight fade-in-up">
                Safety Should Never Be{" "}
                <span className="gradient-purple-text">Conditional.</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 fade-in-up-delay-1">
                EveShield is building wearable emergency response technology designed to help women and vulnerable individuals access immediate support — even in low-connectivity environments.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start fade-in-up-delay-2">
                <Link
                  to="/contact"
                  className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm glow-purple glow-purple-hover inline-flex items-center justify-center gap-2 transition-all duration-300 hover:bg-accent"
                >
                  Join Early Access
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/who-we-are"
                  className="px-8 py-3.5 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-all duration-300 inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Bracelet images */}
            <div className="relative flex items-center justify-center fade-in-up-delay-2">
              <img
                src={braceletDuo}
                alt="EveShield Safety Bracelet"
                className="w-64 sm:w-80 lg:w-96 float-animation drop-shadow-2xl"
              />
              <img
                src={braceletSingle}
                alt="EveShield Bracelet Side View"
                className="absolute -bottom-4 -left-4 sm:left-0 w-32 sm:w-40 lg:w-48 float-animation-delayed drop-shadow-2xl opacity-70"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SNAPSHOT */}
      <section className="gradient-section section-padding">
        <SectionWrapper>
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
                The Reality in <span className="gradient-purple-text">Kenya</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Gender-based violence remains one of the most urgent crises in Kenya. These numbers represent lives, families, and communities that demand systemic change.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10">
              <AnimatedCounter end={34} label="Physical Violence" description="of women in Kenya have experienced physical violence since age 15." source="KDHS 2022" />
              <AnimatedCounter end={16} label="Recent Violence" description="of women experienced physical violence in the past 12 months." source="KDHS 2022" />
              <AnimatedCounter end={41} suffix="B" prefix="KES " label="Economic Impact" description="GBV costs Kenya an estimated KES 41 billion annually." />
            </div>

            <div className="text-center">
              <Link
                to="/data"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/40 text-primary font-medium text-sm hover:bg-primary/10 transition-all duration-300"
              >
                View Full Data Dashboard
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </SectionWrapper>
      </section>

      {/* SOLUTION PREVIEW */}
      <section className="section-padding bg-background">
        <SectionWrapper>
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
                A Wearable Safety <span className="gradient-purple-text">Ecosystem</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                More than a device — a connected infrastructure of safety, community, and emergency response designed for Kenya's realities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="glass-card p-6 sm:p-8 group glow-purple-hover transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors duration-300">
                    <f.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-base mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </section>

      {/* MANIFESTO */}
      <section className="section-padding gradient-hero relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
        <SectionWrapper>
          <div className="container-narrow mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
              We Refuse to{" "}
              <span className="gradient-purple-text">Normalize Fear.</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
              Safety should not depend on privilege, signal strength, or location.
            </p>
            <p className="text-lg sm:text-xl text-foreground max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
              We are building technology that turns vulnerability into agency.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm glow-purple glow-purple-hover transition-all duration-300 hover:bg-accent"
            >
              Join the Movement
              <ArrowRight size={16} />
            </Link>
          </div>
        </SectionWrapper>
      </section>
    </div>
  );
};

export default Index;
