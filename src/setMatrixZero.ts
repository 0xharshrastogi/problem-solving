import { RandomMatrix } from "./generateInput"::
type Matix = number[][];

function setMatrix(matrix: Matix) {
	const ROWS = matrix.length;
	const COLS = matrix[0].length;
	let flag = false;

	for (let i = 0; i < ROWS; i++) {
		if (matrix[i][0] === 0) flag = true;
		for (let j = 1; j < COLS; j++) if (matrix[i][j] === 0) [matrix[0][j], matrix[i][0]] = [0, 0];
	}

	for (let i = ROWS - 1; i >= 0; i--) {
		if (flag) matrix[i][0] = 0;
		for (let j = COLS - 1; j >= 1; j--)
			if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
		if (flag) matrix[i][0] = 0;
	}

	console.table(matrix);
}

// const matrix = new RandomMatrix(3, 4, 0, 8).input;
// console.log(matrix);
setMatrix([
	[8, 5, 3, 5],
	[0, 5, 7, 6],
	[1, 5, 5, 0],
]);
