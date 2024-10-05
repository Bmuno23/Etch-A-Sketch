
const container = document.querySelector("#container");

function createGrid(size){
    //clear existing grid
    container.innerHTML = '';

    //create grid based on size input
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
    
        div.classList.add("classDiv");
    
        container.appendChild(div);
    }

    //color changing property of div's
    const outSideAccessDiv = document.querySelectorAll(".classDiv");

    outSideAccessDiv.forEach((div) =>{

    div.addEventListener("mouseover", ()=> {
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)

        let color = `rgb(${r}, ${g}, ${b})`

        div.style.backgroundColor = color;
    })
})
}

//create initial grid
createGrid(16);

//create new sized grid based on user input if button is clicked
const size = document.querySelector("#changeSize")
size.addEventListener("click", () =>{

    let val = prompt("Please Enter Desired Size");
    if (!isNaN(val) && val > 0) {
        createGrid(val); // Create a new grid with the specified size
      } else {
        alert("Please enter a valid number!");
      }
})




