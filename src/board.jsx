import React from 'react';
import Square from './square';
import './App.css';

class Board extends React.Component{

  constructor(){
    super();
    this.state={
                squares:Array(9).fill(null),
                xNext: true
                };
  }

  handleClick(i){
    const newSquares = this.state.squares.slice();
    newSquares[i]= this.state.xNext ? 'X' : 'O';
    this.setState({squares:newSquares,
                   xNext: !this.state.xNext});
  }

  render(){
  const winner = checkWinner(this.state.squares);
  return(
  <div id="game">
           <div id="status">Winner is: {winner}</div>
           <div id="status">Next Player: {(this.state.xNext ? 'X' : 'O')}</div>
           <div id="head">
               World's best tic tac toe AI
           </div>
           <div id="board">
               <div><Square id={this.state.squares[0]} onClick={() => this.handleClick(0)}/></div>
               <div><Square id={this.state.squares[1]} onClick={() => this.handleClick(1)}/></div>
               <div><Square id={this.state.squares[2]} onClick={() => this.handleClick(2)}/></div>
               <div><Square id={this.state.squares[3]} onClick={() => this.handleClick(3)}/></div>
               <div><Square id={this.state.squares[4]} onClick={() => this.handleClick(4)}/></div>
               <div><Square id={this.state.squares[5]} onClick={() => this.handleClick(5)}/></div>
               <div><Square id={this.state.squares[6]} onClick={() => this.handleClick(6)}/></div>
               <div><Square id={this.state.squares[7]} onClick={() => this.handleClick(7)}/></div>
               <div><Square id={this.state.squares[8]} onClick={() => this.handleClick(8)}/></div>
           </div>
       </div>
  );
  }

}

function checkWinner(moves){
var lines = [
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,4],
            [2,4,8],
];
for(let i = 0; i < lines.length; i++){
  var [a,b,c] = lines[i];
  if(moves[a] && moves[a] === moves[b] && moves[a] === moves[c]){
     return moves[a];
  }
}
return null;
}

export default Board;
