console.log(`welcome to tic tac toes`);
let sound = new Audio("gamesound.mp3");
let turn = "X";

const turnchange = () => {
  return turn === "O" ? "X" : "O";
};
//function to winner
const winner = () => {};

//logic of game
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = document.querySelector(".boxtext");
  b.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = "0";
      turnchange();
      sound.play();
      winner();
      document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    }
  });
});
