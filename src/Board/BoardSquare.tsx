const BoardSquare = ({ isOn, isSolution, showSolution, clickFunc }: {isOn: boolean, isSolution: boolean, showSolution: boolean, clickFunc: () => undefined}) => {
  return (
    <div 
      onClick={clickFunc} 
      className={"cursor-pointer w-16 h-16 border-4 border-solid select-none hover:drop-shadow-2xl m-1 " + (isOn ? "bg-orange-400" : "bg-stone-500")
        + (isSolution&&showSolution ? " border-slate-300" : " border-transparent")
      }
    >
    </div>
  );
}

export default BoardSquare
