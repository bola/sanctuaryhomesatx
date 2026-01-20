/**
 * Sanctuary Custom Homes - Project Detail Page
 * Dynamic project loading and lightbox gallery
 */

// ===== PROJECT DATA =====
const projects = {
  'superview-drive': {
    title: 'Superview Drive',
    location: 'Austin, TX',
    type: 'Custom Home',
    year: '2023',
    description: 'A stunning custom home showcasing modern architecture and meticulous craftsmanship. This project exemplifies our commitment to precision and quality in every detail.',
    architect: 'Jameson Design Group',
    interior: null,
    photography: 'Urban Oak Photography',
    builder: 'Sanctuary Custom Homes',
    images: [
      'Projects/05-superview-drive/superview-drive-01.jpg',
      'Projects/05-superview-drive/superview-drive-02.jpg',
      'Projects/05-superview-drive/superview-drive-03.jpg',
      'Projects/05-superview-drive/superview-drive-04.jpg',
      'Projects/05-superview-drive/superview-drive-05.jpg',
      'Projects/05-superview-drive/10515 Superview Dr .jpg'
    ]
  },
  'meridian-house': {
    title: 'Meridian House',
    location: 'Austin, TX',
    type: 'Custom Home',
    year: '2018',
    description: 'An exquisite custom home featuring thoughtful architecture and sophisticated interior design, captured beautifully by acclaimed photographer Leonid Furmansky.',
    architect: 'Jen Brannon Architecture and Interior Design',
    interior: 'Jen Brannon Architecture and Interior Design',
    photography: 'Leonid Furmansky',
    builder: 'Sanctuary Custom Homes',
    images: [
      'Projects/Meridian-house/Leonid_Furmansky_Jen_Brannon_Print_ 4.jpg',
      'Projects/Meridian-house/Leonid_Furmansky_Jen_Brannon_Print_ 5.jpg',
      'Projects/Meridian-house/Leonid_Furmansky_Jen_Brannon_Print_ 7.jpg',
      'Projects/Meridian-house/Leonid_Furmansky_Jen_Brannon_Print_ 9.jpg',
      'Projects/Meridian-house/Leonid_Furmansky_Jen_Brannon_Print_ 11.jpg',
      'Projects/Meridian-house/Leonid_Furmansky_Jen_Brannon_Print_ 17.jpg',
      'Projects/Meridian-house/Leonid_Furmansky_Jen_Brannon_Print_ 19.jpg',
      'Projects/Meridian-house/Leonid_Furmansky_Jen_Brannon_Print_ 20.jpg'
    ]
  },
  'woodmont-avenue': {
    title: 'Woodmont Avenue',
    location: 'Austin, TX',
    type: 'Under Construction',
    year: '2027',
    description: 'A modern custom home currently under construction, demonstrating our structured methodology and precision in execution.',
    architect: 'Side Angle Side',
    interior: null,
    photography: null,
    builder: 'Sanctuary Custom Homes',
    images: [
      'Projects/06-woodmont-avenue/1.png',
      'Projects/06-woodmont-avenue/2.png',
      'Projects/06-woodmont-avenue/3.png',
      'Projects/06-woodmont-avenue/4.png',
      'Projects/06-woodmont-avenue/5.png',
      'Projects/06-woodmont-avenue/6.png',
      'Projects/06-woodmont-avenue/7.png',
      'Projects/06-woodmont-avenue/8.png'
    ]
  },
  'bouldin-avenue': {
    title: 'Bouldin Avenue',
    location: 'Austin, TX',
    type: 'Developer Spec Home',
    year: '2025',
    description: 'A developer spec home showcasing modern design and quality construction in one of Austin\'s most desirable neighborhoods.',
    architect: 'JBA Architecture',
    interior: 'WRJ Design',
    photography: 'Amy Dang Photography',
    builder: 'Nick Chappell with Gasparini Custom Homes (legacy)',
    images: [
      'Projects/02-bouldin-avenue/1.jpg',
      'Projects/02-bouldin-avenue/2.jpg',
      'Projects/02-bouldin-avenue/3.jpg',
      'Projects/02-bouldin-avenue/4.jpg',
      'Projects/02-bouldin-avenue/5.jpg',
      'Projects/02-bouldin-avenue/6.jpg',
      'Projects/02-bouldin-avenue/7.jpg',
      'Projects/02-bouldin-avenue/8.jpg',
      'Projects/02-bouldin-avenue/9.jpg'
    ]
  },
  'sylvan-drive': {
    title: 'Sylvan Drive',
    location: 'Austin, TX',
    type: 'Custom Home',
    year: '2021',
    description: 'An elegant custom home in one of Austin\'s most prestigious neighborhoods, featuring timeless design and exceptional attention to detail.',
    architect: 'JBA Architecture',
    interior: 'WRJ Design',
    photography: 'Amy Dang Photography',
    builder: 'Nick Chappell with Gasparini Custom Homes (legacy)',
    images: [
      'Projects/01-sylvan-drive/1717sylvanave173554.jpg',
      'Projects/01-sylvan-drive/1717sylvanave175810.jpg',
      'Projects/01-sylvan-drive/1717sylvanave180103.jpg',
      'Projects/01-sylvan-drive/1717sylvanave180957.jpg',
      'Projects/01-sylvan-drive/1717sylvanave181404.jpg',
      'Projects/01-sylvan-drive/1717sylvanave181408.jpg',
      'Projects/01-sylvan-drive/1717sylvanave182036.jpg',
      'Projects/01-sylvan-drive/1717sylvanave183422.jpg',
      'Projects/01-sylvan-drive/1717sylvanave184450.jpg'
    ]
  },
  'rainbow-ranch': {
    title: 'Rainbow Ranch',
    location: 'Texas Hill Country',
    type: 'Custom Home',
    year: '2021',
    description: 'A breathtaking Hill Country estate that harmonizes with the natural landscape while providing luxurious modern living.',
    architect: 'NHA Architecture',
    interior: 'WRJ Design',
    photography: null,
    builder: 'Sanctuary Custom Homes',
    images: [
      'Projects/04-rainbow-ranch/3.jpg',
      'Projects/04-rainbow-ranch/4.jpg',
      'Projects/04-rainbow-ranch/5.jpg'
    ]
  },
  'bellaire-drive': {
    title: 'Bellaire Drive',
    location: 'Austin, TX',
    type: 'Spec Home',
    year: '2021',
    description: 'A spec home showcasing contemporary design and superior craftsmanship throughout.',
    architect: 'JBA Architecture',
    interior: 'slic design',
    photography: null,
    builder: 'Sanctuary Custom Homes',
    images: [
      'Projects/08-bellaire-drive/00_Front_IMG_9062.jpg',
      'Projects/08-bellaire-drive/00_Front_IMG_9067.jpg',
      'Projects/08-bellaire-drive/00_Front_IMG_9137.jpg',
      'Projects/08-bellaire-drive/01_Living_Room_IMG_8487.jpg',
      'Projects/08-bellaire-drive/01_Living_Room_IMG_8664.jpg',
      'Projects/08-bellaire-drive/02_Kitchen_IMG_8760.jpg',
      'Projects/08-bellaire-drive/02_Kitchen_IMG_8787.jpg',
      'Projects/08-bellaire-drive/03_Dining_Room_IMG_8709.jpg',
      'Projects/08-bellaire-drive/15_Backyard_IMG_8967.jpg',
      'Projects/08-bellaire-drive/24.jpg'
    ]
  },
  'clawson-drive': {
    title: 'Clawson Drive',
    location: 'Austin, TX',
    type: 'Custom Home',
    year: '2022',
    description: 'A beautifully crafted custom home featuring clean lines and sophisticated finishes.',
    architect: 'Point B Design Group',
    interior: 'WRJ Design',
    photography: null,
    builder: 'Nick Chappell with Gasparini Custom Homes (legacy)',
    images: [
      'Projects/07-clawson-drive/1.jpg',
      'Projects/07-clawson-drive/2.jpg',
      'Projects/07-clawson-drive/3.jpg',
      'Projects/07-clawson-drive/4.jpg',
      'Projects/07-clawson-drive/5.jpg',
      'Projects/07-clawson-drive/6.jpg',
      'Projects/07-clawson-drive/7.jpg'
    ]
  },
  'kinney-avenue': {
    title: 'Kinney Avenue',
    location: 'Austin, TX',
    type: 'Remodel & Addition',
    year: '2023',
    description: 'A comprehensive remodel and addition for a custom client, showcasing our expertise in transforming existing homes while maintaining architectural integrity.',
    architect: 'JBA Architecture',
    interior: null,
    photography: 'Amy Dang Photography',
    builder: 'Nick Chappell with Gasparini Custom Homes (legacy)',
    images: [
      'Projects/03-kinney-avenue/2104kinney185353.jpg',
      'Projects/03-kinney-avenue/2104kinney185459.jpg',
      'Projects/03-kinney-avenue/2104kinney185603.jpg',
      'Projects/03-kinney-avenue/2104kinney185957.jpg',
      'Projects/03-kinney-avenue/2104kinney191249.jpg',
      'Projects/03-kinney-avenue/2104kinney192123.jpg',
      'Projects/03-kinney-avenue/2104kinney192513.jpg',
      'Projects/03-kinney-avenue/2104kinney193810.jpg',
      'Projects/03-kinney-avenue/2104kinney193934.jpg'
    ],
    beforeAfter: [
      {
        before: 'Projects/03-kinney-avenue/Before - Exterior Front.jpg',
        after: 'Projects/03-kinney-avenue/Front View After.jpg',
        label: 'Front View'
      },
      {
        before: 'Projects/03-kinney-avenue/Before - Exterior Back.jpg',
        after: 'Projects/03-kinney-avenue/2104kinney194459.jpg',
        label: 'Back View'
      }
    ]
  },
  'elm-street': {
    title: 'Elm Street',
    location: 'Austin, TX',
    type: 'Remodel - Under Construction',
    year: '2025',
    description: 'A comprehensive remodel project currently under construction. These before photos showcase the existing structure prior to renovation.',
    architect: null,
    interior: null,
    photography: null,
    builder: 'Sanctuary Custom Homes',
    images: [],
    beforeAfter: [
      {
        before: 'Projects/1000-Elm/Front View Before.jpg',
        after: 'images/comingsoon.jpg',
        label: 'Front View'
      },
      {
        before: 'Projects/1000-Elm/Back View Before.jpg',
        after: 'images/comingsoon.jpg',
        label: 'Back View'
      },
      {
        before: 'Projects/1000-Elm/Garage Apt Before.jpg',
        after: 'images/comingsoon.jpg',
        label: 'Garage Apt'
      }
    ]
  },
};

