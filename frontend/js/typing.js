
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