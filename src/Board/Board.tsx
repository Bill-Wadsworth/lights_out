import BoardRow from "./BoardRow.tsx";
import IsInBounds from "../Utils/IsInBounds.ts";

type Props = { 
  board: boolean[][], 
  setBoard: (newBoard: boolean[][]) => void,
  solution: boolean[][],
  updateSolution: (board: boolean[][]) => void;
};
const Board = ({ board, setBoard, solution, updateSolution }: Props) => {

  const size = board.length;
  
  const squareClicked = (x: number, y: number): void => {
    const nextState = board.slice();
    const surrounding = [[1, 0], [0, 1], [0, 0], [-1, 0], [0, -1]];
    surrounding.forEach(element => {
      const [dx, dy] = element;
      if (IsInBounds(x+dx, y+dy, size)){
        nextState[x+dx][y+dy] = !nextState[x+dx][y+dy];
      } 
    });
    setBoard(nextState);
    updateSolution(nextState); //after a square is clicked need to change the current solution
  }

  return (
    <div>
      {board.map((boardRow, x) => {
        return (
          <BoardRow 
            row={boardRow}
            solutionRow={solution[x]}
            clickFun={(y: number) => {squareClicked(x, y)}}
            key={x}
          />
        )
      })}
    </div>
  );

}

export default Board;
