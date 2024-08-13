import BoardRow from "./BoardRow.tsx";
import { useState } from "react";
import IsInBounds from "./Utils/IsInBounds.ts";

const Board = ({ size }: { size: number }) => {

  const [board, setBoard] = useState<boolean[][]>(Array(size).fill(0).map(_ =>{
    return Array(size).fill(false);
  }));
  
  const squareClicked = (x: number, y: number): undefined => {
    const nextState = board.slice();
    const surrounding = [[1, 0], [0, 1], [0, 0], [-1, 0], [0, -1]];
    surrounding.forEach(element => {
      const [dx, dy] = element;
      if (IsInBounds(x+dx, y+dy, size)){
        nextState[x+dx][y+dy] = !nextState[x+dx][y+dy];
      } 
    });
    setBoard(nextState);
  }

  return (
    <div>
      {board.map((boardRow, x) => {
        return (
          <BoardRow 
            row={boardRow}
            clickFun={(y: number) => {squareClicked(x, y)}}
            key={x}
          />
        )
      })}
    </div>
  );

}

export default Board;
