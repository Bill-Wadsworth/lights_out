import BoardSquare from "./BoardSquare.tsx";
import "./BoardRow.css";

const BoardRow = ({ row, clickFun }: {row: boolean[], clickFun: (x: number) => undefined}) => {
  return (
    <div className="row">
      {row.map((squareState, y) => {
        return <BoardSquare 
          isOn={squareState}
          key={y}
          clickFunc={()=>{clickFun(y)}}
          />
      })}
    </div>
  );
}

export default BoardRow;
