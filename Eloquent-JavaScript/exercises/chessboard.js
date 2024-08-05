/* 
  Write a program that creates a string that represents an 8×8 grid, using
  newline characters to separate lines. At each position of the grid there
  is either a space or a "#" character. The characters should form a
  chessboard.
  Passing this string to console.log should show something like this:
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
*/

let board = "";
let size = 8;
for (let a = 0; a < size; a++) {
  for (let b = 0 + a; b < size + a; b++) {
    if (b % 2 == 0) {
      board = board + "#";
    }
    else if (b % 2 != 0) {
      board = board + " ";
    } 
  }
  board = board + "\n";
}
console.log(board);