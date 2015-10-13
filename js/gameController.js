angular.module('tttGame')
       .controller('GameController', GameController)

function GameController(){
  this.title = "Tic-Tac-Toe in Angular!"
  this.board = ['','','','','','','','','']
  this.step = 0
  this.move = function(){
    if(this.step % 2 === 0) {
      this.step++
      return 'x'
    } else {
      this.step++
      return 'o'
    }
  }
}