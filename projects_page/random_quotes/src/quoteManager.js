let currentIndex

export function getRandomQuote(quotes) {
  currentIndex = Math.floor(Math.random() * quotes.length);
  return quotes[currentIndex];
}

export function getCurrentIndex() {
  return currentIndex;
}
