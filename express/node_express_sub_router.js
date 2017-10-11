/**
 * Created by betty on 9/12/17.
 */
"use strict";
var express = require("express");
var router = express.Router();


router.get('/book/', function(req, res) {
    res.send('Get a random book');
  });


router.get('/cook/',function(req, res) {
    res.send('cook a book');
  });

module.exports = router;