document.addEventListener("DOMContentLoaded", () => {
	const squares = document.querySelectorAll("#board div");
	const Status = document.getElementById("status");
	const gameSate = Array(9).fill(null);
	let player = "X";
	squares.forEach(square => square.classList.add("square"));

	//const checkWinner = () => {
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
	const checkWinner = () => {
	for (const [a,b,c] of winningConditions) {
		if (gameState[a] && gameState[a] === gamState[b] && gameState[a] === gameState[c]) {
			Status.textContent = 'Congratulations! ${gameState[a]} is the winner!';
			Status.classList.add("you-won");
			return true;
		}
	}
	return false;
	};

	squares.forEach((square, index) => {
		square.addEventListener("click", () => {
			if (!gameSate[index] && !checkWinner) {
				gameState[index] = player;
				square.textContent = player;
				square.classList.add(player);
				
				if (checkWinner()) return;
				
				player = player === "X" ? "O" : "X";
			}
		});
		
		square.addEventListener("mouseover", () => square.classList.add("hover"));
		square.addEventListener("mouseleave", () => square.classList.remove("hover"));
	});

	document.querySelector(".New-Game").addEventListener("click", () => {
		gameState.fill(null);
		squares.forEach(square => {
			square.textContent = "";
			square.classList.remove("X", "O");
		});
		Status.textContent = "New Game";
		Status.classList.remove("you-won");
		player = "X";
	});
});
