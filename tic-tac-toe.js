document.addEventListener("DOMContentLoaded", () => {
	const board = document.getElementById('board')
	let squares = document.querySelectorAll("#board div");
	squares.foreach(square => square.classList.add("square"));
});