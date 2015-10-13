angular.module('tttGame')
       .controller('GameController', GameController)

function GameController(){
  this.title = "Tic-Tac-Toe in Angular!"
  // this.width = 3;
  // this.height = 3;
  this.board = ['0','1','2','3','4','5','6','7','8'];
}

// function generateBoard(width, height){
//   var board = []
//   for(i = 0; i < width * height; i++){
//     board.push([])
//   }
//   return board;
// }