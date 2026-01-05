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
      'Projects/05-superview-drive/superview-drive-05.jpg'
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
      'Projects/01-sylvan-drive/1717sylvanave173426.jpg',
      'Projects/01-sylvan-drive/1717sylvanave173427.jpg',
      'Projects/01-sylvan-drive/1717sylvanave173435.jpg',
      'Projects/01-sylvan-drive/1717sylvanave173438.jpg',
      'Projects/01-sylvan-drive/1717sylvanave173457.jpg',
      'Projects/01-sylvan-drive/1717sylvanave173465.jpg',
      'Projects/01-sylvan-drive/1717sylvanave173472.jpg'
    ]
  },
  'rainbow-ranch': {
    title: 'Rainbow Ranch',
    location: 'Texas Hill Country',
    type: 'Remodel',
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
      'Projects/08-bellaire-drive/10a.jpg',
      'Projects/08-bellaire-drive/10b.jpg',
      'Projects/08-bellaire-drive/10c.jpg',
      'Projects/08-bellaire-drive/10d.jpg',
      'Projects/08-bellaire-drive/10e.jpg',
      'Projects/08-bellaire-drive/11.jpg',
      'Projects/08-bellaire-drive/12.jpg',
      'Projects/08-bellaire-drive/13.jpg',
      'Projects/08-bellaire-drive/14.jpg',
      'Projects/08-bellaire-drive/15.jpg',
      'Projects/08-bellaire-drive/16.jpg',
      'Projects/08-bellaire-drive/17.jpg',
      'Projects/08-bellaire-drive/18.jpg',
      'Projects/08-bellaire-drive/19.jpg',
      'Projects/08-bellaire-drive/1a.jpg',
      'Projects/08-bellaire-drive/1b.jpg',
      'Projects/08-bellaire-drive/1c.jpg',
      'Projects/08-bellaire-drive/1d.jpg'
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
      'Projects/03-kinney-avenue/1.png'
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

  // Populate gallery
  const galleryEl = document.getElementById('projectGallery');
  galleryEl.innerHTML = project.images.map((img, index) => `
    <div class="gallery-item" data-image-index="${index}">
      <img src="${img}" alt="${project.title} - Image ${index + 1}">
    </div>
  `).join('');

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
      <span class="detail-value">${project.images.length} photos</span>
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
