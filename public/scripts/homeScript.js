document.getElementById("canvasForm").onsubmit = function(){
    
    let isValid = true;
    let canvasHeight = document.getElementById("canvasHeight").value;
    let canvasWidth = document.getElementById("canvasWidth").value;
    canvasHeight = Number(canvasHeight);
    canvasWidth = Number(canvasWidth);
    if ((canvasHeight > 100) || (canvasWidth > 100)){
        document.getElementById("maxSizeErr").style.display = "block";
        isValid = false;
    }

    return isValid;
}