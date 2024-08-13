import BoardSquare from "./BoardSquare.tsx";
import "./BoardRow.css";

const BoardRow = ({ row, solutionRow, clickFun }: {row: boolean[], solutionRow: boolean[], clickFun: (x: number) => undefined}) => {
  return (
    <div className="row">
      {row.map((squareState, y) => {
        return <BoardSquare 
          isOn={squareState}
          isSolution={solutionRow[y]}
          key={y}
          clickFunc={()=>{clickFun(y)}}
          />
      })}
    </div>
  );
}

export default BoardRow;