// ===== GET PROJECT FROM URL =====
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('project');
const project = projects[projectId];

// ===== POPULATE PROJECT DETAILS =====
if (project) {
  // Update page title
  document.title = `${project.title} | Sanctuary Custom Homes`;

  // Populate header
  const headerEl = document.getElementById('projectHeader');
  headerEl.innerHTML = `
    <div class="section-label">Project</div>
    <h1 class="section-title">${project.title}</h1>
    <p class="section-description">${project.location} • ${project.type}</p>
  `;

  // Populate before/after section if available
  if (project.beforeAfter && project.beforeAfter.length > 0) {
    const beforeAfterSection = document.createElement('section');
    beforeAfterSection.className = 'section bg-light';
    beforeAfterSection.innerHTML = `
      <div class="container">
        <h2 class="text-center mb-xl">Before & After</h2>
        <div class="before-after-grid">
          ${project.beforeAfter.map(item => `
            <div class="before-after-item">
              <div class="before-after-label">${item.label}</div>
              <div class="before-after-comparison">
                <div class="before-image">
                  <span class="image-label">Before</span>
                  <img src="${item.before}" alt="Before - ${item.label}">
                </div>
                <div class="after-image">
                  <span class="image-label">After</span>
                  <img src="${item.after}" alt="After - ${item.label}">
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    // Insert before the gallery section
    const gallerySection = document.querySelector('#projectGallery').closest('section');
    gallerySection.parentNode.insertBefore(beforeAfterSection, gallerySection);
  }

  // Populate gallery
  const galleryEl = document.getElementById('projectGallery');

  // Handle projects with beforeImages (under construction with before photos only)
  if (project.beforeImages && project.beforeImages.length > 0) {
    let galleryHTML = '<h3 style="grid-column: 1/-1; text-align: center; font-family: var(--font-heading); margin-bottom: var(--space-md);">Before Photos</h3>';
    galleryHTML += project.beforeImages.map((img, index) => `
      <div class="gallery-item" data-image-index="${index}">
        <img src="${img.src}" alt="${img.label}">
        <div style="position: absolute; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,0.7); color: white; padding: 8px; text-align: center; font-size: 14px;">${img.label}</div>
      </div>
    `).join('');

    if (project.afterComingSoon) {
      galleryHTML += `
        <div style="grid-column: 1/-1; text-align: center; padding: var(--space-xl); background: var(--off-white); border-radius: 4px; margin-top: var(--space-lg);">
          <h3 style="font-family: var(--font-heading); color: var(--copper); margin-bottom: var(--space-sm);">After Photos</h3>
          <p style="color: var(--gray); font-size: 18px;">Coming Soon...</p>
        </div>
      `;
    }
    galleryEl.innerHTML = galleryHTML;
  } else {
    // Regular gallery
    galleryEl.innerHTML = project.images.map((img, index) => `
      <div class="gallery-item" data-image-index="${index}">
        <img src="${img}" alt="${project.title} - Image ${index + 1}">
      </div>
    `).join('');
  }

  // Populate details
  const detailsEl = document.getElementById('projectDetails');
  detailsEl.innerHTML = `
    <div class="detail-row">
      <span class="detail-label">Location</span>
      <span class="detail-value">${project.location}</span>
    </div>
    <div class="detail-row">
      <span class="detail-label">Type</span>
      <span class="detail-value">${project.type}</span>
    </div>
    <div class="detail-row">
      <span class="detail-label">Year</span>
      <span class="detail-value">${project.year}</span>
    </div>
    <div class="detail-row">
      <span class="detail-label">Gallery</span>
      <span class="detail-value">${project.beforeImages ? project.beforeImages.length + ' before photos' : project.images.length + ' photos'}${project.afterComingSoon ? ' (after coming soon)' : ''}</span>
    </div>
  `;

  // Populate credits
  const creditsEl = document.getElementById('projectCredits');
  creditsEl.innerHTML = `
    <div class="text-center">
      ${project.architect ? `<p class="mb-xs"><strong>Architect:</strong> ${project.architect}</p>` : ''}
      ${project.interior ? `<p class="mb-xs"><strong>Interior Design:</strong> ${project.interior}</p>` : ''}
      ${project.photography ? `<p class="mb-xs"><strong>Photography:</strong> ${project.photography}</p>` : ''}
      <p class="mb-xs"><strong>Builder:</strong> ${project.builder}</p>
    </div>
  `;

  // Populate related projects (show 3 random other projects)
  const otherProjects = Object.keys(projects).filter(id => id !== projectId);
  const randomProjects = otherProjects.sort(() => 0.5 - Math.random()).slice(0, 3);

  const relatedEl = document.getElementById('relatedProjects');
  relatedEl.innerHTML = randomProjects.map(id => {
    const p = projects[id];
    const imgSrc = p.images.length > 0 ? p.images[0] : '';
    return `
      <a href="project-detail.html?project=${id}" class="project-card">
        ${imgSrc ? `<img src="${imgSrc}" alt="${p.title}">` : '<div style="aspect-ratio: 4/3; background: var(--light-gray); display: flex; align-items: center; justify-content: center; color: var(--gray);">Photos Coming Soon</div>'}
        <div class="project-card-body">
          <h3 class="project-card-title">${p.title}</h3>
          <p class="project-card-location">${p.location} • ${p.type}</p>
        </div>
      </a>
    `;
  }).join('');

} else {
  // Project not found
  document.getElementById('projectHeader').innerHTML = `
    <h1 class="h1 mb-xs">Project Not Found</h1>
    <p class="lead text-secondary">The project you're looking for doesn't exist.</p>
    <a href="projects.html" class="btn btn-primary mt-md">View All Projects</a>
  `;
}

// ===== LIGHTBOX FUNCTIONALITY =====
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentImageIndex = 0;
const images = project ? project.images : [];

// Open lightbox when clicking gallery images
document.addEventListener('click', (e) => {
  const card = e.target.closest('[data-image-index]');
  if (card) {
    currentImageIndex = parseInt(card.getAttribute('data-image-index'));
    openLightbox();
  }
});

function openLightbox() {
  if (images.length === 0) return;
  lightbox.style.display = 'flex';
  updateLightboxImage();
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.style.display = 'none';
  document.body.style.overflow = '';
}

function updateLightboxImage() {
  lightboxImage.src = images[currentImageIndex];
  lightboxImage.alt = `${project.title} - Image ${currentImageIndex + 1}`;
}

function showPrevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateLightboxImage();
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateLightboxImage();
}

// Event listeners
lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', showPrevImage);
lightboxNext.addEventListener('click', showNextImage);

// Close on background click
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (lightbox.style.display === 'flex') {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrevImage();
    if (e.key === 'ArrowRight') showNextImage();
  }
});

console.log('Project detail page loaded:', projectId);
