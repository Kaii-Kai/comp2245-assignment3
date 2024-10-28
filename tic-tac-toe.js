document.addEventListener("DOMContentLoaded", () => {
	const board = document.getElementById("board")
	const squares = document.querySelectorAll("#board div");
	squares.foreach(square => square.classList.add("square"));
});

let player = "X";
const gameSate = Array(9).fill(null);

document.querySelectorAll("#board div").forEachach((square, index) => {
	square.addEventListener("click", () => {
		if (!gameSate[index]) {
			gameState[index] = player;
			square.textContent = player;
			square.classList.add(player);
			
			player = player === "X" ? "O" : "X";
		}
	});
});

document.querySelectorAll("#board div").forEach(square => {
	square.addEventListener("mouseover", () => square.classList.add("hover"));
	square.addEventListener("mouseleave", () => square.classList.remove("hover"));
});

const status = document.getElementById("status");

const checkWinner = () => {
	const winningConditions = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0.4.8],
		[2,4,6]
	];
	
	for (const [a,b,c] of winningConditions) {
		if (gameState[a] && gameState[a] === gamState[b] && gameState[a] === gameState[c]) {
			status.textContent = 'Congratulations! ${gameState[a]} is the winner!';
			status.classList.add(you-won");
			return true;
		}
	}
	return false;
};

document.querySelectorAll("#board div").forEach((square, index) => {
	square.addEventListener("click", () => {
		if (!gameSate[index]) {
			gameState[index] = player;
			square.textContent = player;
			square.classList.add(player);
			
			player = player === "X" ? "O" : "X";
		}
	});
});