document.getElementById("canvasForm").onsubmit = function(){
    
    let isValid = true;
    let canvasHeight = document.getElementById("canvasHeight").value;
    let canvasWidth = document.getElementById("canvasWidth").value;
    if ((canvasHeight == "") || (canvasWidth == "")){
        document.getElementById("canvasSizeErr").style.display = block;
        isValid = false;
    }

    return isValid;
}