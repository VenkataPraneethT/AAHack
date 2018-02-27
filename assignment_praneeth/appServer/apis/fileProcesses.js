
// var customer = require('../models/customerDetails');
var q = require('q');
// var loadash = require('lodash');

function processFileData(res, queryParams) {
      // customer.find({},function (err, details) {
      //     // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      //     if (err) {
      //         res.send(err);
      //     }
      //     res.json(details); // return all details in JSON format
      // }).sort({ "id": -1 }).skip(startCo).limit( 100 );

};


// module.exports = function (app, q, loadash) {
module.exports = function (app) {

    // api ---------------------------------------------------------------------
    app.post('/api/file-handler', function (req, res) {
        console.log(req.body, "req.body");
        res.send("Success")
        // processFileData( res);
    });


};
