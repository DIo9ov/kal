let canvas = document.getElementById("gCanvas");
let menu = document.getElementById("menu");
let context = canvas.getContext("2d");
let contextMenu = menu.getContext("2d");

let nx = 40;
let ny = 25;
let sqside = 22;
let hx=3;
let hy=2;
let himg = new Image();
himg.src = "h.png";
canvas.width=nx*sqside;
canvas.height=ny*sqside;
let bgimg = new Image();
bgimg.src = "bg_karta.jpg";



let gabrovo = new Image();
gabrovo.src = "gabrovo.jpg";

function drawObekt(){

contextMenu.drawImage(gabrovo, 0,0);

}

function drawMap() {

context.clearRect(0, 0, canvas.width, canvas.height);
context.drawImage(bgimg, 0,0,canvas.width, canvas.height);
context.drawImage(himg, hx * sqside, hy * sqside, sqside, sqside);



for (let i = 0; i < nx; i++)
{
	for (let j = 0; j < ny; j++)
	{
		context.strokeRect(i * sqside, j * sqside, sqside, sqside);
	}
}

}


drawMap();


canvas.onclick = function(d) {
	let x = d.x - canvas.offsetLeft;
	let y = d.y - canvas.offsetTop;
	hx = Math.floor(x / sqside);
	hy = Math.floor(y / sqside);
	console.log(hx + " " + hy);
	drawMap();
}


function moveLeft(){
	if(hx>0)
	{	
	hx = (hx - 1);
	drawMap();
	}	
}
function moveDown(){
	if(hy<ny-1)
	{	
	hy = (hy + 1);
	drawMap();
	}
}
function moveRight(){
	if(hx<nx-1)
	{
	hx = (hx + 1);
	drawMap();
	}
}
function moveUp(){
	if(hy>0)
	{
	hy = (hy - 1);
	drawMap();
	}	

}

function mqsto(){
if (hx==19 && hy==10)
	{
			console.log ("В Габрово");
			drawObekt()
	}
}

document.onkeypress = function(e){
	let key = e.key;
		switch(key){
			case "4": moveLeft(); break;
			case "2": moveDown(); break;
			case "6": moveRight(); break;
			case "8": moveUp(); break;
			case "a": moveLeft(); break;
			case "s": moveDown(); break;
			case "d": moveRight(); break;
			case "w": moveUp(); break;
			}
			
	console.log (hx + " " + hy);
	mqsto();
}



