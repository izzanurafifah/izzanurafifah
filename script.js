const quotes = [
    "Learning never exhausts the mind. - Leonardo da Vinci",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "The best way to predict the future is to create it. - Peter Drucker",
];

let quoteIndex = 0;
const intervalTime = 8000;
const fadeDuration = 1000;

function changeQuote() {
    const quoteElement = document.getElementById('quote');
    quoteElement.style.transition = `opacity ${fadeDuration / 1000}s ease`;
    quoteElement.style.opacity = 0;

    setTimeout(() => {
        quoteElement.textContent = quotes[quoteIndex];
        quoteElement.style.opacity = 1;
        quoteIndex = (quoteIndex + 1) % quotes.length;
    }, fadeDuration);
}

setInterval(changeQuote, intervalTime);

const yearSpan = document.getElementById('current-year');
yearSpan.textContent = new Date().getFullYear();