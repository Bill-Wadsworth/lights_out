import { useState } from 'react';
import './App.css';
import Board from './Board/Board.js';
import calculateSolution from './CaluculateSolution.js';

function App() {

  calculateSolution([[true, true, false], [true, true, false], [true, true, false]]);

  const boardSize = 7;

  const grid = Array(boardSize).fill(0).map(_ =>{
    return Array(boardSize).fill(false);
  });
  const random = grid.map(row => {
    return row.map(_ => {return Math.random() < 0.5});
  })

  const [board, setBoard] = useState<boolean[][]>(random);

  const [solution, setSolution] = useState<boolean[][]>(calculateSolution(board)!);

  return (
    <div className='flex place-content-center'>
      <Board 
        board={board} 
        setBoard={setBoard} 
        solution={solution} 
        updateSolution={(newBoard) => {setSolution(calculateSolution(newBoard)!)}}
        />
    </div>
  );
}

export default App;
