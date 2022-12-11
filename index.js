const container = document.getElementById("grid");
const button = document.querySelector("#confirm");
const input = document.querySelector("#number");
const rainbow = document.querySelector("#rainbow");
const clear = document.querySelector("#clear");

function getInput() {
    const value = document.querySelectorAll('.grid-item').value;
    console.log(value);
  }
function makeRows(v) {
    container.innerHTML = '';
    container.style.setProperty('--grid-rows', v);
    container.style.setProperty('--grid-cols', v);
    for (c = 0; c < (v * v); c++) {
        let cell = document.createElement("div");
        cell.style.width = "1/v %";
        cell.style.height = "1/v %";
        container.appendChild(cell).className = "grid-item";

        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        cell.onmouseover = () => cell.style.backgroundColor = "#" + randomColor;

    };
};

button.addEventListener("click", () => makeRows(input.value));
clear.addEventListener("click", () => makeRows(input.value));
let randomColor = Math.floor(Math.random()*16777215).toString(16);
let cells = document.querySelectorAll(".grid-item");

//rainbow.addEventListener("click", () => )
for (let i = 0; i < cells.length; i++) {
    cells[i].onmouseover = () => cells[i].style.backgroundColor = "#" + randomColor;
};