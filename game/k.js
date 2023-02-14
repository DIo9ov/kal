let canvas = document.getElementById("gCanvas");
let context = canvas.getContext("2d");
let nx = 4;
let ny = 6;
let sqside = 50;

let hx=3;
let hy=2;


canvas.width=nx*sqside;
canvas.height=ny*sqside;
	for (let i = 0; i < nx; i++)
	{
		for (let j = 0; j < ny; j++)
		{
			context.strokeRect(i * sqside, j * sqside, sqside, sqside);
		}
	}

//context.fillRect(hx * sqside, hy * sqside, sqside, sqside);
let himg = new Image();
himg.src = "h.png";	
context.drawImage(himg,hx * sqside, hy * sqside, sqside, sqside);