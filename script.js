const input = document.getElementById('searchInput');
input.addEventListener('input', function () {
  const filter = input.value.toLowerCase();
  const cards = document.querySelectorAll('.document-card');
  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(filter) ? '' : 'none';
  });
});