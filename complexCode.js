/* File name: complexCode.js */

// This code generates a random maze using Depth-First Search algorithm
// The maze is represented by a 2D grid of cells where each cell can be either a wall or an open passage
// The algorithm generates a maze by carving passages through the grid, starting at a random cell

// Create a function to generate the maze
function generateMaze(rows, columns) {
  // Create the grid as a 2D array
  const grid = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      row.push("#"); // Initialize each cell as a wall
    }
    grid.push(row);
  }

  // Set random start cell coordinates
  let currentRow = Math.floor(Math.random() * rows);
  let currentCol = Math.floor(Math.random() * columns);
  grid[currentRow][currentCol] = " "; // Start cell is an open passage

  // Create stack to track visited cells
  const stack = [[currentRow, currentCol]];

  // Depth-First Search algorithm
  while (stack.length > 0) {
    const [row, col] = stack[stack.length - 1];
    const neighbors = getNeighbors(row, col, rows, columns, grid);

    if (neighbors.length === 0) {
      stack.pop(); // Backtrack if no unvisited neighbors
    } else {
      const [nRow, nCol] = neighbors[Math.floor(Math.random() * neighbors.length)];
      grid[nRow][nCol] = " "; // Carve a passage
      grid[row + (nRow - row) / 2][col + (nCol - col) / 2] = " "; // Remove wall between current and neighbor
      stack.push([nRow, nCol]); // Move to the next cell
    }
  }

  // Print the maze
  for (let i = 0; i < rows; i++) {
    let rowString = "";
    for (let j = 0; j < columns; j++) {
      rowString += grid[i][j];
    }
    console.log(rowString);
  }
}

// Function to get unvisited neighbors of a cell
function getNeighbors(row, col, maxRow, maxCol, grid) {
  const neighbors = [];

  if (row - 2 >= 0 && grid[row - 2][col] === "#") {
    neighbors.push([row - 2, col]);
  }
  if (row + 2 < maxRow && grid[row + 2][col] === "#") {
    neighbors.push([row + 2, col]);
  }
  if (col - 2 >= 0 && grid[row][col - 2] === "#") {
    neighbors.push([row, col - 2]);
  }
  if (col + 2 < maxCol && grid[row][col + 2] === "#") {
    neighbors.push([row, col + 2]);
  }

  return neighbors;
}

// Generate a 15x15 maze
generateMaze(15, 15);