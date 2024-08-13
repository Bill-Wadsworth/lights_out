import "./BoardSquare.css";

const BoardSquare = ({ isOn, clickFunc }: {isOn: boolean, clickFunc: () => undefined}) => {
  return (
    <div 
      onClick={clickFunc} 
      className={"Square "+(isOn ? "on" : "off")}
    >
      {isOn ? "Y" : "N"}
    </div>
  );
}

export default BoardSquare
