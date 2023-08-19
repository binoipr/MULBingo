const cells = document.querySelectorAll('.bingo-cell');
const resetButton = document.getElementById('reset-button');

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    cell.classList.toggle('selected');
    checkBingo();
  });
});

resetButton.addEventListener('click', () => {
  cells.forEach(cell => {
    cell.classList.remove('selected', 'disabled');
  });
});

function checkBingo() {
  if (cells.length === document.querySelectorAll('.selected').length) {
    cells.forEach(cell => {
      cell.classList.add('disabled');
    });
    alert('Bingo! You marked all the numbers.');
  }
}
