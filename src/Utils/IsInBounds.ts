//function to determine if a spot from x, y coords are within in board
const IsInBounds = (x: number, y:number, boardSize: number): boolean => {
    return !(x >= boardSize || x < 0 || y >= boardSize || y < 0);
}
export default IsInBounds;