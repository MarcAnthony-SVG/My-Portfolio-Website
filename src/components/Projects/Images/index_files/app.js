console.log("d", "working");
var board = [
  ["A", "D", "G"],
  ["B", "E", "H"],
  ["C", "F", "I"],
];

var winningBoard = [
  [X, O, O],
  [O, X, O],
  [O, O, X],
  ,
  [O, X, O],
  [O, X, O],
  [O, X, O],
  ,
  [O, O, X],
  [O, X, O],
  [X, O, O],
  ,
  [X, O, O],
  [X, O, O],
  [X, O, O],
  ,
  [O, O, X],
  [O, O, X],
  [O, O, X],
  ,
  ,
  [X, X, X],
  [O, O, O],
  [O, O, O],
  ,
  [O, O, O],
  [O, O, O],
  [X, X, X],
  ,
  [O, O, O],
  [X, X, X],
  [O, O, O],
];

function change(id) {
  var element = document.getElementById(id);
  element.value = "X";
  var board = [
    ["A", "D", "G"],
    ["B", "E", "H"],
    ["C", "F", "I"],
  ];

  for (let i = 0; i < board.length; i++) {
    if (board[i] === element){
console.log("they are")  }
}
console.log(board);
}
