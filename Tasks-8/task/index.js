var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.set('view engine', 'pug');
app.set('views', './views');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/hello', function(req, res) {
  res.send('hello world');
})
app.get('/form', function(req, res) {
  res.render('form');
});
app.post('/formdata', function(req, res) {
  if (req.body.firstname === undefined) {
    return res.redirect('/form');
  }
  var bod = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    city: req.body.city
  };
  console.log(bod);
  res.render('formdata', bod);
})
app.post('/jsondata', (req, res) => {
  res.render('formdata', req.body);
})
app.get('/formdata', (req, res) => {
  res.redirect('/form');
})

app.listen(3000);
