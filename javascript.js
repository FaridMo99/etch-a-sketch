// loops to create grid and changign the background color

let container = document.getElementById("container")
let body = document.querySelector("body")
let button = document.createElement("button")

body.insertBefore(button, container)


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function creatingGrid(a, b){
container.innerHTML = ""
for (let i = 0; i < a; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "rows")
    container.appendChild(newDiv)

    for (let n = 0; n < b; n++) {
        let items = document.createElement("div");
        items.setAttribute("class", "columns")
        items.addEventListener("mouseover", () => items.style.backgroundColor = getRandomColor())
        newDiv.appendChild(items)
        
    }
}
}

creatingGrid(16, 16);

//button to change the grid size
button.textContent = "Change Grid Size"
button.addEventListener("click", () => {
    let input = prompt("What Size should your new Grid have?(Max:100)")
    let numInput = Number(input)
    if(numInput > 100) {
        alert("ERROR")
        return
    }

    else if (numInput < 100) {
      creatingGrid(numInput, numInput)
        return
    }

    else {
        alert("This is not a number")
    }
})
