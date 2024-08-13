import './App.css';
import Board from './Board.js';
import calculateSolution from './CaluculateSolution.js';

function App() {

  calculateSolution([[true, true, false], [true, true, false], [true, true, false]]);

  return (
    <Board size={3} />
  );
}

export default App;
