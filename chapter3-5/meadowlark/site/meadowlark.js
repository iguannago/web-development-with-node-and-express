const express = require('express')
const expressHandlebars = require('express-handlebars')
const fortune = require('./lib/fortune')
const handlers = require('./lib/handlers')

const app = express()
const port = process.env.PORT || 3000

app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

app.get('/', handlers.home)

app.get('/about', handlers.about)

app.use(handlers.notFound)

app.use(handlers.serverError)

app.listen(port, () => console.log(`Express started on http://localhost:${port};
 \n press Ctrl-C to terminate.`))