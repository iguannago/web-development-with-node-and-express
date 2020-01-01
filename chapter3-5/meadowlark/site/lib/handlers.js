const fortune = require('./fortune')

exports.home = (req, res) => res.render('home')

exports.about = (req, res) => {
  res.render('about', {
    fortune: fortune.getFortune()
  })
}

exports.notFound = (req, res) => {
  res.status(404)
  res.render('404')
}

exports.serverError = (err, req, res, next) => {
  if (err) {
    console.log(err.stack)
  }
  res.status(500)
  res.render('500', {
    message: err.stack
  })
}

exports.contact = (req, res) => {
  res.render('contact')
}

exports.processContact = (req, res) => {
  console.log(`received contact from ${req.body.name} <${req.body.email}>`)
  res.redirect(303, '/thank-you')
}

exports.thankYou = (req, res) => {
  res.render('thank-you')
}
