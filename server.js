const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

/* Express HBS -  Permite trabajar con handlebars en node*/
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('inicio', {
        nombre: 'francisco',
    });
});

app.get('/nosotros', (req, res) => {
    res.render('nosotros');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});