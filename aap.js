const express = require("express");
const path = require("path");
const port = 80;
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// const document=require("document");

app.engine('html', require('ejs').renderFile);
app.get('/', function (req, res) {
    res.render(__dirname + 'av2.html');
});
//EXPRESS SPECIFIC STUFF
// app.use('/static', express.static('static')); //For serving static files -->
// app.use(express.urlencoded({ extended: true }));




//END POINTS 
app.get('/home', (req, res) => {
    res.status(200).render('av2.html');
});
app.get('/about', (req, res) => {
    res.render('aboutus.html');
});
app.get('/inbox', (req, res) => {
    res.render('inbox.html');
});

app.get('/contact', (req, res) => {
    res.render('contactav.html');
});

app.get('/explore', (req, res) => {
    res.render('exploreav.html');
});
app.get('/gmail', (req, res) => {
    res.render('gmail.html');
});

//START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});

