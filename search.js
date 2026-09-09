function searchGames() {
  var q = document.getElementById('searchBar').value.trim().toLowerCase();
  var cards = document.querySelectorAll('.game-card[data-name]');
  var visible = 0;
  cards.forEach(function (card) {
    var name = card.getAttribute('data-name').toLowerCase();
    var match = name.indexOf(q) !== -1;
    card.style.display = match ? '' : 'none';
    if (match) visible++;
  });
  var empty = document.getElementById('noResults');
  if (empty) empty.style.display = visible === 0 ? 'block' : 'none';
}
