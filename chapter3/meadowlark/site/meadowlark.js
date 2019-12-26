const express = require('express')

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.type('text/plain')
    res.send('Meadowlark Travel')
})

app.get('/about', (req, res) => {
    res.type('text/plain')
    res.send('About Meadowlark Travel')
})

app.use((req, res) => {
    console.log('app use 404')
    res.type('text/plain')
    res.status(404)
    res.send('404 - Not found')
})

app.use((err, req, res, next) => {
    console.log('app use 500')
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server Error')
})

app.listen(port, () => console.log(`Express started on http://localhost:${port}; \n press Ctrl-C to terminate.`))