// window.addEventListener('resize', callShowCards)
window.addEventListener('resize', callShowCards);

function callShowCards() {
  const lists = document.querySelectorAll('.home__books-all-items');
  const vw = document.documentElement.clientWidth;
  lists.forEach(ul => {
    const listElements = Array.from(ul.querySelectorAll('.home__books-item'));
    listElements.forEach(li => {
      li.style.display = 'none';
    });
    if (vw >= 320 && vw < 767) {
      showCards(1, ul);
    } else if (vw >= 768 && vw < 1439) {
      showCards(3, ul);
    } else if (vw >= 1440) {
      showCards(listElements.length, ul);
    }
  });
}

function showCards(number, lists) {
  const li = Array.from(lists.querySelectorAll('li'));
  for (let i = 0; i < number; i++) {
    li[i].style.display = 'flex';
  }
}

export { callShowCards };
