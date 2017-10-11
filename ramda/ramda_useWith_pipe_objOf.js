/**
 * Created by betty on 9/14/17.
 */
"use strict";

var R = require("ramda");
R.useWith(R.pipe, [R.prop, R.objOf])('_id', 'martProduct')({_id: '5'});