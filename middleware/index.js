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
        console.log('Labels:');
        labels.forEach(label => console.log(label.description));
        //console.log(labels[0].description);
        req.lbl = labels[0].description;
        next();
    })
    .catch(err => {
        console.error('ERROR:', err);
    });
};


module.exports = middlewareObj;