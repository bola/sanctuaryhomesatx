/**
 * Sanctuary Custom Homes - Projects Page Functionality
 * Portfolio filtering and interactions
 */

// ===== PROJECT FILTERING =====
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterButtons.length > 0 && projectCards.length > 0) {
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // Update active state on buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter projects
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          card.style.display = '';
          // Add fade in animation
          card.style.animation = 'fadeIn 0.5s ease-out';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ===== URL PARAMETER FILTER =====
// Check if there's a filter parameter in the URL (e.g., ?filter=custom)
const urlParams = new URLSearchParams(window.location.search);
const urlFilter = urlParams.get('filter');

if (urlFilter && filterButtons.length > 0) {
  // Find and click the corresponding filter button
  const targetButton = document.querySelector(`.filter-btn[data-filter="${urlFilter}"]`);
  if (targetButton) {
    targetButton.click();
  }
}

console.log('Projects page loaded - Filter functionality active');
