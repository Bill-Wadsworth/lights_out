import BoardSquare from "./BoardSquare.tsx";
const BoardRow = ({ row, solutionRow, showSolution, clickFun }: {row: boolean[], solutionRow: boolean[], showSolution: boolean, clickFun: (x: number) => undefined}) => {
  return (
    <div className="flex flex-row">
      {row.map((squareState, y) => {
        return <BoardSquare 
          isOn={squareState}
          isSolution={solutionRow[y]}
          showSolution={showSolution}
          key={y}
          clickFunc={()=>{clickFun(y)}}
          />
      })}
    </div>
  );
}

export default BoardRow;
