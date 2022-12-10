const container = document.getElementById("grid");
const button = document.querySelector("#confirm");
const input = document.querySelector("#number");

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