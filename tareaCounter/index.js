const numberCount = document.querySelector('.number');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const increaseBtn = document.querySelector('.increase');

let number = 0;

function decrease() {
	number--;
	updateNumber();
}

function reset() {
	number = 0;
	updateNumber();
}

function increase() {
	number++;
	updateNumber();
}


function updateNumber() {
	numberCount.textContent = number;
}


decreaseBtn.addEventListener('click', decrease);
resetBtn.addEventListener('click', reset);
increaseBtn.addEventListener('click', increase);

