//create 16x16 grid of div's

const container = document.querySelector("#container");

function createGrid(size){
    container.innerHTML = '';
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

const size = document.querySelector("#changeSize")
size.addEventListener("click", () =>{
    let val = prompt("Please Enter Desired Size");
    createGrid(val);
})




