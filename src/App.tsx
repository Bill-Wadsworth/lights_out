import { useState } from 'react';
import './App.css';
import Board from './Board/Board.js';
import calculateSolution from './CaluculateSolution.js';
import Toggle from './Utils/Toggle.js';

function App() {

  calculateSolution([[true, true, false], [true, true, false], [true, true, false]]);

  const boardSize = 6;

  const grid = Array(boardSize).fill(0).map(_ =>{
    return Array(boardSize).fill(false);
  });

  const [board, setBoard] = useState<boolean[][]>(grid);

  const [solution, setSolution] = useState<boolean[][]>(calculateSolution(board));

  const [showSolution, setShowSolution] = useState<boolean>(false);

  //randomised the values on the board
  const randomise = () => {
    const random = grid.map(row => {
      return row.map(_ => {return Math.random() < 0.5});
    });
    setBoard(random);
    setSolution(calculateSolution(random)!);
  }
  //reset the board
  const reset = () => {
    setBoard(grid);
    setSolution(grid);
  }

  return (
    <div className='flex flex-col'>
      <div className=' font-extrabold text-center text-7xl text-white'>
        Lights Out Solver
      </div>
      <div className='flex justify-center'>
        <div className='flex place-content-center flex-col'>
          <hr className=' my-4'/>
          {/* Header over the board */}
          <div className="flex flex-row justify-evenly ">
            <button className='btn btn-blue' onClick={randomise}>
              Randomise
            </button>
            <button className='btn btn-blue' onClick={reset}>
              Reset
            </button>
            <div className=' text-center text-white font-bold'>
              Show Solution
              <div className='flex justify-center'>
                <Toggle  toggleState={showSolution} setToggle={setShowSolution}/>
              </div>
            </div>
            
          </div>
          {/* Board and sidebar */}
          <div>
            <Board 
              board={board} 
              setBoard={setBoard} 
              showSolution={showSolution}
              solution={solution} 
              updateSolution={(newBoard) => {setSolution(calculateSolution(newBoard)!)}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
