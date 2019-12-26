const http = require('http')
const fs = require('fs');
const port = process.env.PORT | 3000;

function serveStaticFile(res, path, contentType = 'text/html', responseCode = 200) {
    const filePath = `${__dirname + path}`;
    console.log(filePath);
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, {
                'Content-Type': 'text/plain'
            });
            res.end('500 - Internal Error: \n' + err);
        }
        res.writeHead(responseCode, {
            'Content-Type': contentType
        });
        res.end(data);
    });
}

const routes = (req, res) => {
    const path = req.url;
    console.log(path);
    switch (path) {
        case '/':
            serveStaticFile(res, '/public/home.html');
            break;
        case '/about':
            serveStaticFile(res, '/public/about.html');
            break;
        case '/img/logo.png':
            serveStaticFile(res, '/public/img/logo.png', 'image/png');
            break;
        default:
            serveStaticFile(res, '/public/404.html');
    }
}

const server = http.createServer(routes);


server.listen(port, () => console.log(`server started on port ${port}; press Ctrl+C to termiante...`));