//create 16x16 grid of div's

const container = document.querySelector("#container");

const size = document.querySelector("#changeSize")

for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement("div");

    div.classList.add("classDiv");

    container.appendChild(div);
}

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

