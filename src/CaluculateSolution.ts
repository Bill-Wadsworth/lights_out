import IsInBounds from "./Utils/IsInBounds";

const calculateSolution = (board: boolean[][]): boolean[][] | undefined => {
    
    const size = board.length;

    const inverseAdjacencyMatrix = calculateInverse(caluclateAdjacencyBoard(size));

    if (inverseAdjacencyMatrix === undefined) {
        return undefined;
    }

    //convert board to column form
    const columnBoard = Array.from<boolean>({length: size*size}).fill(false).map((_, index) => {
        return board[index%size][Math.floor(index/size)];
    });

    //multiplie the matries.
    const optimalSolutionColumn = inverseAdjacencyMatrix.map((row) => {
        return row.map((_, index) => {
            return row[index] && columnBoard[index]; //since && acts as multiplication here
        }).reduce((last, next) => {return last != next}, false) //then add up each row since != is XOR which is addition
    })

    //need to turn optimalSolution back into Matrix
    const optimalSolution: boolean[][] = [];
    for (let i = 0; i < size; i++) {
        let row: boolean[] = [];
        for (let j = 0; j< size; j++) {
            row.push(optimalSolutionColumn[size*i + j]);
        }
        optimalSolution.push(row);
    }
    
    return optimalSolution;
}

export default calculateSolution;

//Caluculates the board of all adjacent Tiles which will be affected by clicking one
const caluclateAdjacencyBoard = (boardSize:number): boolean[][] => {

    //This function takes center position and caluclates the Board adjacency at 1 column
    const caluclateAdjacencyColumn = (x:number, y:number) : boolean[] => {
        let row = Array.from<boolean>({length: boardSize*boardSize}).fill(false);
        const surrounding = [[1, 0], [0, 1], [0, 0], [-1, 0], [0, -1]];
        surrounding.forEach(direction => {
            const [dx, dy] = direction;
            if (IsInBounds(x+dx, y+dy, boardSize)) { //ensure that the new position is valid
                const rowPosition = boardSize*(x+dx) + (y+dy);
                row[rowPosition] = true;
            }
        });
        return row;
    }

    const adjacencyBoard: boolean[][] = [];
    for (let x = 0; x < boardSize; x++) {
        for (let y = 0; y < boardSize; y++) {
            adjacencyBoard.push(caluclateAdjacencyColumn(x, y));
        }
    }

    return adjacencyBoard;
};

//finds the inverse of a matrix in Field with 2 elements
const calculateInverse = (board: boolean[][]) : boolean[][] | undefined => {
    //copy of board to work with :)
    let newBoard = board.slice();

    //Since this is in the field of 2 elements addition is just XOR
    //this function adds row b to row a so row a is moddified
    const rowAddition = (board: boolean[][], a:number, b:number): boolean[][] => {
        board[a] = board[a].map((value_a, index) => {
            return value_a != board[b][index]; // != is equivilant to XOR
        })
        return board;
    };
    //swaps rows a and b, both are modified
    const rowInterchange = (board: boolean[][], a:number, b:number): boolean[][] => {
        const temp = board[a].slice();
        board[a] = board[b];
        board[b] = temp;
        return board;
    };

    const size = newBoard.length;

    //need to apply same operations to the identity matrix to get inverse so generate it here
    let identity = Array(size).fill(0).map((_, index) => {
        return Array(size).fill(false).map((_, index1) => index == index1);
    });

    for (let i = 0; i < size; i++) {
        //need to ensure there is a 1 in the ith ith index
        let j = i;
        while(!newBoard[i][i]) {
            j += 1;
            if (j >= size) {//shouldnt happen, means matrix is not invertable
                console.log("Error! matrix is not invertable!");
                return undefined;
            } 
            else if (newBoard[j][i]) {
                newBoard = rowInterchange(newBoard, i, j);
                identity = rowInterchange(identity, i, j);
            }
        }

        for (let j = i+1; j < size; j++) {
            if (newBoard[j][i]) { //remove all trues from ith colummn
                newBoard = rowAddition(newBoard, j, i);
                identity = rowAddition(identity, j, i);
            } 
        }
    }
    //From here we know that newBoard must be a Triangular matrix so work backwards to remove all upper trues

    for (let i = size-1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (newBoard[j][i]) {
                newBoard = rowAddition(newBoard, j, i);
                identity = rowAddition(identity, j, i);
            }
        }
    }

    return identity;
}