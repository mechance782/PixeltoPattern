const canvas = document.getElementById("canvasContainer");

canvas.addEventListener("click", (event) => {
    let element = event.target;
    if (element.id.includes("pixel") ){
        element.style.backgroundColor = "black";
    }
})

