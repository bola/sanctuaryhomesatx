/**
 * Sanctuary Custom Homes - Component Loader
 * Loads header and footer components and manages navigation state
 */

// Load header and footer components
async function loadComponents() {
    try {
        // Determine the correct base path
        const basePath = window.location.pathname.includes('/') ? '' : './';

        // Load header
        console.log('Loading header from:', basePath + 'components/header.html');
        const headerResponse = await fetch(basePath + 'components/header.html');
        if (!headerResponse.ok) {
            throw new Error(`Header fetch failed: ${headerResponse.status}`);
        }
        const headerHTML = await headerResponse.text();
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = headerHTML;
            console.log('Header loaded successfully');
        }

        // Load footer
        console.log('Loading footer from:', basePath + 'components/footer.html');
        const footerResponse = await fetch(basePath + 'components/footer.html');
        if (!footerResponse.ok) {
            throw new Error(`Footer fetch failed: ${footerResponse.status}`);
        }
        const footerHTML = await footerResponse.text();
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = footerHTML;
            console.log('Footer loaded successfully');
        }

        // Initialize after components are loaded
        initializeNavigation();
        initializeMobileMenu();
        initializeDropdown();
    } catch (error) {
        console.error('Error loading components:', error);
        alert('Error loading page components. Please make sure you are running this from a web server, not directly from the file system.');
    }
}

// Detect current page and set active state
function initializeNavigation() {
    // Get current page filename
    const path = window.location.pathname;
    const page = path.split('/').pop().replace('.html', '') || 'index';

    // Set active state on desktop nav
    document.querySelectorAll('.nav a[data-page]').forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === page) {
            link.classList.add('active');
        }
    });

    // Set active state on mobile nav
    document.querySelectorAll('.mobile-nav a[data-page]').forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === page) {
            link.classList.add('active');
        }
    });

    // Special handling for dropdown menu items
    document.querySelectorAll('.nav-dropdown-menu a[data-page]').forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === page) {
            link.classList.add('active');
        }
    });
}

// Mobile menu toggle
function initializeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileNav = document.getElementById('mobileNav');

    if (mobileMenuToggle && mobileNav) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('open');
            });
        });
    }
}

// Desktop dropdown toggle
function initializeDropdown() {
    const dropdownToggle = document.querySelector('.nav-dropdown-toggle');
    const dropdown = document.querySelector('.nav-dropdown');

    if (dropdownToggle && dropdown) {
        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.classList.toggle('open');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('open');
            }
        });
    }
}

// Load components when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadComponents);
} else {
    loadComponents();
}
