import BoardSquare from "./BoardSquare.js";
import "./BoardRow.css";

const BoardRow = ({ row, clickFun }) => {
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
