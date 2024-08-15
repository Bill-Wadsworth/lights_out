# A Lights Out Solver (Kinda)

This project solves tha game lights out for a 6x6 grid.
It was implemented using React and Vite and Tailwind for css styling.
any future extensions will allow for a better solving algorithm that works at more sizes.

## How to play

Clicking one square in the grid will toggle the state of the 4 surrounding squares the aim of the game is to turn all lights off.

## How the solver works

The solver works by treating the Board as a matrix over the field of 2 elements.
Then generate a matrix for the states that would be toggled if you pressed each of the individule squares.

By turning all these matries into column vectors we can then combine them into one big adjacency matrix of size 36x36.
To turn off all the lights we need to toggle all of the currently on board values,
so we are looking for a column vector which when multiplied by the adjacency matrix = the board column.
Hence we invert the adjacency matrix over the field of 2 elements and multiply it by the board column.
This gets us a new column which represents all the adjacency matries which need to be pressed to solve the pproblem.

This method works well for 6x6 and some other sizes however falls short for 5x5, 4x4 and others when the game has unsolvable states,
as the adjacency matrix is uninvertable.
