let container = document.getElementById("container")
let body = document.querySelector("body")
let button = document.createElement("button")

body.insertBefore(button, container)

function creatingGrid(a, b){
container.innerHTML = ""
for (let i = 0; i < a; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "rows")
    container.appendChild(newDiv)

    for (let n = 0; n < b; n++) {
        let items = document.createElement("div");
        items.setAttribute("class", "columns")
        items.addEventListener("mouseover", () => items.style.backgroundColor = "yellow")
        newDiv.appendChild(items)
        
    }
}
}

creatingGrid(16, 16);


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



/*
Extra credit
Rather than squares being the same color throughout the grid, randomize the squares’ RGB values with each interaction.
Additionally, implement a progressive darkening effect where each interaction darkens the square by 10%.
 The goal is to achieve a fully black (or completely colored) square in only ten interactions.
Hint: The opacity CSS property is useful here. To learn how to use it, check this MDN docs article about the opacity CSS property.
You can choose to do either one or both of these challenges, it’s up to you. */