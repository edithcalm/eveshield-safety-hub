# EveShield Safety Hub

> Wearable safety technology for Kenya. Instant emergency response, real-time location sharing, and survivor-centered support for GBV survivors.

## 🛡️ About EveShield

EveShield is a non-profit organization building an integrated safety ecosystem for survivors of gender-based violence and sexual assault in Kenya. Our GPS-enabled wearable device provides instant emergency response while connecting survivors to mental health support and legal advocacy for long-term healing and justice.

### 🎯 Mission
To design and deploy wearable emergency response technology that bridges the gap between risk and response in Kenya and beyond.

### 🌟 Vision
A world where every woman and vulnerable individual has access to immediate, dignified safety infrastructure.

## 🚀 Features

### 📱 Core Functionality
- **Instant SOS Activation**: One-touch silent or voice-activated emergency trigger
- **Real-Time Location Sharing**: GPS-enabled location sharing with trusted contacts
- **Low-Connectivity Design**: Engineered for areas with limited network coverage
- **Community-Linked Support**: Connected to verified community response networks
- **24/7 Emergency Response**: Rapid intervention when danger strikes

### 🌐 Website Features
- **Real-Time Counter**: Live waitlist count from Google Spreadsheet
- **Responsive Design**: Optimized for desktop, mobile, and tablet
- **Modern UI/UX**: Clean, intuitive interface with emoji-based icons
- **Form Integration**: Direct submission to Google Apps Script
- **Performance Optimized**: Fast loading and smooth interactions

### 📊 Data Dashboard
- **GBV Statistics**: Comprehensive data visualization
- **Regional Analysis**: Geographic variations in violence prevalence
- **Interactive Charts**: Dynamic data presentation
- **Educational Resources**: Context and information about GBV in Kenya

## 🛠️ Technology Stack

### Frontend
- **HTML5**: Semantic, accessible markup
- **CSS3**: Modern styling with custom properties
- **JavaScript (ES6+)**: Vanilla JS with no dependencies
- **Responsive Design**: Mobile-first approach

### Backend Integration
- **Google Apps Script**: Form processing and data storage
- **Google Sheets**: Waitlist management and analytics
- **RESTful API**: Clean data submission endpoints

### Performance & SEO
- **Optimized Loading**: Lazy loading and resource optimization
- **SEO Best Practices**: Structured data and meta tags
- **Accessibility**: WCAG compliant design
- **Progressive Enhancement**: Works without JavaScript

## 📁 Project Structure

```
eveshield-safety-hub/
├── index.html              # Main HTML file
├── styles.css              # Complete styling
├── router.js               # Client-side routing
├── components.js           # Reusable UI components
├── app.js                  # Main application logic
├── assets/                 # Static assets
│   ├── eveshield-logo.png  # Logo image
│   ├── bracelet-duo.png    # Product images
│   ├── bracelet-single.png
│   └── bracelet-third.png
├── robots.txt              # Search engine rules
├── sitemap.xml             # Site structure
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/eveshield-safety-hub.git
   cd eveshield-safety-hub
   ```

2. **Start local development server**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### Google Apps Script Setup

