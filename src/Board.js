import BoardSquare from './BoardSquare.js';
import BoardRow from "./BoardRow.js";
import { useState } from "react";

const Board = ({ size }) => {
  
  const boardArry = Array(size).fill(0).map(x => {
    Array(size).fill(false);
  })

  const [board, setBoard] = useState(Array(size).fill(0).map(x =>{
    return Array(size).fill(false);
  }));
  
  const squareClicked = (x, y) => {
    const nextState = board.slice();
    const surrounding = [[1, 0], [0, 1], [0, 0], [-1, 0], [0, -1]];
    surrounding.forEach(element => {
      const [dx, dy] = element;
      if (!(x+dx >= size || x+dx < 0 || y+dy >= size || y+dy < 0)){
        nextState[x+dx][y+dy] = !nextState[x+dx][y+dy];
      } 
    });
    setBoard(nextState);
  }

  const rowClick = (x) => {
    // Curry function to allow the value of X to be specified now
    // and the value of y to be added later
    return (y) => {squareClicked(x, y)}
  }

  return (
    <div>
      {board.map((boardRow, x) => {
        return (
          <BoardRow 
            row={boardRow}
            clickFun={rowClick(x)}
            key={x}
          />
        )
      })}
    </div>
  );

}

export default Board;
