document.addEventListener('DOMContentLoaded', function() {
    // Typing effect for the introduction text
    const introText = "Transforming text into stunning visuals with the power of AI.";
    let index = 0;
    const typingSpeed = 50;
    const introTextElement = document.getElementById('intro-text');

    function typeIntroText() {
        if (index < introText.length) {
            introTextElement.innerHTML += introText.charAt(index);
            index++;
            setTimeout(typeIntroText, typingSpeed);
        }
    }

    typeIntroText();

    // Typing effect for the "#typed-output" element using Typed.js
    const options = {
        strings: ["Generator", "GENERATOR"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1500,
        loop: true
    };

    new Typed("#typed-output", options);

    // Dynamic quotes
    const quotes = [
        "This platform is a game-changer for digital content creation!",
        "Innovative, user-friendly, and incredibly powerful.",
        "The best tool for turning text into visual masterpieces.",
        "A must-have for designers and content creators."
    ];

    let quoteIndex = 0;
    const quoteElement = document.getElementById('quote');

    function changeQuote() {
        quoteElement.innerHTML = quotes[quoteIndex];
        quoteIndex = (quoteIndex + 1) % quotes.length;
    }

    setInterval(changeQuote, 3000);

    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scroll to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    let currentQuoteIndex = 0;
    const quotes = document.querySelectorAll('.carousel .quote');
    const totalQuotes = quotes.length;

    function showQuote(index) {
        quotes.forEach((quote, i) => {
            quote.style.display = i === index ? 'block' : 'none';
        });
    }

    document.getElementById('prev').addEventListener('click', () => {
        currentQuoteIndex = (currentQuoteIndex - 1 + totalQuotes) % totalQuotes;
        showQuote(currentQuoteIndex);
    });

    document.getElementById('next').addEventListener('click', () => {
        currentQuoteIndex = (currentQuoteIndex + 1) % totalQuotes;
        showQuote(currentQuoteIndex);
    });

    showQuote(currentQuoteIndex);
});