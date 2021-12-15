const container = document.querySelector('.container');
const grid = document.querySelectorAll('.grid')
gridGenerator();

function gridGenerator() {
  for (let i = 0; i < 256; i++) {
    const element = document.createElement('div');
    element.classList.add('grid');
    container.appendChild(element);
  }
}





