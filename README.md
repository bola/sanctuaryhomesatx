# Sanctuary Custom Homes ATX - Phase 1 Website

## Quick Start

This is a static HTML website project for Sanctuary Custom Homes, a luxury custom home builder in Austin, Texas and the Hill Country.

**Investment:** $1,000
**Timeline:** Phase 1
**Tech Stack:** HTML, CSS, JavaScript (vanilla)

---

## Project Status

### ✅ Completed
- [x] Project specification document created
- [x] Folder structure defined
- [x] Design guidelines documented
- [x] Content requirements outlined

### 🚧 In Progress
- [ ] Download project images from OneDrive
- [ ] Organize images into project folders

### 📋 To Do
- [ ] Build HTML structure
- [ ] Implement CSS styling
- [ ] Add JavaScript functionality
- [ ] Optimize images
- [ ] Setup forms and Calendly integration
- [ ] Deploy and test

---

## How to Download Project Images

Since the OneDrive link requires authentication, please follow these steps:

1. **Access OneDrive:**
   - Visit the shared link in your browser (while logged in)
   - Navigate to the project folders

2. **Download Images:**
   - Download all images from each project folder
   - Keep the original filenames if possible

3. **Organize Locally:**
   - Place images in the `Projects` folder according to this structure:

```
Projects/
├── sylvan-drive/
│   ├── hero.jpg
│   ├── exterior-01.jpg
│   ├── interior-01.jpg
│   └── ...
├── bouldin-avenue/
│   └── ...
├── kinney-avenue/
│   └── ...
├── rainbow-ranch/
│   └── ...
├── superview-drive/
│   └── ...
├── woodmont-avenue/
│   └── ...
├── clawson-drive/
│   └── ...
├── bellaire-drive/
│   └── ...
└── lorrain-street/
    └── (photos coming soon)
```

---

## Project Structure

### 9 Projects to Feature

1. **Sylvan Drive** - 1717 Sylvan
2. **Bouldin Avenue** - 1716 Bouldin
3. **Kinney Avenue** - 2104 Kinney
4. **Rainbow Ranch** - 127 Rainbow Ranch
5. **Superview Drive** - 10515 Superview
6. **Woodmont Avenue** - 2511 Woodmont
7. **Clawson Drive** - 4703 Clawson Drive
8. **Bellaire Drive** - 1502 Bellaire
9. **Lorrain Street** - 1211 Lorrain Street (photos pending)

### 7 Main Pages

1. **Home** (`index.html`)
   - Hero with rotating project images
   - Featured projects grid
   - What We Build section
   - Sanctuary Difference
   - Testimonials

2. **About Us** (`about.html`)
   - Company story
   - Team bios (Nick & Robert)
   - Partner architects/designers
   - Values

3. **Featured Projects** (`projects.html`)
   - Filterable portfolio
   - Project cards with hover effects
   - Categories: Custom Homes, Remodels, Neighborhoods

4. **Our Building Methodology** (`methodology.html`)
   - 6-8 step process
   - Timeline visualization
   - Client journey

5. **The Sanctuary Difference** (`difference.html`)
   - Unique value propositions
   - Post-sale service details
   - Warranty information
   - Digital handover features

6. **Testimonials** (`testimonials.html`)
   - Client quotes
   - Project references
   - Referral statistics

7. **Contact Us** (`contact.html`)
   - Contact form
   - Calendly integration
   - Office information
   - Map (optional)

### 4 Utility Pages

- **Privacy Policy** (`privacy.html`)
- **Terms of Service** (`terms.html`)
- **404 Error** (`404.html`)
- **Thank You** (`thank-you.html`)

---

## Design Guidelines

### Colors

```css
--cedar-charcoal: #2B2B2B;    /* Primary text */
--warm-white: #F8F6F2;         /* Background */
--sanctuary-sand: #E9E4DC;     /* Cards/sections */
--hill-country-sage: #6F7E6A;  /* Accents/links */
--copper-accent: #B87333;      /* CTAs */
```

