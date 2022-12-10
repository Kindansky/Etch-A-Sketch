const container = document.getElementById("container");
const button = document.querySelector("#confirm");
const input = document.querySelector("#number");
const value = input.value;

function makeRows(v) {
    container.innerHTML = '';
    container.style.setProperty('--grid-rows', v);
    container.style.setProperty('--grid-cols', v);
    for (c = 0; c < (v * v); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
    };
};

button.addEventListener("click", () => makeRows(input.value));