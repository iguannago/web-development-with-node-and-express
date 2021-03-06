const http = require('http')
const port = process.env.PORT | 3000;

function setHead(res, httpStatus = 200) {
    res.writeHead(httpStatus, {
        'Content-Type': 'text/plain'
    })
}

const routes = (req, res) => {
    const path = req.url;
    switch (path) {
        case '/':
            setHead(res);
            res.end('Homepage');
            break;
        case '/about':
            setHead(res);
            res.end('About');
            break;
        default:
            setHead(res, 400);
            res.end('Not Found');
    }
}

const server = http.createServer(routes);


server.listen(port, () => console.log(`server started on port ${port}; press Ctrl+C to termiante...`));