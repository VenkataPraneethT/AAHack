var customer = require('../models/customerDetails');
var q = require('q');
// var loadash = require('lodash');

function getCustomerDetails(res, queryParams) {
      customer.find({},function (err, details) {
          // if there is an error retrieving, send the error. nothing after res.send(err) will execute
          if (err) {
              res.send(err);
          }
          res.json(details); // return all details in JSON format
      }).sort({ "id": -1 }).skip(startCo).limit( 100 );

};
function getCustomersById(pnrId, res) {
    customer.find({"PNR": pnrId},function (err, details) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(details); // return all repo in JSON format
    });

};

// module.exports = function (app, q, loadash) {
module.exports = function (app) {

    // api ---------------------------------------------------------------------
    app.get('/api/customer/:pnrId', function (req, res) {

        getCustomersById( req.params.pnrId, res);
    });

    // app.delete('/api/customer/:pnrId', function (req, res) {
    //     // use mongoose to get all repos in the database

    // });


    // app.get('*', function (req, res) {
    //     res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    // });
};
