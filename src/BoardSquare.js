import "./BoardSquare.css";

const BoardSquare = ({ isOn, clickFunc }) => {
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
