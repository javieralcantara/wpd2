const guestbookDAO = require("../models/guestbookModel")
const db = new guestbookDAO();

exports.landing_page = function(req, res) {
    res.send('Hello! Welcome to my application.');
    db.init();
    console.log("running db int, check console.");
}

exports.guestbook_page = function(req, res) {
    res.send('<h1>Guest Book Page</h1>');
    db.getAllEntries().then((entries) => {
        console.log("controller.guestbook_page received data: ", entries);
    });
}

exports.about_page = function(req, res) {
    res.redirect('/about.html');
}

exports.new_page = function(req, res) {
    res.send('<h1>You have reached our new page!</h1>');
}

exports.peter_page = function(req, res) {
    res.send('<h1>Peter\'s entries</h1>');
    db.getEntriesByAuthor("Peter").then((entries) => {
        console.log("controller.peter_page received data: ", entries);

    })
}

exports.jake_page = function(req, res) {
    res.send('<h1>Jake\'s entries</h1>');
    db.getEntriesByAuthor("Jake").then((entries) => {
        console.log("controller.jake_page received data: ", entries);

    })
}

