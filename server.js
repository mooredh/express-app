const express = require('express');
const ejs = require('ejs');

var app = express();

app.set('view engine', 'ejs');

app.locals.getYear = () => {
    return new Date().getFullYear();
}
app.use(express.static(__dirname + '/public'))

app.use((req, res, next) => {

    next();

})

/*app.use((req, res, next) => {
    res.render('maintenance.ejs');
})*/

app.get('/', (req, res) => {
    res.render('home', {
        pageTitle: 'Home page'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        pageTitle: 'About page'
    });
});


app.listen(3000);