// Select color input
// Select size input
const btn = document.getElementById('submitBtn');
btn.addEventListener('click',makeGrid);

function dont(){
	return false;
};

document.getElementById('sizePicker').addEventListener('submit',function dont(e){
	e.preventDefault();
}
);

function color(){
			this.bgColor = document.getElementById('colorPicker').value;
		};
// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
var h = document.getElementById('inputHeight').valueAsNumber;
var w = document.getElementById('inputWidth').valueAsNumber;
const table = document.getElementById('pixelCanvas');
table.innerHTML = '';
for (var i = 0 ; i< h ; i++){
	var row = document.createElement('tr');
	
	for (var y =0 ; y< w;y++)
	{
		var cell = document.createElement('td');
		cell.onclick = color;
		//cell.addEventListener("onclick",
		row.appendChild(cell);
	}
	table.appendChild(row);
}
}

