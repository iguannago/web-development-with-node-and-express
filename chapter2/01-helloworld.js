const http = require('http')
const port = process.env.PORT | 3000;

function setHead(res, httpStatus) {
    res.writeHead(httpStatus, {
        'Content-Type': 'text/html'
    })
}

const routes = (req, res) => {
    console.log(req.url);
    const path = req.url;
    switch (path) {
        case '/':
            setHead(res, 200);
            res.end('<h1>Homepage</h1');
            break;
        case '/about':
            setHead(res, 200);
            res.end('<h1>About</h1');
            break;
        default:
            setHead(res, 400);
            res.end('<h1>Not Found</h1');
    }
}

const server = http.createServer(routes);


server.listen(port, () => console.log(`server started on port ${port}; press Ctrl+C to termiante...`));