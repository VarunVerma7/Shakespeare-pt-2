var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mbLogic = require('./macbethLogic.js');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
var port = process.env.PORT || 8080;
app.get('/', function (req, res) {
    res.render('index');
})
app.listen(port, function () {
    console.log('Listening on port ' + port);
})
app.post('/post', function (req, res) {
    var url = req.body.url;
    if (url !== 'http://www.ibiblio.org/xml/examples/shakespeare/macbeth.xml') {
        res.send('Incorrect url typed');
        return;
    }
    mbLogic.getInfo(url);
    res.render('macbeth');
})