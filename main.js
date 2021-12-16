gridGenerator();
const grid = document.querySelectorAll('.grid');

// Function to generate a 16x16 grid
function gridGenerator(rows = 16, columns = 16) {
  const container = document.querySelector('.container');

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const element = document.createElement('div');
      element.classList.add('grid');
      container.appendChild(element);
    }
  }
}

// Event listener to colour grid black on hover
grid.forEach((gridItem) => {
  gridItem.addEventListener('mouseover', () => {
    gridItem.classList.add('active');
  });
});

// Clear button functionality
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
  grid.forEach((gridItem) => {
    gridItem.classList.remove('active');
  });
});