1. **Create Google Apps Script**
   - Visit [script.google.com](https://script.google.com)
   - Create new script
   - Copy the provided Apps Script code

2. **Configure Spreadsheet**
   - Create Google Sheet with columns: `name`, `email`, `phone`, `city`, `interest`, `timestamp`, `source`
   - Get spreadsheet ID
   - Update Apps Script with your spreadsheet ID

3. **Deploy as Web App**
   - Deploy > New deployment
   - Web app configuration
   - Execute as: Me
   - Who has access: Anyone
   - Copy the web app URL

4. **Update Website**
   - Replace the Apps Script URL in `app.js` (line 969)
   - Test form submission

## 🎨 Customization

### Branding
- **Colors**: Modify CSS custom properties in `styles.css`
- **Fonts**: Update Google Fonts imports in `index.html`
- **Logo**: Replace `assets/eveshield-logo.png`

### Content
- **Hero Section**: Edit hero content in `app.js` (pages['/'])
- **About Page**: Update content in `app.js` (pages['/who-we-are'])
- **Contact Info**: Modify footer in `index.html`

### Styling
- **Theme Colors**: Update `--primary`, `--accent`, `--background` in `styles.css`
- **Typography**: Modify font families and sizes
- **Layout**: Adjust grid and flexbox properties

## 📱 Mobile Responsiveness

The website is fully responsive and optimized for:

- **Mobile Phones** (320px - 768px)
  - Single column layout
  - Touch-friendly buttons
  - Optimized navigation
  - Hamburger menu

- **Tablets** (768px - 1024px)
  - Two-column layouts
  - Touch-optimized interactions
  - Adaptive navigation

- **Desktop** (1024px+)
  - Multi-column layouts
  - Hover states
  - Full navigation
  - Enhanced interactions

## 🔧 Configuration

### Google Apps Script Integration

Update these values in `app.js`:

```javascript
// Line 969: Update with your Apps Script URL
var scriptUrl = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

// Line 1010: Update with your Apps Script URL for counter
var getCountUrl = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?action=getCount';
```

### Form Fields

The contact form collects:
- **Name** (required)
- **Email** (required)
- **Phone** (optional)
- **City** (optional)
- **Interest** (required): Early Access User, Partner, Investor, Volunteer, Media

### Real-Time Counter

The waitlist counter:
- Updates every 5 minutes
- Caches for 1 hour
- Syncs across all devices
- Increments on new signups

## 🚀 Deployment

### Static Hosting

Deploy to any static hosting service:

#### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir .
```

#### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### GitHub Pages
```bash
# Enable GitHub Pages in repository settings
# Deploy from main branch
```

### Domain Configuration

1. **DNS Setup**
   - Add A record to hosting provider
   - Point to hosting IP address

2. **SSL Certificate**
   - Enable HTTPS (automatic on most platforms)
   - Update any hardcoded URLs

3. **Performance Optimization**
   - Enable GZIP compression
   - Set up CDN
   - Configure caching headers

## 📊 Analytics & Monitoring

### Google Analytics
Add to `index.html` head section:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Performance Monitoring
- Page load times
- Form submission rates
- User engagement metrics
- Mobile vs desktop usage

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Development Workflow
1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Code Standards
- Use semantic HTML5
- Follow CSS naming conventions
- Write clean, documented JavaScript
- Ensure mobile responsiveness
- Test accessibility

### Issue Reporting
- Use GitHub Issues for bug reports
- Provide detailed descriptions
- Include screenshots if applicable
- Specify browser and device

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **GBV Survivors**: For inspiring this mission
- **Kenyan Communities**: For their resilience and strength
- **Tech Community**: For supporting non-profit initiatives
- **Contributors**: Everyone who helps build this solution

## 📞 Contact

### EveShield Kenya
- **Email**: eveshield2@gmail.com
- **Phone**: +254 721 606 409, +254 792 868 385
- **Location**: Manga House, 9 Kiambere Rd, UpperHill, Nairobi, Kenya

### Social Media
- **Instagram**: [@eveshield](https://www.instagram.com/eveshield/)
- **TikTok**: [@eveshieldorg](https://www.tiktok.com/@eveshieldorg)
- **WhatsApp**: [Community Group](https://chat.whatsapp.com/IGK8HRMceia4ReTvn4CMVe)
- **X (Twitter)**: [@eveshieldorg](https://x.com/eveshieldorg)
- **Facebook**: [EveShield Page](https://www.facebook.com/profile.php?id=61586745593219)
- **LinkedIn**: [EveShield Company](https://www.linkedin.com/company/eveshield/)

## 🌍 Impact

### Statistics We're Addressing
- **34%** of women in Kenya have experienced physical violence since age 15
- **16%** experienced physical violence in the past 12 months
- **41 billion KES** annual economic cost of GBV in Kenya

### Our Solution
- **Immediate Response**: Instant emergency alerts
- **Community Support**: Connected response networks
- **Long-Term Healing**: Access to mental health and legal services
- **Dignity & Privacy**: Survivor-centered design

---

**Break the silence. Disrupt the violence.**

*EveShield - Technology for Immediate Safety. A System for Long-Term Healing.*
