export function updateFavoriteIcon(isFavorite, button) { 
  button.innerHTML = isFavorite
    ? '<img src="images/star-solid.svg" alt="Remove from favorites" width=30 height=30">'
    : '<img src="images/star-borders.svg" alt="Add to favorites" width=30 height=30">';
}

export function showFavoriteCard(container, quote, author, id, quotes) {
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');
  favoriteCard.dataset.quoteId = id;
  favoriteCard.innerHTML = `
    <p class="favorite-quote">${quote}</p>
    <p class="favorite-author">${author}</p>
    <div class="favorite-remove">❌</div>
  `;

  const removeBtn = favoriteCard.querySelector('.favorite-remove');
  removeBtn.addEventListener('click', () => hideFavoriteCard(id, quotes));

  container.appendChild(favoriteCard);
}

export function hideFavoriteCard(id, quotes) {
  const card = document.querySelector(`.favorite-card[data-quote-id="${id}"]`);
  if (card) card.remove();

  const quote = quotes.find(q => q.id === id);
  if (quote) quote.isFavorite = false;

  const favorites = quotes.filter(q => q.isFavorite).map(q => q.id);
  localStorage.setItem('favorites', JSON.stringify(favorites));
}
