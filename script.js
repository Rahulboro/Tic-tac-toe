console.log(`welcome to tic tac toes`);
let turnsound = new Audio("poping.mp3");
let gameOversound = new Audio("poping.mp3");
let lineThrough = new Audio("poping.mp3");
let turn = "X";

const turnchange = () => {
  return turn === "X" ? "0" : "X";
};
//function to winner
const winner = () => {
  let boxtext = document.querySelector("boxtext");
  let gamewin = [
    [0, 1, 2][(3, 4, 6)][(0, 1, 2)][(0, 1, 2)][(0, 1, 2)][(0, 1, 2)][(0, 1, 2)][
      (0, 1, 2)
    ][(0, 1, 2)][(0, 1, 2)][(0, 1, 2)],
  ];
};

//logic of game
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", (e) => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = turnchange();
      turnsound.play();
      winner();
      document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    }
  });
});
