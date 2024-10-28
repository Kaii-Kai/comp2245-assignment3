document.addEventListener("DOMContentLoaded", () => {
	const board = document.getElementById('board')
	let squares = document.querySelectorAll("#board div");
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