const { response } = require("express");
const guestbookDAO = require("../models/guestbookModel")
const db = new guestbookDAO();

exports.landing_page = function(req, res) {
    res.send('Hello! Welcome to my application.');
    db.init();
    console.log("running db int, check console.");
}

exports.guestbook_page = function(req, res) {
    db.getAllEntries().then((entries) => {
        res.render('guestbook', {
            'title': 'Guest Book',
            'entries': entries,
        });
        console.log('promise resolved with:', entries);
    }).catch((err) => {
        console.log('promise rejected with:', err);
    });
}

exports.about_page = function(req, res) {
    res.redirect('/about.html');
}

exports.new_entry = function(req, res) {
    res.render('newentry', {'title': 'Guest Book'});
}

exports.post_new_entry = function(req, res) {
    console.log('processing post-new_entry controller');

    if (!req.body.author) {
        response.status(400).send('Entries must have an author.');
    }

    db.addEntry(req.body.subject, req.body.contents, req.body.author);
    res.redirect('/');
}

exports.show_user_entries = function(req, res) {
    console.log('filtering author name', req.params.author);

    let user = req.params.author;
    db.getEntriesByAuthor(user).then((entries) => {
        res.render('guestbook', {
            'title': 'Guest Book',
            'entries': entries,
        });
        console.log('promise resolved with:', entries);
    }).catch((err) => {
        console.log('promise rejected with:', err);
    });
}

