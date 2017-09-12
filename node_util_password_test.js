/**
 * Created by betty on 8/9/17.
 */
"use strict";

var passwordUtil = require('./util/password');

var password = '0123456789abcd@';

var ehuoqiuke = '242092cbb075d436cc680715986f50a1';

var ehuoqiukeji = passwordUtil.encrypt(password);
console.log(passwordUtil.decrypt(ehuoqiuke));

console.log(ehuoqiukeji);

console.log(passwordUtil.decrypt(ehuoqiukeji));

