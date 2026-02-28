// --- UI Enhancement: Scroll Progress Bar & Sticky Glass Navbar ---
document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('navbar');
  const progressBar = document.getElementById('scroll-progress');
  function updateProgressBar() {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + '%';
  }
  function handleNavbarGlass() {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', function () {
    updateProgressBar();
    handleNavbarGlass();
  });
  updateProgressBar();
  handleNavbarGlass();
});
/**
 * APP.JS
 * ------
 * Page content (HTML strings) and page-specific logic: charts on Data page,
 * contact form on Contact page. Registers each path with the router.
 */

(function () {
  'use strict';

  // Store Chart instances so we can destroy them when leaving the Data page (avoids duplicates)
  var chartInstances = [];

  /** Page content: each key is a path, value is a function that returns the HTML for that page */
  var pages = {
    '/': function () {
      return `
      <!-- HERO -->
      <section class="gradient-hero hero-section">
        <div class="hero-glow"></div>
        <div class="container-narrow hero-content">
          <div class="hero-grid">
            <div class="hero-text">
              <h1 class="hero-title fade-in-up">
                Technology for Immediate Safety. A System for <span class="gradient-purple-text">Long-Term Healing.</span>
              </h1>
              <p class="hero-description fade-in-up-delay-1">
                EveShield is a non-profit organization building an integrated safety ecosystem for survivors of gender-based violence and sexual assault. Our GPS-enabled wearable device enables instant emergency response, while our platform connects survivors to mental health professionals and legal advocates for long-term recovery and justice.
              </p>
              <div class="hero-buttons fade-in-up-delay-2 flex flex-col sm:flex-row gap-4">
                <a href="#/contact" class="btn btn-modern-waitlist btn-lg w-full sm:w-auto" data-path="/contact">
                  Join the Waiting List
                  <svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#/who-we-are" class="btn btn-secondary btn-lg w-full sm:w-auto" data-path="/who-we-are">
                  Learn More
                  <svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div class="hero-images fade-in-up-delay-2">
              <img src="assets/bracelet-duo.png" alt="EveShield Safety Bracelet" class="hero-image-main float-animation" loading="eager" />
              <img src="assets/bracelet-single.png" alt="EveShield Bracelet Side View" class="hero-image-secondary bottom-left float-animation-delayed" style="opacity: 1;" loading="lazy" />
              <img src="assets/bracelet-third.png" alt="EveShield Bracelet Pattern" class="hero-image-secondary top-right float-animation" style="opacity: 0.9; animation-delay: 1s;" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <!-- PROBLEM SNAPSHOT -->
      <section class="gradient-section section-padding">
        <div class="section-wrapper">
          <div class="container-narrow">
            <div class="text-center mb-8 mb-sm-12">
              <h2 class="text-3xl text-sm-4xl text-lg-5xl font-display font-bold mb-4">
                The Reality in <span class="gradient-purple-text">Kenya</span>
              </h2>
              <p class="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Gender-based violence remains one of the most urgent crises in Kenya. These numbers represent lives, families, and communities that demand systemic change.
              </p>
            </div>

            <div class="grid grid-cols-1 grid-cols-sm-3 gap-6 mb-10">
              <div class="glass-card counter-card glow-purple-hover" data-end="34" data-suffix="%">
                <div class="counter-value gradient-purple-text">0%</div>
                <p class="counter-label">Physical Violence</p>
                <p class="counter-description">of women in Kenya have experienced physical violence since age 15.</p>
                <p class="counter-source">KDHS 2022</p>
              </div>
              <div class="glass-card counter-card glow-purple-hover" data-end="16" data-suffix="%">
                <div class="counter-value gradient-purple-text">0%</div>
                <p class="counter-label">Recent Violence</p>
                <p class="counter-description">of women experienced physical violence in the past 12 months.</p>
                <p class="counter-source">KDHS 2022</p>
              </div>
              <div class="glass-card counter-card glow-purple-hover" data-end="41" data-prefix="KES " data-suffix="B">
                <div class="counter-value gradient-purple-text">KES 0B</div>
                <p class="counter-label">Economic Impact</p>
                <p class="counter-description">GBV costs Kenya an estimated KES 41 billion annually.</p>
              </div>
            </div>

            <div class="text-center">
              <a href="#/data" class="btn btn-secondary btn-sm" data-path="/data">
                View Full Data Dashboard
                <span class="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- SOLUTION PREVIEW -->
      <section class="section-padding bg-background">
        <div class="section-wrapper">
          <div class="container-narrow">
            <div class="text-center mb-8 mb-sm-12">
              <h2 class="text-3xl text-sm-4xl text-lg-5xl font-display font-bold mb-4">
                A Wearable Safety <span class="gradient-purple-text">Ecosystem</span>
              </h2>
              <p class="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                More than a device, a connected infrastructure of safety, community, and emergency response designed for Kenya's realities.
              </p>
            </div>

            <div class="grid grid-cols-1 grid-cols-sm-2 grid-cols-lg-4 gap-6">
              <div class="glass-card feature-card p-6 p-sm-8 glow-purple-hover">

                <h3 class="feature-title">Instant SOS Activation</h3>
                <p class="feature-description">One-touch silent or voice-activated emergency trigger for immediate response.</p>
              </div>
              <div class="glass-card feature-card p-6 p-sm-8 glow-purple-hover">

                <h3 class="feature-title">Real-Time Location Sharing</h3>
                <p class="feature-description">GPS-enabled location sharing with trusted contacts during emergencies.</p>
              </div>
              <div class="glass-card feature-card p-6 p-sm-8 glow-purple-hover">

                <h3 class="feature-title">Low-Connectivity Design</h3>
                <p class="feature-description">Engineered to function in areas with limited or unreliable network coverage.</p>
              </div>
              <div class="glass-card feature-card p-6 p-sm-8 glow-purple-hover">

                <h3 class="feature-title">Community-Linked Support</h3>
                <p class="feature-description">Connected to a verified community response network for rapid assistance, ie emergency contact, bystanders and security.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- MANIFESTO -->
      <section class="section-padding gradient-hero relative overflow-hidden">
        <div class="section-wrapper">
          <div class="container-narrow text-center relative z-10">
            <h2 class="text-3xl text-sm-4xl text-lg-5xl font-display font-bold mb-6 leading-tight">
              We Refuse to <span class="gradient-purple-text">Normalize Fear.</span>
            </h2>
            <p class="text-lg text-sm-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
              Safety should not depend on privilege, signal strength, or location.
            </p>
            <p class="text-lg text-sm-xl text-foreground max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
              We are building technology that turns vulnerability into agency.
            </p>
            <a href="#/contact" class="btn btn-primary btn-lg" data-path="/contact">
              Join the Movement
              <svg class="lucide lucide-arrow-right w-5 h-5 ml-2 inline-flex" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>
    `;
    },

    // Who We Are Page
    '/who-we-are': function () {
      return `
      <!-- HERO -->
      <section class="gradient-hero page-header">
        <div class="container-narrow text-center">
          <h1 class="page-title fade-in-up">
            Reimagining Safety Through <span class="gradient-purple-text">Technology & Community</span>
          </h1>
          <p class="page-subtitle fade-in-up-delay-1">
            EveShield is a Kenya-based social impact safety technology initiative building wearable emergency response infrastructure designed for dignity, accessibility, and real-world use.
          </p>
        </div>
      </section>

      <!-- VISION & MISSION -->
      <section class="section-padding bg-background">
        <div class="section-wrapper">
          <div class="container-narrow">
            <div class="grid grid-cols-1 grid-cols-md-2 gap-6 mb-10">
              <div class="glass-card p-8 p-sm-10">
                <h3 class="text-xs uppercase tracking-wider text-primary mb-4 font-semibold">Our Vision</h3>
                <p class="text-lg text-sm-xl font-display font-medium leading-relaxed">
                  A world where every woman and vulnerable individual has access to immediate, dignified safety infrastructure.
                </p>
              </div>
              <div class="glass-card p-8 p-sm-10">
                <h3 class="text-xs uppercase tracking-wider text-primary mb-4 font-semibold">Our Mission</h3>
                <p class="text-lg text-sm-xl font-display font-medium leading-relaxed">
                  To design and deploy wearable emergency response technology that bridges the gap between risk and response in Kenya and beyond.
                </p>
              </div>
            </div>

            <br/>
            <!-- Values -->
            <div class="text-center mb-8">
              <h2 class="text-3xl text-sm-4xl font-display font-bold mb-4">Core <span class="gradient-purple-text">Values</span></h2>
            </div>
            <div class="grid grid-cols-1 grid-cols-sm-2 grid-cols-lg-4 gap-6">
              <div class="glass-card feature-card p-6 text-center glow-purple-hover">
                <div class="feature-icon mx-auto">
                  <svg class="lucide lucide-phone w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <h3 class="feature-title">Accessibility</h3>
                <p class="feature-description">Technology that works for every woman, regardless of economic status or location.</p>
              </div>
              <div class="glass-card feature-card p-6 text-center glow-purple-hover">
                <div class="feature-icon mx-auto">
                  <svg class="lucide lucide-heart w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </div>
                <h3 class="feature-title">Dignity</h3>
                <p class="feature-description">Every individual deserves safety solutions that respect their humanity.</p>
              </div>
              <div class="glass-card feature-card p-6 text-center glow-purple-hover">
                <div class="feature-icon mx-auto">
                  <svg class="lucide lucide-users w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3 class="feature-title">Community-Led Innovation</h3>
                <p class="feature-description">Solutions built with and for the communities they serve.</p>
              </div>
              <div class="glass-card feature-card p-6 text-center glow-purple-hover">
                <div class="feature-icon mx-auto">
                  <svg class="lucide lucide-users w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3 class="feature-title">Trauma-Informed Design</h3>
                <p class="feature-description">Every feature is designed with sensitivity to lived experiences of violence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- PRODUCT -->
      <section class="section-padding gradient-section">
        <div class="section-wrapper">
          <div class="container-narrow">
            <div class="grid grid-cols-1 grid-cols-lg-2 gap-10 gap-lg-12 items-center mb-10">
              <div>
                <h2 class="text-3xl text-sm-4xl text-lg-5xl font-display font-bold mb-6">
                  The EveShield <span class="gradient-purple-text">Safety Bracelet</span>
                </h2>
                <p class="text-muted-foreground leading-relaxed mb-6">
                  EveShield is not just hardware. It is a community-powered response ecosystem. Our bracelet combines cutting-edge wearable technology with community infrastructure to create a comprehensive safety solution.
                </p>
                <div class="flex flex-col gap-3">
                  <div class="flex items-start gap-3 p-3 rounded-xl hover-bg-secondary-50 transition-colors">
                    <div class="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg class="lucide lucide-bar-chart w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
                    </div>
                    <div>
                      <h4 class="font-medium text-sm">Instant SOS Trigger</h4>
                      <p class="text-xs text-muted-foreground">Silent or voice-activated emergency alert at the press of a button.</p>
                    </div>
                  </div>

                  <br/>
                  <div class="flex items-start gap-3 p-3 rounded-xl hover-bg-secondary-50 transition-colors">
                    <div class="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg class="lucide lucide-map-pin w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div>
                      <h4 class="font-medium text-sm">GPS Location Sharing</h4>
                      <p class="text-xs text-muted-foreground">Real-time location broadcasting to trusted contacts and responders.</p>
                    </div>
                  </div>

                  <br/>
                  <div class="flex items-start gap-3 p-3 rounded-xl hover-bg-secondary-50 transition-colors">
                    <div class="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg class="lucide lucide-phone w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <div>
                      <h4 class="font-medium text-sm">Low-Connectivity Optimization</h4>
                      <p class="text-xs text-muted-foreground">Functions reliably even in areas with limited network infrastructure.</p>
                    </div>
                  </div>
                  <br/>

                  <div class="flex items-start gap-3 p-3 rounded-xl hover-bg-secondary-50 transition-colors">
                    <div class="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg class="lucide lucide-phone w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <div>
                      <h4 class="font-medium text-sm">Linked to Trusted Contacts</h4>
                      <p class="text-xs text-muted-foreground">Pre-configured network of family and friends (Bystanders).</p>
                    </div>
                  </div>

                  <br/>
                  <div class="flex items-start gap-3 p-3 rounded-xl hover-bg-secondary-50 transition-colors">
                    <div class="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg class="lucide lucide-shield w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <div>
                      <h4 class="font-medium text-sm">Community Response Model</h4>
                      <p class="text-xs text-muted-foreground">Connected to a broader ecosystem of verified support from security firm.</p>
                    </div>
                  </div>
                  <br/>
                </div>
              </div>
              <div class="relative flex items-center justify-center">
                <img src="assets/bracelet-duo.png" alt="EveShield Safety Bracelet" class="hero-image-main float-animation" loading="lazy" />
                <img src="assets/bracelet-single.png" alt="EveShield Bracelet Side" class="hero-image-secondary bottom-left float-animation-delayed" style="opacity: 1;" loading="lazy" />
                <img src="assets/bracelet-third.png" alt="EveShield Bracelet Pattern" class="hero-image-secondary top-right float-animation" style="opacity: 0.85; animation-delay: 1s;" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- HOW IT WORKS -->
      <section class="section-padding bg-background">
        <div class="section-wrapper">
          <div class="container-narrow">
            <div class="text-center mb-8 mb-sm-12">
              <h2 class="text-3xl text-sm-4xl text-lg-5xl font-display font-bold mb-4">
                How It <span class="gradient-purple-text">Works</span>
              </h2>
            </div>

            <div class="grid grid-cols-1 grid-cols-sm-2 grid-cols-lg-4 gap-6">
              <div class="glass-card p-6 p-sm-8 text-center relative feature-card glow-purple-hover">
                <div class="text-5xl font-display font-bold gradient-purple-text opacity-30 mb-4">01</div>
                <h3 class="font-display font-semibold mb-2">Wear the Bracelet</h3>
                <p class="text-sm text-muted-foreground leading-relaxed">A discreet, comfortable wearable designed for everyday use.</p>
              </div>
              <div class="glass-card p-6 p-sm-8 text-center relative feature-card glow-purple-hover">
                <div class="text-5xl font-display font-bold gradient-purple-text opacity-30 mb-4">02</div>
                <h3 class="font-display font-semibold mb-2">Trigger Silent or Voice SOS</h3>
                <p class="text-sm text-muted-foreground leading-relaxed">Activate an emergency signal with a simple gesture or voice command.</p>
              </div>
              <div class="glass-card p-6 p-sm-8 text-center relative feature-card glow-purple-hover">
                <div class="text-5xl font-display font-bold gradient-purple-text opacity-30 mb-4">03</div>
                <h3 class="font-display font-semibold mb-2">Alert Trusted Contacts</h3>
                <p class="text-sm text-muted-foreground leading-relaxed">Instantly notify your pre-selected network with your live location.</p>
              </div>
              <div class="glass-card p-6 p-sm-8 text-center relative feature-card glow-purple-hover">
                <div class="text-5xl font-display font-bold gradient-purple-text opacity-30 mb-4">04</div>
                <h3 class="font-display font-semibold mb-2">Connect to Support Ecosystem</h3>
                <p class="text-sm text-muted-foreground leading-relaxed">Access community responders, services, and support infrastructure.</p>
              </div>
            </div>

            <div class="text-center mt-12">
              <a href="#/contact" class="btn btn-modern-waitlist btn-lg" data-path="/contact">
                Join the Waiting List
                <svg class="lucide lucide-arrow-right w-5 h-5 ml-2 inline-flex" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- OUR ECOSYSTEM: FROM CRISIS TO RECOVERY -->
      <section class="section-padding gradient-section">
        <div class="section-wrapper">
          <div class="container-narrow">
            <div class="text-center mb-8 mb-sm-12">
              <h2 class="text-3xl text-sm-4xl text-lg-5xl font-display font-bold mb-4">
                Our Ecosystem: From <span class="gradient-purple-text">Crisis to Recovery</span>
              </h2>
              <p class="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                EveShield is more than a device. It is a connected ecosystem designed to support survivors from the moment of danger through recovery and legal empowerment. Our system ensures no one is left alone not in crisis, and not in healing.
              </p>
            </div>

            <div class="grid grid-cols-1 grid-cols-sm-2 grid-cols-lg-3 gap-6 mb-10">
              <!-- Immediate Response -->
              <div class="glass-card p-6 p-sm-8 text-center glow-purple-hover">
                <div class="feature-icon mx-auto mb-4">
                  <svg class="lucide lucide-alert-triangle w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                </div>
                <h3 class="font-display font-semibold mb-3">Immediate Response</h3>
                <p class="text-sm text-muted-foreground leading-relaxed mb-4">
                  GPS-enabled wearable with silent SOS activation, real-time location sharing, emergency alerting, rapid intervention, and voice recording for immediate protection when danger strikes.
                </p>
              </div>

              <!-- Mental Health & Therapy Support -->
              <div class="glass-card p-6 p-sm-8 text-center glow-purple-hover">
                <div class="feature-icon mx-auto mb-4">
                  <svg class="lucide lucide-activity w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
                <h3 class="font-display font-semibold mb-3">Mental Health & Therapy Support</h3>
                <p class="text-sm text-muted-foreground leading-relaxed mb-4">
                  Access to licensed therapists with anonymous sessions available, trauma-informed care, emotional recovery pathways, and long-term psychological support for healing and dignity.
                </p>
              </div>

              <!-- Legal Aid & Advocacy -->
              <div class="glass-card p-6 p-sm-8 text-center glow-purple-hover">
                <div class="feature-icon mx-auto mb-4">
                  <svg class="lucide lucide-heart-handshake w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/><path d="m18 15-2-2"/><path d="m15 18-2-2"/></svg>
                </div>
                <h3 class="font-display font-semibold mb-3">Legal Aid & Advocacy</h3>
                <p class="text-sm text-muted-foreground leading-relaxed mb-4">
                  Connection to GBV lawyers, survivor advocates, legal education resources, case navigation support, and justice system guidance for empowerment and reclaiming power.
                </p>
              </div>
            </div>
           
            <br/>

            <!-- Closing Statement -->
            <div class="text-center">
              <p class="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Safety is not just about escaping danger. It is about rebuilding confidence, restoring dignity, and reclaiming power. EveShield stands beside survivors at every step from the first alert to long-term recovery and justice.
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
    },

    // Contact Page
    '/contact': () => {
      return `
      <!-- HEADER -->
      <section class="gradient-hero page-header">
        <div class="container-narrow text-center">
          <h1 class="page-title fade-in-up">
            Join the <span class="gradient-purple-text">Movement</span>
          </h1>
          <p class="page-subtitle fade-in-up-delay-1">
            Join the movement, ask questions, or partner with us to build a safer Kenya.
          </p>
        </div>
      </section>

      <!-- EARLY ACCESS FORM -->
      <section class="section-padding bg-background">
        <div class="section-wrapper">
          <div class="container-narrow">
            <div class="max-w-2xl mx-auto">
              <div class="text-center mb-8">
                <h2 class="text-3xl text-sm-4xl font-display font-bold mb-4">
                  Join the <span class="gradient-purple-text">Early Access</span> List
                </h2>
                <div class="live-tally-container">
                  <div class="live-tally-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                      <polyline points="17 6 23 6 23 12"></polyline>
                    </svg>
                  </div>
                  <div class="live-tally-text">
                    <span class="live-tally-number"><span class="early-access-counter-number">508</span> People</span> Already Joined
                  </div>
                </div>
              </div>

              <div id="form-container">
                <form id="contact-form" class="glass-card p-6 p-sm-10">
                  <div class="form-group">
                    <label class="form-label">Full Name</label>
                    <input type="text" name="name" required class="form-input" placeholder="Your name" />
                  </div>
                  <div class="grid grid-cols-1 grid-cols-sm-2 gap-5">
                    <div class="form-group">
                      <label class="form-label">Email</label>
                      <input type="email" name="email" required class="form-input" placeholder="you@example.com" />
                    </div>
                    <div class="form-group">
                      <label class="form-label">Phone</label>
                      <input type="tel" name="phone" class="form-input" placeholder="+254..." />
                    </div>
                  </div>
                  <div class="grid grid-cols-1 grid-cols-sm-2 gap-5">
                    <div class="form-group">
                      <label class="form-label">City</label>
                      <input type="text" name="city" class="form-input" placeholder="Nairobi" />
                    </div>
                    <div class="form-group">
                      <label class="form-label">Interest</label>
                      <select name="interest" class="form-select">
                        <option value="">Select interest</option>
                        <option value="early-access">Early Access User</option>
                        <option value="partner">Partner / Organization</option>
                        <option value="investor">Investor</option>
                        <option value="volunteer">Volunteer / Advocate</option>
                        <option value="media">Media / Press</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" id="submit-btn" class="btn btn-modern-waitlist btn-lg w-full">
                    <span id="submit-text">Join the Waiting List</span>
                    <svg class="lucide lucide-arrow-right w-5 h-5 ml-2 inline-flex" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- WHATSAPP COMMUNITY -->
      <section class="section-padding gradient-section">
        <div class="section-wrapper">
          <div class="container-narrow text-center">
            <h2 class="text-3xl text-sm-4xl font-display font-bold mb-4">
              Be Part of the <span class="gradient-purple-text">Community</span>
            </h2>
            <p class="text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8">
              Connect with advocates, early supporters, and community members helping shape the future of safety in Kenya.
            </p>
            <a href="https://chat.whatsapp.com/IGK8HRMceia4ReTvn4CMVe" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">
              <svg class="w-6 h-6 mx-auto text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 2.17.69 4.18 1.87 5.81L2.4 22l4.31-1.42A9.97 9.97 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.23c-1.74 0-3.41-.45-4.88-1.28l-.35-.2-3.62 1.2 1.22-3.53-.22-.35A8.2 8.2 0 0 1 3.77 12c0-4.54 3.7-8.23 8.23-8.23 4.54 0 8.23 3.7 8.23 8.23 0 4.54-3.7 8.23-8.23 8.23zm4.52-5.94c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.55.12-.17.25-.64.81-.79.97-.15.17-.3.19-.55.06-1.55-.78-2.65-1.7-3.66-3.45-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.55-1.33-.75-1.82-.2-.48-.41-.42-.55-.42h-.47c-.17 0-.45.06-.68.31-.23.25-.89.87-.89 2.12s.91 2.45 1.04 2.62c.12.17 1.79 2.73 4.33 3.82.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z" clip-rule="evenodd" /></svg>
              Join WhatsApp Community
            </a>
          </div>
        </div>
      </section>

      <!-- GET IN TOUCH -->
      <section class="section-padding bg-background">
        <div class="section-wrapper">
          <div class="container-narrow">
            <div class="text-center mb-8">
              <h2 class="text-3xl text-sm-4xl font-display font-bold mb-4">
                Get in <span class="gradient-purple-text">Touch</span>
              </h2>
            </div>
            <div class="grid grid-cols-1 grid-cols-sm-3 gap-6">
              <div class="glass-card p-6 p-sm-8 text-center glow-purple-hover">
                <div class="feature-icon mx-auto mb-4">
                  <svg class="lucide lucide-map-pin w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <h3 class="font-display font-semibold mb-2">Office</h3>
                <p class="text-sm text-muted-foreground">Manga House<br />9 Kiambere Rd, UpperHill<br />Nairobi, Kenya</p>
              </div>
              <div class="glass-card p-6 p-sm-8 text-center glow-purple-hover">
                <div class="feature-icon mx-auto mb-4">
                  <svg class="lucide lucide-phone w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <h3 class="font-display font-semibold mb-2">Phone</h3>
                <p class="text-sm text-muted-foreground">
                  <a href="tel:+254721606409" class="contact-link">+254 721 606 409</a><br />
                  <a href="tel:+254792868385" class="contact-link">+254 792 868 385</a>
                </p>
              </div>
              <div class="glass-card p-6 p-sm-8 text-center glow-purple-hover">
                <div class="feature-icon mx-auto mb-4">
                  <svg class="lucide lucide-mail w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <h3 class="font-display font-semibold mb-2">Email</h3>
                <p class="text-sm text-muted-foreground">
                  <a href="mailto:eveshield2@gmail.com" class="contact-link">eveshield2@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
    },

    // Data Dashboard Page
    '/data': () => {
      return `
      <!-- HEADER -->
      <section class="gradient-hero page-header">
        <div class="container-narrow text-center">
          <h1 class="page-title fade-in-up">
            Gender-Based Violence in Kenya
          </h1>
          <p class="text-lg text-sm-xl gradient-purple-text font-display font-semibold fade-in-up-delay-1">
            The Reality Behind the Mission
          </p>
          <p class="page-subtitle fade-in-up-delay-2">
            These figures are based on national survey data and public reports. Behind every statistic is a human story, and a system that must change.
          </p>
        </div>
      </section>

      <!-- ANIMATED COUNTERS -->
      <section class="section-padding bg-background">
        <div class="section-wrapper">
          <div class="container-narrow">
            <div class="grid grid-cols-1 grid-cols-sm-2 grid-cols-lg-3 gap-6 mb-8">
              <div class="glass-card counter-card glow-purple-hover" data-end="34" data-suffix="%">
                <div class="counter-value gradient-purple-text">0%</div>
                <p class="counter-label">Physical Violence</p>
                <p class="counter-description">of women in Kenya have experienced physical violence since age 15.</p>
                <p class="counter-source">KDHS 2022</p>
              </div>
              <div class="glass-card counter-card glow-purple-hover" data-end="16" data-suffix="%">
                <div class="counter-value gradient-purple-text">0%</div>
                <p class="counter-label">Recent Violence</p>
                <p class="counter-description">of women experienced physical violence in the past 12 months.</p>
                <p class="counter-source">KDHS 2022</p>
              </div>
              <div class="glass-card counter-card glow-purple-hover" data-end="13" data-prefix="~" data-suffix="%">
                <div class="counter-value gradient-purple-text">~0%</div>
                <p class="counter-label">Sexual Violence</p>
                <p class="counter-description">Approximately 1 in 8 women report experiencing sexual violence.</p>
                <p class="counter-source">KDHS 2022</p>
              </div>
            </div>
            <div class="grid grid-cols-1 grid-cols-sm-2 gap-6">
              <div class="glass-card counter-card glow-purple-hover" data-end="90" data-suffix="%">
                <div class="counter-value gradient-purple-text">0%</div>
                <p class="counter-label">GBV Cases by Gender</p>
                <p class="counter-description">Women account for nearly 90% of reported GBV cases.</p>
              </div>
              <div class="glass-card counter-card glow-purple-hover" data-end="41" data-prefix="KES " data-suffix="B">
                <div class="counter-value gradient-purple-text">KES 0B</div>
                <p class="counter-label">Economic Cost</p>
                <p class="counter-description">GBV costs Kenya an estimated KES 41 billion annually.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CHARTS -->
      <section class="section-padding gradient-section">
        <div class="section-wrapper">
          <div class="container-narrow">
            <div class="grid grid-cols-1 grid-cols-lg-2 gap-8 mb-8">
              <!-- Bar Chart -->
              <div class="glass-card p-6 p-sm-8">
                <h3 class="font-display font-semibold text-lg mb-6">Prevalence of Violence by Type</h3>
                <div class="chart-container">
                  <canvas id="barChart"></canvas>
                </div>
              </div>

              <!-- Pie Chart -->
              <div class="glass-card p-6 p-sm-8">
                <h3 class="font-display font-semibold text-lg mb-6">Reported GBV Cases by Gender</h3>
                <div class="chart-container">
                  <canvas id="pieChart"></canvas>
                </div>
              </div>
            </div>

            <!-- Heat Map -->
            <div class="glass-card p-6 p-sm-8">
              <h3 class="font-display font-semibold text-lg mb-6">Regional Variations in GBV</h3>
              <div class="grid grid-cols-1 grid-cols-sm-3 gap-4">
                <div class="p-5 rounded-xl text-center bg-primary-25 border border-primary-40">
                  <p class="text-2xl text-sm-3xl font-display font-bold gradient-purple-text">50%+</p>
                  <p class="text-sm text-foreground font-medium mt-1">Migori</p>
                </div>
                <div class="p-5 rounded-xl text-center bg-primary-15 border border-primary-25">
                  <p class="text-2xl text-sm-3xl font-display font-bold gradient-purple-text">~36%</p>
                  <p class="text-sm text-foreground font-medium mt-1">Kajiado</p>
                </div>
                <div class="p-5 rounded-xl text-center bg-primary-8 border border-primary-15">
                  <p class="text-2xl text-sm-3xl font-display font-bold gradient-purple-text">34%</p>
                  <p class="text-sm text-foreground font-medium mt-1">National Avg</p>
                </div>
              </div>
              <div class="flex items-center gap-3 mt-6 justify-center">
                <span class="text-xs text-muted-foreground">Prevalence:</span>
                <div class="flex items-center gap-2">
                  <div class="w-4 h-4 rounded bg-primary-15"></div>
                  <span class="text-xs text-muted-foreground">Moderate</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-4 h-4 rounded bg-primary-40"></div>
                  <span class="text-xs text-muted-foreground">High</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTEXT -->
      <section class="section-padding bg-background">
        <div class="section-wrapper">
          <div class="container-narrow text-center">
            <h2 class="text-3xl text-sm-4xl font-display font-bold mb-6">
              Why This <span class="gradient-purple-text">Matters</span>
            </h2>
            <p class="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
              Gender-based violence is not only a social issue. It is a public health, economic, and systemic crisis. The data reveals urgency. The solution requires innovation, community, and infrastructure.
            </p>
            <p class="text-foreground max-w-2xl mx-auto leading-relaxed font-medium mb-10">
              EveShield exists to bridge the gap between risk and response.
            </p>

            <div class="glass-card p-8 p-sm-12 glow-purple max-w-3xl mx-auto">
              <h3 class="text-xl text-sm-2xl font-display font-bold mb-4">
                Data Shows the Problem. <span class="gradient-purple-text">Technology Can Help Build the Response.</span>
              </h3>
              <a href="#/contact" class="btn btn-primary btn-lg mt-4" data-path="/contact">
                Join the Early Access Movement
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
    },

    // 404 Page
    '*': () => {
      return `
      <div class="not-found">
        <div class="not-found-content">
          <h1 class="not-found-title">404</h1>
          <p class="not-found-text">Oops! Page not found</p>
          <a href="#/" class="not-found-link" data-path="/">Return to Home</a>
        </div>
      </div>
    `;
    }
  };

  /**
   * Create bar and doughnut charts on the Data page.
   * Destroys any existing Chart instances first so we don't get duplicates when navigating back.
   */

  /**
   * Create bar and doughnut charts on the Data page.
   * Destroys any existing Chart instances first so we don't get duplicates when navigating back.
   */
  function initCharts() {
    var i;
    // Destroy previous charts so we don't stack them when user revisits /data
    for (i = 0; i < chartInstances.length; i++) {
      chartInstances[i].destroy();
    }
    chartInstances.length = 0;

    // Bar chart: violence by type
    var barCtx = document.getElementById('barChart');
    if (barCtx) {
      chartInstances.push(new Chart(barCtx, {
        type: 'bar',
        data: {
          labels: ['Physical', 'Sexual', 'Emotional'],
          datasets: [{
            data: [34, 13, 28],
            backgroundColor: [
              'hsl(270, 70%, 50%)',
              'hsl(270, 80%, 65%)',
              'hsl(260, 10%, 40%)'
            ],
            borderRadius: 8
          }]
        },
        options: {
          indexAxis: 'y',
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'hsl(0, 0%, 100%)',
              borderColor: 'hsl(0, 0%, 90%)',
              titleColor: 'hsl(0, 0%, 9%)',
              bodyColor: 'hsl(0, 0%, 9%)',
              borderWidth: 1,
              borderRadius: 12,
              padding: 12,
              callbacks: {
                label: function (context) {
                  return context.parsed.x + '%';
                }
              }
            }
          },
          scales: {
            x: {
              max: 40,
              ticks: {
                color: 'hsl(0, 0%, 35%)',
                font: { size: 12 }
              },
              grid: { display: false }
            },
            y: {
              ticks: {
                color: 'hsl(0, 0%, 25%)',
                font: { size: 13 }
              },
              grid: { display: false }
            }
          }
        }
      }));
    }

    // Doughnut chart: GBV cases by gender
    var pieCtx = document.getElementById('pieChart');
    if (pieCtx) {
      chartInstances.push(new Chart(pieCtx, {
        type: 'doughnut',
        data: {
          labels: ['Women', 'Men'],
          datasets: [{
            data: [90, 10],
            backgroundColor: [
              'hsl(270, 70%, 50%)',
              'hsl(260, 10%, 30%)'
            ],
            borderWidth: 0
          }]
        },
        options: {
          cutout: '60%',
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: 'hsl(0, 0%, 100%)',
              borderColor: 'hsl(0, 0%, 90%)',
              titleColor: 'hsl(0, 0%, 9%)',
              bodyColor: 'hsl(0, 0%, 9%)',
              borderWidth: 1,
              borderRadius: 12,
              padding: 12,
              callbacks: {
                label: function (context) {
                  return context.label + ': ' + context.parsed + '%';
                }
              }
            }
          }
        }
      }));
    }
  }

  /**
   * Contact form: submit to Google Apps Script and show a thank-you message.
   * Runs when the Contact page is loaded (form is in the DOM).
   */
  function initContactForm() {
    var form = document.getElementById('contact-form');
    var formContainer = document.getElementById('form-container');
    var submitBtn = document.getElementById('submit-btn');
    var submitText = document.getElementById('submit-text');
    var submitArrow = document.getElementById('submit-arrow');

    if (!form) return;

    // Form validation function
    function validateForm(formData) {
      const errors = [];

      // Name validation
      if (!formData.get('name') || formData.get('name').trim().length < 2) {
        errors.push('Name must be at least 2 characters long');
      }

      // Email validation
      const email = formData.get('email');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        errors.push('Please enter a valid email address');
      }

      // Phone validation (optional but if provided, should be valid)
      const phone = formData.get('phone');
      if (phone && phone.trim()) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(phone) || phone.replace(/\D/g, '').length < 10) {
          errors.push('Please enter a valid phone number');
        }
      }

      // City validation
      if (!formData.get('city') || formData.get('city').trim().length < 2) {
        errors.push('City must be at least 2 characters long');
      }

      // Interest validation
      if (!formData.get('interest')) {
        errors.push('Please select an area of interest');
      }

      return errors;
    }

    // Show validation errors
    function showValidationErrors(errors) {
      // Remove existing error messages
      const existingErrors = form.querySelectorAll('.validation-error');
      existingErrors.forEach(error => error.remove());

      // Add new error messages
      errors.forEach(error => {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'validation-error text-red-500 text-sm mt-1';
        errorDiv.textContent = error;

        // Find the relevant field and add error after it
        const fieldName = error.toLowerCase().split(' ')[0];
        let field;
        if (fieldName.includes('email')) field = form.querySelector('[name="email"]');
        else if (fieldName.includes('name')) field = form.querySelector('[name="name"]');
        else if (fieldName.includes('phone')) field = form.querySelector('[name="phone"]');
        else if (fieldName.includes('city')) field = form.querySelector('[name="city"]');
        else if (fieldName.includes('interest')) field = form.querySelector('[name="interest"]');

        if (field) {
          field.parentNode.appendChild(errorDiv);
        } else {
          // Add to form container if no specific field found
          formContainer.appendChild(errorDiv);
        }
      });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get form data
      var formData = new FormData(form);

      // Validate form
      const validationErrors = validateForm(formData);
      if (validationErrors.length > 0) {
        showValidationErrors(validationErrors);
        return;
      }

      // Remove any existing error messages
      const existingErrors = form.querySelectorAll('.validation-error');
      existingErrors.forEach(error => error.remove());

      if (submitBtn) {
        submitBtn.disabled = true;
        if (submitText) submitText.textContent = 'Submitting...';
        if (submitArrow) submitArrow.style.display = 'none';
      }

      var data = {
        name: formData.get('name').trim(),
        email: formData.get('email').trim(),
        phone: formData.get('phone').trim(),
        city: formData.get('city').trim(),
        interest: formData.get('interest')
      };

      var scriptUrl = 'https://script.google.com/macros/s/AKfycbzuEtJGjh7otAb-VNPaz6PwFKAcwCK2Hzg2deIPlsigZlhGZ5bVcGAvoGOOV9PPBWH-YA/exec';

      // Add timeout for form submission
      const submissionTimeout = setTimeout(function () {
        console.error('Form submission timed out');
        if (submitBtn) {
          submitBtn.disabled = false;
          if (submitText) submitText.textContent = 'Join the Waiting List';
        }
        showValidationErrors(['Submission timed out. Please try again.']);
      }, 10000); // 10 second timeout

      fetch(scriptUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        mode: 'no-cors'
      }).then(function () {
        clearTimeout(submissionTimeout);
        showContactSuccess(formContainer);
      }).catch(function (error) {
        clearTimeout(submissionTimeout);
        console.error('Form submission error:', error);
        showContactSuccess(formContainer); // Still show success due to no-cors mode
      });
    });
  }

  /**
   * Live counter system for early access signups
   */
  var earlyAccessCounter = {
    // Get current count from localStorage or default to 505
    getCurrentCount: function () {
      return parseInt(localStorage.getItem('eveshield_early_access_count') || '505');
    },

    // Update counter display
    updateDisplay: function () {
      var count = this.getCurrentCount();
      var counterElements = document.querySelectorAll('.early-access-counter-number');
      counterElements.forEach(function (element) {
        element.textContent = count;
      });
    },

    // Increment counter when someone joins
    incrementCounter: function () {
      var currentCount = this.getCurrentCount();
      var newCount = currentCount + 1;
      localStorage.setItem('eveshield_early_access_count', newCount.toString());
      this.updateDisplay();
    }
  };

  /** Show the "You're on the list!" message after form submit (used on success or no-cors error). */
  function showContactSuccess(formContainer) {
    if (!formContainer) return;

    // Increment the counter when someone successfully joins
    earlyAccessCounter.incrementCounter();

    // Clear existing content safely
    while (formContainer.firstChild) {
      formContainer.removeChild(formContainer.firstChild);
    }

    // Create success message safely (no XSS vulnerability)
    const successDiv = document.createElement('div');
    successDiv.className = 'glass-card p-10 text-center glow-purple fade-in-up';

    const successSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    successSvg.setAttribute('class', 'success-icon');
    successSvg.setAttribute('width', '48');
    successSvg.setAttribute('height', '48');
    successSvg.setAttribute('viewBox', '0 0 24 24');
    successSvg.setAttribute('fill', 'none');
    successSvg.setAttribute('stroke', 'currentColor');
    successSvg.setAttribute('stroke-width', '2');

    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute('d', 'M22 11.08V12a10 10 0 1 1-5.93-9.14');

    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    path2.setAttribute('points', '22 4 12 14.01 9 11.01');

    successSvg.appendChild(path1);
    successSvg.appendChild(path2);

    const successTitle = document.createElement('h3');
    successTitle.className = 'success-title';
    successTitle.textContent = "You're on the list!";

    const successText = document.createElement('p');
    successText.className = 'success-text';
    successText.textContent = 'Thank you for joining the EveShield movement. We\'ll be in touch soon.';

    successDiv.appendChild(successSvg);
    successDiv.appendChild(successTitle);
    successDiv.appendChild(successText);

    formContainer.appendChild(successDiv);
  }

  /**
   * Register each path with the router. When the user navigates to a path,
   * we inject the page HTML and then run components (counters, sections)
   * and page-specific logic (charts, form).
   */
  Object.keys(pages).forEach(function (path) {
    // Capture path in a closure to avoid variable reference issues
    (function (currentPath) {
      window.router.register(currentPath, function () {
        var mainContent = document.getElementById('main-content');
        if (!mainContent) return;

        mainContent.innerHTML = pages[currentPath]();

        // After a short delay so the DOM is updated, run components and page logic
        setTimeout(function () {
          window.initComponents();

          if (currentPath === '/data') {
            setTimeout(function () {
              // Ensure Chart.js is loaded before initializing charts with proper error handling
              if (typeof Chart === 'undefined') {
                // If Chart.js is not loaded, load it and then initialize charts
                const script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js';

                // Set timeout for loading
                const timeoutId = setTimeout(function () {
                  console.error('Chart.js failed to load within timeout period');
                  // Show error message to user
                  const chartsContainer = document.getElementById('charts-container');
                  if (chartsContainer) {
                    chartsContainer.innerHTML = '<div class="glass-card p-6 text-center"><p class="text-muted-foreground">Charts could not be loaded. Please refresh the page.</p></div>';
                  }
                }, 5000); // 5 second timeout

                script.onload = function () {
                  clearTimeout(timeoutId);
                  if (typeof Chart !== 'undefined') {
                    setTimeout(initCharts, 100);
                  } else {
                    console.error('Chart.js loaded but Chart object is undefined');
                  }
                };

                script.onerror = function () {
                  clearTimeout(timeoutId);
                  console.error('Failed to load Chart.js script');
                  const chartsContainer = document.getElementById('charts-container');
                  if (chartsContainer) {
                    chartsContainer.innerHTML = '<div class="glass-card p-6 text-center"><p class="text-muted-foreground">Charts could not be loaded. Please check your connection.</p></div>';
                  }
                };

                document.head.appendChild(script);
              } else {
                setTimeout(initCharts, 100);
              }
            }, 100);
          }
          if (currentPath === '/contact') {
            initContactForm();
          }

          // Force update counter on every page navigation (especially for pages with counter)
          earlyAccessCounter.updateDisplay();
        }, 50);
      });
    })(path);  // IIFE to capture path value
  });

  // Trigger initial navigation immediately after routes are registered
  function initializeApp() {
    var hash = window.location.hash.slice(1) || '';
    var path = hash.charAt(0) === '/' ? hash : (hash ? '/' + hash : '/');

    window.router.navigate(path || '/', false);
    window.initComponents();
    earlyAccessCounter.updateDisplay();
  }

  /**
   * On first load: run components and, if we landed on Contact or Data, run their logic.
   * Use the URL hash (not pathname) so it works when opening index.html as a file.
   */
  document.addEventListener('DOMContentLoaded', function () {
    // Initialize app when DOM is fully ready
    initializeApp();
  });

})();
