const guestbookDAO = require("../models/guestbookModel")
const db = new guestbookDAO();

exports.landing_page = function(req, res) {
    res.send('Hello! Welcome to my application.');
    db.init();
    console.log("running db int, check console.");
}

exports.guestbook_page = function(req, res) {
    res.send('<h1>Guestbook Messages</h1>');
    db.getAllEntries();
    console.log("running getAllEntries, check console.");
}

exports.about_page = function(req, res) {
    res.redirect('/about.html')
}

exports.new_page = function(req, res) {
    res.send('<h1>You have reached our new page!</h1>');
}

