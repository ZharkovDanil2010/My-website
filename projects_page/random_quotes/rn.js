import { getRandomQuote, getCurrentIndex } from './src/quoteManager.js';
import { updateFavoriteIcon, showFavoriteCard, hideFavoriteCard } from './src/favoriteManager.js';
import quotes from './src/quotes.js';

const btn = document.querySelector('.quote-btn');
const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author');
const toggleFavoriteBtn = document.querySelector('.favorite-btn');
const favoriteContainer = document.querySelector('.favorities_container');

// --- ХРАНЕНИЕ В localStorage ---
function saveFavorites() {
  const favorites = quotes.filter(q => q.isFavorite).map(q => q.id);
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

function loadFavorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites.forEach(id => {
    const quote = quotes.find(q => q.id === id);
    if (quote) {
      quote.isFavorite = true;
      showFavoriteCard(favoriteContainer, quote.quote, quote.author, quote.id, quotes);
    }
  });
}

// --- ЛОГИКА ---
function generateRandomQuote() {
  const randomQuote = getRandomQuote(quotes);
  quoteText.textContent = randomQuote.quote;
  quoteAuthor.textContent = randomQuote.author;
  updateFavoriteIcon(randomQuote.isFavorite, toggleFavoriteBtn);
  toggleFavoriteBtn.style.display = 'inline-block';
}

function addDeleteFavoriteQuote() {
  const currentQuote = quotes[getCurrentIndex()];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  updateFavoriteIcon(currentQuote.isFavorite, toggleFavoriteBtn);

  if (currentQuote.isFavorite) {
    showFavoriteCard(favoriteContainer, currentQuote.quote, currentQuote.author, currentQuote.id, quotes);
  } else {
    hideFavoriteCard(currentQuote.id, quotes);
  }

  saveFavorites();
}

// --- СОБЫТИЯ ---
btn.addEventListener('click', generateRandomQuote);
toggleFavoriteBtn.addEventListener('click', addDeleteFavoriteQuote);

// --- ИНИЦИАЛИЗАЦИЯ ---
loadFavorites();
