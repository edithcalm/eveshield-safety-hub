import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-eve-dark">
      <div className="container-narrow mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="text-xl font-display font-bold tracking-tight">
              Eve<span className="gradient-purple-text">Shield</span>
            </span>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Building wearable emergency response technology for safety, dignity, and community.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Navigate</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link to="/who-we-are" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Who We Are</Link>
              <Link to="/data" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Data Dashboard</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Contact</h4>
            <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <span>Manga House, 9 Kiambere Rd</span>
              <span>UpperHill, Nairobi, Kenya</span>
              <a href="mailto:eveshield2@gmail.com" className="hover:text-foreground transition-colors">eveshield2@gmail.com</a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Follow Us</h4>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "https://www.instagram.com/eveshield/" },
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61586745593219" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/eveshield/" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
              <a href="https://x.com/eveshieldorg" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all duration-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@eveshieldorg" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all duration-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.91a8.27 8.27 0 0 0 4.76 1.51V7a4.84 4.84 0 0 1-1-.31z"/></svg>
              </a>
              <a href="https://chat.whatsapp.com/IGK8HRMceia4ReTvn4CMVe" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all duration-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 0 0 .612.616l4.529-1.456A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 0 1-5.39-1.582l-.386-.236-2.687.864.882-2.634-.258-.404A9.935 9.935 0 0 1 2 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} EveShield. All rights reserved. Building safer communities through technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
