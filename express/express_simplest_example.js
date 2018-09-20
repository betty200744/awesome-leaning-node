/**
 * Created by betty on 12/2/17.
 */
"use strict";

const app = require("express")();

app.get('/', function (req, res) {
  res.send('abc');
});

app.listen(3000);