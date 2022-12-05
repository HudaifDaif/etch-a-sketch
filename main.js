function createSketchPad(grain) {
	let sketchPad = document.querySelector(".sketchPad");
	let pixels = sketchPad.querySelectorAll("div");
	pixels.forEach((div) => div.remove());

	sketchPad.style.gridTemplateColumns = `repeat(${grain}, 1fr)`;
	sketchPad.style.gridTemplateRows = `repeat(${grain}, 1fr)`;

	for (i = 0; i < grain * grain; i++) {
		let paintedCell = document.createElement("div");
		paintedCell.addEventListener("mouseover", () => {
			paintedCell.style.backgroundColor = "black";
		});
		paintedCell.style.backgroundColor = "white";
		sketchPad.insertAdjacentElement("beforeend", paintedCell);
	}
}
createSketchPad(16);

function changeGrain(input) {
	if (input >= 10 && input <= 100) {
		createSketchPad(input);
	} else input = prompt("Please pick a number between 10 and 100");
}
