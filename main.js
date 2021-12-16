gridGenerator();
const grid = document.querySelectorAll('.grid');

function gridGenerator() {
  const container = document.querySelector('.container');
  for (let i = 0; i < 256; i++) {
    const element = document.createElement('div');
    element.classList.add('grid');
    container.appendChild(element);
  }
}

grid.forEach((gridItem) => {
  gridItem.addEventListener('mouseover', () => {
    gridItem.classList.add('active')
  });
});
