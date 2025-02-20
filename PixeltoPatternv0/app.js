const express = require('express');
const PORT = 3000;
const app = express();

app.use(express.urlencoded({extended: false}));

app.use(express.static('public'));

app.set('view engine', 'ejs');


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

app.get('/', (req,res) => {
    console.log("u did it");
    res.render('home');
})

app.post('/canvasSubmit', (req, res) => {
    let height = req.body.canvasHeight;
    let width = req.body.canvasWidth;

    res.render('canvas', { canvasHeight : height, canvasWidth: width, ratio : findRatio(height, width) });
})



app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
})