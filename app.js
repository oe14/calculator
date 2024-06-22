const clearBtn = document.getElementById("clearBtn");
const previousNumber = document.getElementById("previousNumber");
const currentNumber = document.getElementById("currentNumber");
const buttons = document.querySelectorAll(".buttons");
let previous = null;
let operator = null;

buttons.forEach((button) => {
	button.addEventListener("click", function () {
		const buttonText = button.textContent;

		if (!isNaN(buttonText) || buttonText === ".") {
			// Handle number and decimal point buttons
			currentNumber.textContent += buttonText;
		} else if (
			buttonText === "+" ||
			buttonText === "X" ||
			buttonText === "-" ||
			buttonText === "/"
		) {
			// Handle operator buttons
			if (currentNumber.textContent !== "") {
				previous = parseFloat(currentNumber.textContent);
				operator = buttonText;
				previousNumber.textContent = previous + " " + operator;
				currentNumber.textContent = "";
			}
		}
	});
});

function operation(current, previous, operator) {
	switch (operator) {
		case "+":
			return previous + current;
		case "-":
			return previous - current;
		case "X":
			return previous * current;
		case "/":
			return previous / current;
		default:
			return current;
	}
}

const equal = document.getElementById("equal");
equal.addEventListener("click", function () {
	if (
		previous !== null &&
		operator !== null &&
		currentNumber.textContent !== ""
	) {
		const current = parseFloat(currentNumber.textContent);
		const result = operation(current, previous, operator);
		currentNumber.textContent = result;
		previousNumber.textContent = "";
		previous = null;
		operator = null;
	}
});

clearBtn.addEventListener("click", function () {
	currentNumber.textContent = "";
	previousNumber.textContent = "";
	previous = null;
	operator = null;
});
