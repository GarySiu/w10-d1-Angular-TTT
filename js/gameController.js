angular.module('tttGame')
       .controller('GameController', GameController)

function GameController(){
  this.title = "Tic-Tac-Toe in Angular!"
  this.board = ['','','','','','','','','']
  this.step = 0
  this.move = getMove
  function getMove(cell){
    if(this.step % 2 === 0){
      this.board[cell] = 'x'
      this.step++
    } else {
      this.board[cell] = 'o'
      this.step++
    }
  }
}

