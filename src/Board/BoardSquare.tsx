import "./BoardSquare.css";

const BoardSquare = ({ isOn, isSolution, clickFunc }: {isOn: boolean, isSolution: boolean, clickFunc: () => undefined}) => {
  return (
    <div 
      onClick={clickFunc} 
      className={"Square "+(isOn ? "on" : "off")}
    >
      {isSolution ? "Y" : "N"}
    </div>
  );
}

export default BoardSquare
