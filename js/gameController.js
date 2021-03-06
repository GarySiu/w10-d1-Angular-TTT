angular.module('tttGame')
       .controller('GameController', GameController)

function GameController(){
  this.title = "Tic-Tac-Toe in Angular!"
  this.board = ['','','','','','','','','']
  this.step = 0
  this.move = getMove
  
  function getMove(cell){
    if(!this.board[cell]){
      this.step % 2 === 0 ? this.board[cell] = 'x' : this.board[cell] = 'o'
      this.step++
    }
  }

  this.reset = resetBoard

  function resetBoard(){
    this.board = ['','','','','','','','','']
    this.step = 0
  }

}
