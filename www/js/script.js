// JavaScript for language switching and any other functionality
document.addEventListener('DOMContentLoaded', function() {
    // Language switcher functionality is handled by direct links in the HTML
    
    // Add expand/collapse functionality for introduction text
    const expandButtons = document.querySelectorAll('.expand-button');
    
    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const introContent = this.parentElement.querySelector('.introduction-content');
            const isExpanded = introContent.classList.contains('expanded');
            
            // Toggle expanded class
            if (isExpanded) {
                introContent.classList.remove('expanded');
                this.textContent = this.getAttribute('data-expand-text');
                this.setAttribute('aria-expanded', 'false');
            } else {
                introContent.classList.add('expanded');
                this.textContent = this.getAttribute('data-collapse-text');
                this.setAttribute('aria-expanded', 'true');
            }
        });
    });
    
    // Smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
