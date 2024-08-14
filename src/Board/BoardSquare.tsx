const BoardSquare = ({ isOn, isSolution, clickFunc }: {isOn: boolean, isSolution: boolean, clickFunc: () => undefined}) => {
  return (
    <div 
      onClick={clickFunc} 
      className={"cursor-pointer w-16 h-16 border-4 border-solid select-none hover:drop-shadow-2xl " + (isOn ? "bg-orange-400" : "bg-stone-500")}
    >
      {isSolution ? "Y" : "N"}
    </div>
  );
}

export default BoardSquare
