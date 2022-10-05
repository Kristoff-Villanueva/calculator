const screen = document.getElementById("screen");
const minus = document.getElementById("minus");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const zero = document.getElementById("zero");
const dot = document.getElementById("dot");
const plus = document.getElementById("plus");
const enter = document.getElementById("enter");
const body = document.querySelector("body");
const cancel = document.getElementById("cancel");

//screen
let screenText = "";

//operators
enter.addEventListener("click", function () {
	let screenEval =
		eval(screenText) % 1 === 0 ? eval(screenText) : eval(screenText).toFixed(2);
	screen.innerHTML = `<h2>${screenEval}</h2>`;
	screenText = "";
});

minus.addEventListener("click", function () {
	screenText += "-";
	screen.innerHTML = `<h2>${screenText}</h2>`;
});

divide.addEventListener("click", function () {
	screenText += "/";
	screen.innerHTML = `<h2>${screenText}</h2>`;
});

multiply.addEventListener("click", function () {
	screenText += "*";
	screen.innerHTML = `<h2>${screenText}</h2>`;
});

dot.addEventListener("click", function () {
	screenText += ".";
	screen.innerHTML = `<h2>${screenText}</h2>`;
});

plus.addEventListener("click", function () {
	screenText += "+";
	screen.innerHTML = `<h2>${screenText}</h2>`;
});

cancel.addEventListener("click", function () {
	screenText = "";
	screen.innerHTML = `<h2>${screenText}</h2>`;
});

//digits

seven.addEventListener("click", function () {
	screenText += "7";
	screen.innerHTML = `<h2>${screenText}</h2>`;
});

eight.addEventListener("click", function () {
	screenText += "8";
	screen.innerHTML = `<h2>${screenText}</h2>`;
});

nine.addEventListener("click", function () {
	screenText += "9";
	screen.innerHTML = `<h2>${screenText}</h2>`;
});

four.addEventListener("click", function () {
	screenText += "4";
	screen.innerHTML = `<h2>${screenText}</h2>`;
});

five.addEventListener("click", function () {
	screenText += "5";
	screen.innerHTML = `<h2>${screenText}</h2>`;
});

six.addEventListener("click", function () {
	screenText += "6";
	screen.innerHTML = `<h2>${screenText}</h2>`;
});

one.addEventListener("click", function () {
	screenText += "1";
	screen.innerHTML = `<h2>${screenText}</h2>`;
});

two.addEventListener("click", function () {
	screenText += "2";
	screen.innerHTML = `<h2>${screenText}</h2>`;
});

three.addEventListener("click", function () {
	screenText += "3";
	screen.innerHTML = `<h2>${screenText}</h2>`;
});

zero.addEventListener("click", function () {
	screenText += "0";
	screen.innerHTML = `<h2>${screenText}</h2>`;
});
