const express = require('express');
const ejs = require('ejs');

const port = process.env.PORT || 3000;

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
    res.render("home", {
        pageTitle: "Home page",
        classHome: "active",
        classAbout: "",
        classProjects: ""
    });
});

app.get('/about', (req, res) => {
    res.render("about", {
        pageTitle: "About page",
        classAbout: "active",
        classHome: "",
        classProjects: ""
    });
});

app.get("/projects", (req, res) => {
    res.render("projects", {
        pageTitle: "Projects page",
        classProjects: "active",
        classHome: "",
        classAbout: ""
    });
});


app.listen(port, () => {
    console.log(`Server is up on ${port}`);
});