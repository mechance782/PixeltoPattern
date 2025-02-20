document.getElementById("canvasForm").onsubmit = function(){
    clearErrors();
    let isValid = true;
    let canvasHeight = document.getElementById("canvasHeight").value;
    let canvasWidth = document.getElementById("canvasWidth").value;
    if (canvasHeight == "" && canvasWidth == ""){
        return isValid;
    }
    canvasHeight = Number(canvasHeight);
    canvasWidth = Number(canvasWidth);
    if ((canvasHeight > 100) || (canvasWidth > 100)){
        document.getElementById("maxSizeErr").style.display = "block";
        isValid = false;
    }
    if ((canvasHeight <= 0) || (canvasWidth <= 0)){
        document.getElementById("minSizeErr").style.display = "block";
        isValid = false;
    }

    return isValid;
}

function clearErrors(){
    let errors = document.getElementsByClassName("err");
    for (let i=0; i < errors.length; i++){
        errors[i].style.display = "none";
    }
};