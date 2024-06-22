const clearBtn = document.getElementById("clearBtn");
const displayContent = document.getElementById("reorderdisplay");
const previousNumber = document.getElementById("previousNumber");

const currentNumber = document.getElementById("currentNumber");

const buttons = document.querySelectorAll(".buttons");

buttons.forEach((button) =>
	button.addEventListener("click", function () {
		currentNumber.textContent = currentNumber.textContent + button.textContent;
		if (
			button.textContent === "+" ||
			button.textContent === "X" ||
			button.textContent === "-" ||
			button.textContent === "/"
		) {
			previousNumber.textContent = currentNumber.textContent;
			currentNumber.textContent = "";
		}
	})
);
clearBtn.addEventListener("click", function (e) {
	location.reload();
});
