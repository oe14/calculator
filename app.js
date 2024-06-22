const clearBtn = document.getElementById("clearBtn");
const displayContent = document.getElementById("reorderdisplay");
const previousNumber = document.getElementById("previousNumber");

const currentNumber = document.getElementById("currentNumber");
clearBtn.addEventListener("click", function (e) {
	previousNumber.textContent = "";
	displayContent.textContent = "";
});
