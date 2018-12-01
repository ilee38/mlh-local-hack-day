//
// Main index.js file for the pet-finder app
//
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var middleware = require('./middleware');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine', 'ejs');

// *** Routes section *** //
app.get('/', middleware.getLabel, function(req, res){
    res.render('index.ejs', {
        label : req.lbl
    });
});

// *** end of Routes section *** //

app.listen(port, function(){
    console.log('Server running on port ' + port);
});