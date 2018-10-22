function makeGrid(event) {
	//prevent the default to avoid reloading the page
	event.preventDefault();
	// get the height value
	var h = document.getElementById('inputHeight').valueAsNumber;
	//get the width value
	var w = document.getElementById('inputWidth').valueAsNumber;
	// get the table element
	const table = document.getElementById('pixelCanvas');
	table.innerHTML = '';
	for (var i = 0; i < h; i++) {
		//create row
		var row = document.createElement('tr');
		for (var y = 0; y < w; y++) {
			//create a colomn element
			var cell = document.createElement('td');
			//assign event color on click
			cell.onclick = color;
			//append to the row child cell
			row.appendChild(cell);
		}
		//append the row after adding the colomns
		table.appendChild(row);
	}
}
//add event to call make grid when submit
document.getElementById('sizePicker').addEventListener('submit', function (event) {
	makeGrid(event);
});
//event color to change the color of cells
function color() {
	this.bgColor = document.getElementById('colorPicker').value;
};



