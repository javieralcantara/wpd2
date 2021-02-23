exports.landing_page = function(req, res) {
    res.send('Hello! Welcome to my application.');
}

exports.guestbook_page = function(req, res) {
    res.send('<h1>Guestbook Messages</h1>');
}

exports.about_page = function(req, res) {
    res.redirect('/about.html')
}

exports.new_page = function(req, res) {
    res.send('<h1>You have reached our new page!</h1>');
}

