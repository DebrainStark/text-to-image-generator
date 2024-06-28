// main.js

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

    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Generate image gallery items (Placeholder functionality)
    const generateButton = document.getElementById('generateButton');
    const imageGallery = document.getElementById('imageGallery');

    generateButton.addEventListener('click', () => {
        const textInput = document.getElementById('textInput').value;
        if (textInput) {
            const img = document.createElement('img');
            img.src = 'https://via.placeholder.com/200'; // Placeholder image URL
            img.alt = textInput;
            imageGallery.appendChild(img);
        }
    });
});
// main.js

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

    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Generate image gallery items (Placeholder functionality)
    const generateButton = document.getElementById('generateButton');
    const imageGallery = document.getElementById('imageGallery');

    generateButton.addEventListener('click', () => {
        const textInput = document.getElementById('textInput').value;
        if (textInput) {
            const img = document.createElement('img');
            img.src = 'https://via.placeholder.com/200'; // Placeholder image URL
            img.alt = textInput;
            imageGallery.appendChild(img);
        }
    });
});
// main.js

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

    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Generate image gallery items (Placeholder functionality)
    const generateButton = document.getElementById('generateButton');
    const imageGallery = document.getElementById('imageGallery');

    generateButton.addEventListener('click', () => {
        const textInput = document.getElementById('textInput').value;
        if (textInput) {
            const img = document.createElement('img');
            img.src = 'https://via.placeholder.com/200'; // Placeholder image URL
            img.alt = textInput;
            imageGallery.appendChild(img);
        }
    });
});

// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: ["Generator", "GENERATOR"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1500,
        loop: true
    };

    var typed = new Typed("#typed-output", options);
});
