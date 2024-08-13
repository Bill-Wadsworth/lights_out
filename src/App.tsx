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

  const [solution, setSolutoin] = useState<boolean[][]>(calculateSolution(board)!);

  return (
    <Board board={board} setBoard={setBoard} solution={solution} updateSolution={(newBoard) => {setSolutoin(calculateSolution(newBoard)!)}}/>
  );
}

export default App;
