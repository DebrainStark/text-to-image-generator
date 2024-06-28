// main.js

// Ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is ready to go!');
    
    // Add smooth scroll to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example of adding an interactive element (e.g., a button click event)
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        alert('Button clicked! Redirecting to the generator page.');
        window.location.href = 'generator.html';
    });
});
