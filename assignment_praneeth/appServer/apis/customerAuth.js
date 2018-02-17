var customer = require('../models/customerDetails');
var q = require('q');
// var loadash = require('lodash');


function authenticateById(pnrId, res) {
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

    app.get('/api/auth/:pnrId', function (req, res) {

        authenticateById( req.params.pnrId, res);
    });

    // app.get('*', function (req, res) {
    //     res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    // });
};
