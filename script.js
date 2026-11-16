const searchInput = document.querySelector('#searchInput');
const cards = [...document.querySelectorAll('.topic-card')];
const filters = [...document.querySelectorAll('.filter')];
const emptyState = document.querySelector('#emptyState');
let activeFilter = 'all';

function updateCards() {
  const keyword = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;
  cards.forEach(card => {
    const text = (card.innerText + ' ' + card.dataset.keywords).toLowerCase();
    const categoryMatch = activeFilter === 'all' || card.dataset.category === activeFilter;
    const searchMatch = !keyword || text.includes(keyword);
    const visible = categoryMatch && searchMatch;
    card.hidden = !visible;
    if (visible) visibleCount++;
  });
  emptyState.hidden = visibleCount > 0;
}
searchInput.addEventListener('input', updateCards);
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  activeFilter = button.dataset.filter;
  updateCards();
}));
