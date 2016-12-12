var Express = require('express');
var app = new Express();
var path = require('path');

app.use(Express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.listen(3000);

app.get('/', function (req, res) {
  res.render('index');
});
