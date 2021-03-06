const http = require('http'),
fs = require('fs');
function serveStaticFile(res, path, contentType, responseCode) {
    if (!responseCode) {
        responseCode = 200;
    }
    fs.readFile(__dirname + path, function(err, data) {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 - Internal Error');
        } else {
            res.writeHead(responseCode,
            { 'Content-Type': contentType });
            res.end(data);
        }
    });
}
http.createServer(function(req, res) {
 //normalize the url by removing querystrings and trailing slashes
 //convert to lowercase
    path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch (path) {
        case '':
            console.log(req.url)
            serveStaticFile(res, '/public/home.html', 'text/html');
            break;
        case '/about':
            console.log(req.url)
            serveStaticFile(res, '/public/about.html', 'text/html');
            break;
        case '/img/logo.jpg':
            console.log(req.url)
            serveStaticFile(res, '/public/img/logo.jpg', 'image/jpeg');
            break;
        default:
            console.log(req.url)
            serveStaticFile(res, '/public/404.html', 'text/html', 404);
            break;
    }
}).listen(3000);
console.log('Server started, Ctrl^c to terminate....');