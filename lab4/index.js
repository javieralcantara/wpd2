const express = require('express'); 
const path = require('path');
const router = require('./routes/guestbookRoutes');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');

const app = express(); 
app.engine('mustache', mustache());
app.set('view engine', 'mustache');

const public = path.join(__dirname, 'public');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(public));
app.use('/', router);


app.use(function(req, res) {
    res.status(404);
    res.send('Oops! We didn\'t find what you are looking for.');
})
   
app.listen(3000, () => {
    console.log('Server started on port 3000. Ctrl^c to quit.');
}) 