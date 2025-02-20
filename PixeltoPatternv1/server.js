import express from 'express';
import router from './routes/router.js';

const PORT = 3000;
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.set('views', 'views');
app.set('view engine', 'ejs');

app.use('/', router);

app.listen(PORT, () => { console.log(`Server started at http://localhost:${PORT}/home`)});