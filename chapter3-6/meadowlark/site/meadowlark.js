const express = require('express')
const expressHandlebars = require('express-handlebars')
const handlers = require('./lib/handlers')
const headers = require('./lib/hearders')
const path = require('path')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000
const app = express()
app.disable('x-powered-by')

app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', handlers.home)

app.get('/about', handlers.about)

app.get('/headers', headers.showHeaders)

app.get('/contact', handlers.contact)

app.post('/process-contact', handlers.processContact)

app.get('/thank-you', handlers.thankYou)

app.get('/api/tours', handlers.tours)

app.use(handlers.notFound)

app.use(handlers.serverError)

if (require.main === module) {
  app.listen(port, () => console.log(`Express started on http://localhost:${port};
     \n press Ctrl-C to terminate.`))
} else {
  module.exports = app
}
