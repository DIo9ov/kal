let canvas = document.getElementById("gCanvas");
let context = canvas.getContext("2d");
let nx = 25;
let ny = 15;
let sqside = 65;
let hx=3;
let hy=2;
let himg = new Image();
himg.src = "h.png";
canvas.width=nx*sqside;
canvas.height=ny*sqside;
let bgimg = new Image();
bgimg.src = "bg_karta.jpg";
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



