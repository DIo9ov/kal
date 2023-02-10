let inputA = document.getElementById("inputA");
let inputB = document.getElementById("inputB");
let sumButton = document.getElementById("sumButton");
let razButton = document.getElementById("razButton");
let delButton = document.getElementById("delButton");
let umnButton = document.getElementById("umnButton");
let result = document.getElementById("result");
sumButton.onclick = function() {

	a = Number(inputA.value);
	b = Number(inputB.value);
	let c = a + b;
	result.innerText = c;

}
razButton.onclick = function() {

	a = Number(inputA.value);
	b = Number(inputB.value);
	let c = a - b;
	result.innerText = c;

}
delButton.onclick = function() {

	a = Number(inputA.value);
	b = Number(inputB.value);
	let c = a / b;
	result.innerText = c;

}
umnButton.onclick = function() {

	a = Number(inputA.value);
	b = Number(inputB.value);
	let c = a * b;
	result.innerText = c;

}



