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
              <div class="hero-buttons fade-in-up-delay-2">
                <a href="#/contact" class="btn-primary" data-path="/contact">
                  Join Early Access
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <a href="#/who-we-are" class="btn-secondary" data-path="/who-we-are">
                  Learn More
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
            <div class="text-center mb-12 mb-sm-16">
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
              <a href="#/data" class="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary-40 text-primary font-medium text-sm link-card" data-path="/data">
                View Full Data Dashboard
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- SOLUTION PREVIEW -->
      <section class="section-padding bg-background">
        <div class="section-wrapper">
          <div class="container-narrow">
            <div class="text-center mb-12 mb-sm-16">
              <h2 class="text-3xl text-sm-4xl text-lg-5xl font-display font-bold mb-4">
                A Wearable Safety <span class="gradient-purple-text">Ecosystem</span>
              </h2>
              <p class="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                More than a device, a connected infrastructure of safety, community, and emergency response designed for Kenya's realities.
              </p>
            </div>

            <div class="grid grid-cols-1 grid-cols-sm-2 grid-cols-lg-4 gap-6">
              <div class="glass-card feature-card p-6 p-sm-8 glow-purple-hover">
                <div class="feature-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3 class="feature-title">Instant SOS Activation</h3>
                <p class="feature-description">One-touch silent or voice-activated emergency trigger for immediate response.</p>
              </div>
              <div class="glass-card feature-card p-6 p-sm-8 glow-purple-hover">
                <div class="feature-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <h3 class="feature-title">Real-Time Location Sharing</h3>
                <p class="feature-description">GPS-enabled location sharing with trusted contacts during emergencies.</p>
              </div>
              <div class="glass-card feature-card p-6 p-sm-8 glow-purple-hover">
                <div class="feature-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary">
                    <path d="M5 12.55a11 11 0 0 1 5.17-2.39"/>
                    <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
                    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
                    <line x1="12" y1="20" x2="12.01" y2="20"/>
                  </svg>
                </div>
                <h3 class="feature-title">Low-Connectivity Design</h3>
                <p class="feature-description">Engineered to function in areas with limited or unreliable network coverage.</p>
              </div>
              <div class="glass-card feature-card p-6 p-sm-8 glow-purple-hover">
                <div class="feature-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3 class="feature-title">Community-Linked Support</h3>
                <p class="feature-description">Connected to a verified community response network for rapid assistance.</p>
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
            <a href="#/contact" class="btn-primary" data-path="/contact">
              Join the Movement
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>
    `;
  },

  // Who We Are Page
  '/who-we-are': () => {
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
            <div class="grid grid-cols-1 grid-cols-md-2 gap-6 mb-16">
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
            <div class="text-center mb-12">
              <h2 class="text-3xl text-sm-4xl font-display font-bold mb-4">Core <span class="gradient-purple-text">Values</span></h2>
            </div>
            <div class="grid grid-cols-1 grid-cols-sm-2 grid-cols-lg-4 gap-6">
              <div class="glass-card feature-card p-6 text-center glow-purple-hover">
                <div class="feature-icon mx-auto">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <h3 class="feature-title">Accessibility</h3>
                <p class="feature-description">Technology that works for everyone, regardless of economic status or location.</p>
              </div>
              <div class="glass-card feature-card p-6 text-center glow-purple-hover">
                <div class="feature-icon mx-auto">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3 class="feature-title">Dignity</h3>
                <p class="feature-description">Every individual deserves safety solutions that respect their humanity.</p>
              </div>
              <div class="glass-card feature-card p-6 text-center glow-purple-hover">
                <div class="feature-icon mx-auto">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3 class="feature-title">Community-Led Innovation</h3>
                <p class="feature-description">Solutions built with and for the communities they serve.</p>
              </div>
              <div class="glass-card feature-card p-6 text-center glow-purple-hover">
                <div class="feature-icon mx-auto">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
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
            <div class="grid grid-cols-1 grid-cols-lg-2 gap-12 gap-lg-16 items-center mb-16">
              <div>
                <h2 class="text-3xl text-sm-4xl text-lg-5xl font-display font-bold mb-6">
                  The EveShield <span class="gradient-purple-text">Safety Bracelet</span>
                </h2>
                <p class="text-muted-foreground leading-relaxed mb-6">
                  EveShield is not just hardware. It is a community-powered response ecosystem. Our bracelet combines cutting-edge wearable technology with community infrastructure to create a comprehensive safety solution.
                </p>
                <div class="flex flex-col gap-3">
                  <div class="flex items-start gap-3 p-3 rounded-xl hover-bg-secondary-50 transition-colors">
                    <div class="w-8 h-8 rounded-lg bg-primary-15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-primary">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 6v6l4 2"/>
                        <path d="M8.5 8.5L7 10l3 3 7-7"/>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-medium text-sm">Instant SOS Trigger</h4>
                      <p class="text-xs text-muted-foreground">Silent or voice-activated emergency alert at the press of a button.</p>
                    </div>
                  </div>

                  <br/>
                  <div class="flex items-start gap-3 p-3 rounded-xl hover-bg-secondary-50 transition-colors">
                    <div class="w-8 h-8 rounded-lg bg-primary-15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-primary">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                        <circle cx="12" cy="9" r="2.5"/>
                        <path d="M12 11.5v1.5M12 14h.01"/>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-medium text-sm">GPS Location Sharing</h4>
                      <p class="text-xs text-muted-foreground">Real-time location broadcasting to trusted contacts and responders.</p>
                    </div>
                  </div>

                  <br/>
                  <div class="flex items-start gap-3 p-3 rounded-xl hover-bg-secondary-50 transition-colors">
                    <div class="w-8 h-8 rounded-lg bg-primary-15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-primary">
                        <path d="M5 12.55a11 11 0 0 1 5.17-2.39"/>
                        <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
                        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
                        <line x1="12" y1="20" x2="12.01" y2="20"/>
                        <circle cx="12" cy="12" r="2" fill="currentColor"/>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-medium text-sm">Low-Connectivity Optimization</h4>
                      <p class="text-xs text-muted-foreground">Functions reliably even in areas with limited network infrastructure.</p>
                    </div>
                  </div>
                  <br/>

                  <div class="flex items-start gap-3 p-3 rounded-xl hover-bg-secondary-50 transition-colors">
                    <div class="w-8 h-8 rounded-lg bg-primary-15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-primary">
                        <rect x="2" y="7" width="20" height="12" rx="2"/>
                        <path d="M16 3v4M8 3v4M2 11h20"/>
                        <circle cx="8" cy="15" r="1" fill="currentColor"/>
                        <circle cx="12" cy="15" r="1" fill="currentColor"/>
                        <circle cx="16" cy="15" r="1" fill="currentColor"/>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-medium text-sm">Linked to Trusted Contacts</h4>
                      <p class="text-xs text-muted-foreground">Pre-configured network of family, friends, and community responders.</p>
                    </div>
                  </div>

                  <br/>
                  <div class="flex items-start gap-3 p-3 rounded-xl hover-bg-secondary-50 transition-colors">
                    <div class="w-8 h-8 rounded-lg bg-primary-15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-primary">
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/>
                        <circle cx="12" cy="12" r="8" stroke-dasharray="2 2"/>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-medium text-sm">Community Response Model</h4>
                      <p class="text-xs text-muted-foreground">Connected to a broader ecosystem of verified support and rapid response.</p>
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
            <div class="text-center mb-12 mb-sm-16">
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
              <a href="#/contact" class="btn-primary" data-path="/contact">
                Join Early Access
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- OUR ECOSYSTEM: FROM CRISIS TO RECOVERY -->
      <section class="section-padding gradient-section">
        <div class="section-wrapper">
          <div class="container-narrow">
            <div class="text-center mb-12 mb-sm-16">
              <h2 class="text-3xl text-sm-4xl text-lg-5xl font-display font-bold mb-4">
                Our Ecosystem: From <span class="gradient-purple-text">Crisis to Recovery</span>
              </h2>
              <p class="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                EveShield is more than a device. It is a connected ecosystem designed to support survivors from the moment of danger through recovery and legal empowerment. Our system ensures no one is left alone not in crisis, and not in healing.
              </p>
            </div>

            <div class="grid grid-cols-1 grid-cols-sm-2 grid-cols-lg-3 gap-6 mb-16">
              <!-- Immediate Response -->
              <div class="glass-card p-6 p-sm-8 text-center glow-purple-hover">
                <div class="feature-icon mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3 class="font-display font-semibold mb-3"> Immediate Response</h3>
                <p class="text-sm text-muted-foreground leading-relaxed mb-4">
                  GPS-enabled wearable with silent SOS activation, real-time location sharing, emergency alerting, rapid intervention, and voice recording for immediate protection when danger strikes.
                </p>
              </div>

              <!-- Mental Health & Therapy Support -->
              <div class="glass-card p-6 p-sm-8 text-center glow-purple-hover">
                <div class="feature-icon mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <h3 class="font-display font-semibold mb-3"> Mental Health & Therapy Support</h3>
                <p class="text-sm text-muted-foreground leading-relaxed mb-4">
                  Access to licensed therapists with anonymous sessions available, trauma-informed care, emotional recovery pathways, and long-term psychological support for healing and dignity.
                </p>
              </div>

              <!-- Legal Aid & Advocacy -->
              <div class="glass-card p-6 p-sm-8 text-center glow-purple-hover">
                <div class="feature-icon mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <h3 class="font-display font-semibold mb-3"> Legal Aid & Advocacy</h3>
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
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-10 border border-primary-20 mb-4">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  <span class="text-sm text-primary font-medium early-access-counter">500+ People Already Joined</span>
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
                  <button type="submit" id="submit-btn" class="btn-primary w-full">
                    <span id="submit-text">Join Early Access</span>
                    <svg id="submit-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
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
            <a href="https://chat.whatsapp.com/IGK8HRMceia4ReTvn4CMVe" target="_blank" rel="noopener noreferrer" class="btn-primary btn-whatsapp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 0 0 .612.616l4.529-1.456A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 0 1-5.39-1.582l-.386-.236-2.687.864.882-2.634-.258-.404A9.935 9.935 0 0 1 2 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
              </svg>
              Join WhatsApp Community
            </a>
          </div>
        </div>
      </section>

      <!-- GET IN TOUCH -->
      <section class="section-padding bg-background">
        <div class="section-wrapper">
          <div class="container-narrow">
            <div class="text-center mb-12">
              <h2 class="text-3xl text-sm-4xl font-display font-bold mb-4">
                Get in <span class="gradient-purple-text">Touch</span>
              </h2>
            </div>
            <div class="grid grid-cols-1 grid-cols-sm-3 gap-6">
              <div class="glass-card p-6 p-sm-8 text-center glow-purple-hover">
                <div class="feature-icon mx-auto">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                    <path d="M12 7v3l2 1"/>
                  </svg>
                </div>
                <h3 class="font-display font-semibold mb-2">Office</h3>
                <p class="text-sm text-muted-foreground">Manga House<br />9 Kiambere Rd, UpperHill<br />Nairobi, Kenya</p>
              </div>
              <div class="glass-card p-6 p-sm-8 text-center glow-purple-hover">
                <div class="feature-icon mx-auto">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    <path d="M14 2l4 4-4 4M6 10h12"/>
                  </svg>
                </div>
                <h3 class="font-display font-semibold mb-2">Phone</h3>
                <p class="text-sm text-muted-foreground">
                  <a href="tel:+254721606409" class="contact-link">+254 721 606 409</a><br />
                  <a href="tel:+254792868385" class="contact-link">+254 792 868 385</a>
                </p>
              </div>
              <div class="glass-card p-6 p-sm-8 text-center glow-purple-hover">
                <div class="feature-icon mx-auto">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                    <path d="M7 9l10 0M7 12l6 0"/>
                  </svg>
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
              <a href="#/contact" class="btn-primary mt-4" data-path="/contact">
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
              label: function(context) {
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
              label: function(context) {
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

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (submitBtn) {
      submitBtn.disabled = true;
      if (submitText) submitText.textContent = 'Submitting...';
      if (submitArrow) submitArrow.style.display = 'none';
    }

    var formData = new FormData(form);
    var data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      city: formData.get('city'),
      interest: formData.get('interest')
    };

    var scriptUrl = 'https://script.google.com/macros/s/AKfycbzuEtJGjh7otAb-VNPaz6PwFKAcwCK2Hzg2deIPlsigZlhGZ5bVcGAvoGOOV9PPBWH-YA/exec';

    fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      mode: 'no-cors'
    }).then(function () {
      showContactSuccess(formContainer);
    }).catch(function () {
      showContactSuccess(formContainer);
    });
  });
}

/**
 * Live counter system for early access signups
 */
var earlyAccessCounter = {
  // Get current count from localStorage or default to 502
  getCurrentCount: function() {
    return parseInt(localStorage.getItem('eveshield_early_access_count') || '502');
  },
  
  // Update counter display
  updateDisplay: function() {
    var count = this.getCurrentCount();
    var counterElements = document.querySelectorAll('.early-access-counter');
    counterElements.forEach(function(element) {
      element.textContent = count + '+ People Already Joined';
    });
  },
  
  // Increment counter when someone joins
  incrementCounter: function() {
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
  
  formContainer.innerHTML =
    '<div class="glass-card p-10 text-center glow-purple fade-in-up">' +
    '  <svg class="success-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
    '    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>' +
    '    <polyline points="22 4 12 14.01 9 11.01"/>' +
    '  </svg>' +
    '  <h3 class="success-title">You\'re on the list!</h3>' +
    '  <p class="success-text">Thank you for joining the EveShield movement. We\'ll be in touch soon.</p>' +
    '</div>';
}

/**
 * Register each path with the router. When the user navigates to a path,
 * we inject the page HTML and then run components (counters, sections)
 * and page-specific logic (charts, form).
 */
Object.keys(pages).forEach(function (path) {
  window.router.register(path, function () {
    var mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    mainContent.innerHTML = pages[path]();

    // After a short delay so the DOM is updated, run components and page logic
    setTimeout(function () {
      window.initComponents();

      if (path === '/data') {
        setTimeout(function() {
          // Ensure Chart.js is loaded before initializing charts
          if (typeof Chart === 'undefined') {
            // If Chart.js is not loaded, load it and then initialize charts
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js';
            script.onload = function() {
              setTimeout(initCharts, 100);
            };
            document.head.appendChild(script);
          } else {
            setTimeout(initCharts, 100);
          }
        }, 100);
      }
      if (path === '/contact') {
        initContactForm();
      }
    }, 50);
  });
});

/**
 * On first load: run components and, if we landed on Contact or Data, run their logic.
 * Use the URL hash (not pathname) so it works when opening index.html as a file.
 */
document.addEventListener('DOMContentLoaded', function () {
  window.initComponents();

  var hash = window.location.hash.slice(1) || '';
  var path = hash.charAt(0) === '/' ? hash : (hash ? '/' + hash : '/');

  // Ensure the home page loads when visiting index.html directly
  if (!hash) {
    window.router.navigate('/', false);
  }

  // Initialize the early access counter display
  earlyAccessCounter.updateDisplay();

  if (path === '/contact') {
    setTimeout(initContactForm, 100);
  }
  if (path === '/data') {
    setTimeout(initCharts, 200);
  }
});

})();
