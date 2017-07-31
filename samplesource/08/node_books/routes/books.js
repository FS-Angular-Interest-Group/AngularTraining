var express = require('express');
var router = express.Router();
var fs = require("fs");


/* GET books listing. */
router.get('/', function(req, res, next) {
    var response = {
        status: 1,
        data: null
    };
    fs.readFile( __dirname + "/" + "datas.json", 'utf8', function (err, data) {
        response.data = JSON.parse(data).books;
        res.send(response);
    });
});

module.exports = router;
