console.log(`welcome to tic tac toes`);
let sound = new Audio("gamesound.mp3");
let turn = "X";

const turnchange = () => {
  return turn === "O" ? "X" : "O";
};

const winner = () => {};

//logic of game
let boxes = document.getElementById;
