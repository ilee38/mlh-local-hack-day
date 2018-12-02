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
app.get('/', middleware.getLabel, middleware.getLabel2, middleware.getLabel3, function(req, res){
    res.render('index.ejs', {
        labels : req.lbls,
        labels2: req.lbls2,
        labels3: req.lbls3
    });
});

// *** end of Routes section *** //

app.listen(port, function(){
    console.log('Server running on port ' + port);
});