### Typography

- **Headlines:** Playfair Display or Cormorant Garamond (serif)
- **Body:** Inter (sans-serif)

### Responsive Breakpoints

- Mobile: 360px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1279px
- Large Desktop: 1280px+

---

## Features to Implement

### JavaScript Features

1. **Image Gallery**
   - Lightbox for project images
   - Next/previous navigation
   - Keyboard controls

2. **Hero Carousel**
   - Auto-rotate every 10 seconds
   - Smooth transitions
   - Pause on hover

3. **Portfolio Filters**
   - Filter by: Custom Homes, Remodels, Neighborhoods
   - Smooth animations
   - URL state management

4. **Form Validation**
   - Real-time validation
   - Error messaging
   - Success states

5. **Mobile Menu**
   - Hamburger toggle
   - Smooth slide animation
   - Overlay

---

## Integration Requirements

### Forms
- Contact form with validation
- Email integration
- Auto-responder setup

### Calendly
- Embedded booking widget
- "Book a 15-min Intro Call" CTA

### Analytics
- Google Analytics 4
- Event tracking for:
  - Form submissions
  - CTA clicks
  - Project views
  - Phone clicks

### CRM (Future)
- HubSpot or Pipedrive webhook
- Lead capture and routing
- Automated follow-ups

---

## Performance Targets

- **LCP:** ≤ 2.5 seconds
- **CLS:** ≤ 0.1
- **TTI:** ≤ 3.5 seconds on 4G
- **Accessibility:** WCAG 2.2 AA

---

## Image Optimization

### Requirements
- **Hero images:** ≥ 2400px width
- **Gallery images:** ≥ 1800px width
- **Format:** WebP with JPEG fallback
- **Compression:** Maintain quality while reducing file size
- **Lazy loading:** Implement for all gallery images
- **Alt text:** Required for every image

### Naming Convention
```
project-name-type-number.jpg

Examples:
sylvan-drive-exterior-01.jpg
bouldin-avenue-kitchen-02.jpg
kinney-avenue-pool-01.jpg
```

---

## SEO Checklist

- [ ] Unique title tags for each page
- [ ] Meta descriptions (150-160 characters)
- [ ] Open Graph tags for social sharing
- [ ] Schema.org markup (Organization, LocalBusiness)
- [ ] XML sitemap
- [ ] robots.txt
- [ ] Canonical URLs
- [ ] Image alt text
- [ ] Heading hierarchy (H1 → H6)
- [ ] Internal linking structure

---

## Testing Checklist

### Browsers
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Devices
- [ ] iPhone (various sizes)
- [ ] iPad
- [ ] Android phone
- [ ] Android tablet
- [ ] Desktop (1920px)
- [ ] Laptop (1440px)

### Functionality
- [ ] All links work
- [ ] Forms submit correctly
- [ ] Image galleries function
- [ ] Mobile menu works
- [ ] Calendly integration works
- [ ] Hero carousel auto-rotates
- [ ] Filters work on portfolio
- [ ] Smooth scrolling
- [ ] 404 page displays correctly

---

## Launch Checklist

- [ ] Domain configured (sanctuaryhomesatx.com)
- [ ] SSL certificate installed
- [ ] DNS records set
- [ ] All images optimized
- [ ] All content proofread
- [ ] Forms tested
- [ ] Analytics tracking verified
- [ ] Cross-browser testing complete
- [ ] Mobile responsiveness verified
- [ ] Performance targets met
- [ ] Accessibility compliance verified
- [ ] SEO tags implemented
- [ ] Sitemap submitted to Google
- [ ] Social media meta tags tested

---

## Documentation

- **Project Spec:** See `PROJECT_SPEC.md` for complete specifications
- **Credits:** See project spec for architect/designer/photographer credits per project

---

## Contact

**Sanctuary Custom Homes**
Austin, Texas & Texas Hill Country

For technical questions about this project, refer to the project specification document.
