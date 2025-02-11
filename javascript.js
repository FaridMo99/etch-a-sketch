//Create a webpage with a 16x16 grid of square divs.
//Create the divs using JavaScript. Don’t try to create them by hand by copying and pasting them in your HTML file!
//It’s best to put your grid squares inside a “container” div. This div can be written in your HTML file.

//creating the rows and columns with loops
let container = document.getElementById("container")

for (let i = 0; i < 16; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "rows")
    container.appendChild(newDiv)

    for (let n = 0; n < 16; n++) {
        let items = document.createElement("div");
        items.setAttribute("class", "columns")
        newDiv.appendChild(items)
    }
}


/*Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through
 your grid like a pen would.
Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it.
 You can set up event listeners for either of those events as a starting point.*/



/*There are multiple ways to change the color of the divs, including:
Adding a new class to the div.
Changing the div’s background color using JavaScript.*/


/*
Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid.
 Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide)
  so that you’ve got a new sketch pad.*/


  /*Tip: Set the limit for the user input to a maximum of 100.
 A larger number of squares results in more computer resources being used, potentially causing delays, freezing,
 or crashing that we want to prevent.*/


/*Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
Also check out prompts.
You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.
Push your project to GitHub!*/








/*
Extra credit
Transform the behavior of a square when interacting with the mouse by introducing a series of modifications.

Rather than squares being the same color throughout the grid, randomize the squares’ RGB values with each interaction.
Additionally, implement a progressive darkening effect where each interaction darkens the square by 10%.
 The goal is to achieve a fully black (or completely colored) square in only ten interactions.
Hint: The opacity CSS property is useful here. To learn how to use it, check this MDN docs article about the opacity CSS property.
You can choose to do either one or both of these challenges, it’s up to you. */