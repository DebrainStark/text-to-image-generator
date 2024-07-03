// Typing effect for the "#typed-output" element using Typed.js
const options = {
    strings: ["Generator", "GENERATOR", "Generator"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1500,
    loop: true
};

new Typed("#typed-output", options);

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