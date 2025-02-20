function findRatio(canvasHeight, canvasWidth){
    let heightRatio; 
    let widthRatio;
    canvasHeight = Number(canvasHeight);
    canvasWidth = Number(canvasWidth);
    if (canvasHeight > canvasWidth){
        heightRatio = 100;
        widthRatio = (canvasWidth / canvasHeight)* 100;
        widthRatio = Math.round(widthRatio);
    } else if (canvasWidth > canvasHeight) {
        widthRatio = 100;
        heightRatio = (canvasHeight / canvasWidth) * 100;
        heightRatio = Math.round(heightRatio);
    }
    heightRatio += "%";
    widthRatio += "%";
    return { widthRatio : widthRatio, heightRatio : heightRatio};
}

const getHome = (req, res) => {
    res.status(200).render('home');
}

const getCanvas = (req, res) => {
    let height = req.query.canvasHeight;
    let width = req.query.canvasWidth;

    res.status(200).render('canvas', {canvasHeight: height, canvasWidth: width, ratio: findRatio(height, width) });
}

export default { getHome, getCanvas };