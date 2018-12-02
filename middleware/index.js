//*****************************
// Middleware index.js file 
//*****************************
var middlewareObj = {}

// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

middlewareObj.getLabel = function(req, res, next){
    // Performs label detection on the image file
    client
    .labelDetection('./public/images/demo-image.jpg')
    .then(results => {
        const labels = results[0].labelAnnotations;
        //console.log(results[0]);
        //console.log('Labels:');
        //labels.forEach(label => console.log(label.description));
        req.lbls = labels;
        next();
    })
    .catch(err => {
        console.error('ERROR:', err);
    });
};


middlewareObj.getLabel2 = function(req, res, next){
    // Performs label detection on the image file
    client
    .labelDetection('./public/images/A-Siamese-cat.jpg')
    .then(results => {
        const labels2 = results[0].labelAnnotations;
        //console.log(results[0]);
        //console.log('Labels:');
        //labels.forEach(label => console.log(label.description));
        req.lbls2 = labels2;
        next();
    })
    .catch(err => {
        console.error('ERROR:', err);
    });
};

middlewareObj.getLabel3 = function(req, res, next){
    // Performs label detection on the image file
    client
    .labelDetection('./public/images/python-img.jpeg')
    .then(results => {
        const labels3 = results[0].labelAnnotations;
        //console.log(results[0]);
        //console.log('Labels:');
        //labels.forEach(label => console.log(label.description));
        req.lbls3 = labels3;
        next();
    })
    .catch(err => {
        console.error('ERROR:', err);
    });
};

module.exports = middlewareObj;