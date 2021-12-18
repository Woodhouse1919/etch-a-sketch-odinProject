gridGenerator();
colourBlack();

// Function to generate a 16x16 grid
function gridGenerator(rows = 16, columns = 16) {
  const container = document.querySelector('.container');
  const grid = document.querySelectorAll('.grid');
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const element = document.createElement('div');
      element.classList.add('grid');
      container.appendChild(element);
      container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
      container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    }
  }
}

function colourBlack() {
  const grid = document.querySelectorAll('.grid');
  grid.forEach((gridItem) => {
    gridItem.addEventListener('mouseover', () => {
      gridItem.classList.add('active');
    });
  });
}

// Clear button functionality
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
  const grid = document.querySelectorAll('.grid');
  grid.forEach((gridItem) => {
    gridItem.classList.remove('active');
  });
});

const newGridButton = document.querySelector('.new-grid');
newGridButton.addEventListener('click', () => {
  const newGrid = prompt('Please enter new grid');
  if (newGrid <= 100) {
    deleteGrid();
    gridGenerator(newGrid, newGrid);
    colourBlack();
  } else {
    alert('Please enter a number below 100')
  }
  
});

function deleteGrid() {
  const grid = document.querySelectorAll('.grid');
  grid.forEach((gridItem) => {
    gridItem.remove();
  });
}
