/**
 * Created by betty on 7/31/17.
 */
"use strict";

const db = require('../../db');
const co = require('co');
const _ = require('lodash');
const merge = Object.assign;


function populateTest() {
  return co.call(this, function *() {
    const iterator = db.order
      .find({})
      .sort('create')
      .populate('channel review products.product pingxxRefund')
      .populate({
        path: 'reviewMerchant',
        model: 'merchant',
        select: 'name BD',
        populate: {
          path: 'BD',
          model: 'user',
          select: 'nickname',
        }
        })
      .cursor();
    let data = yield iterator.next()
    if (data != null) {
      console.log(data);
      console.log(data.reviewMerchant.BD.nickname);
      // data = yield iterator.next();
    };

  });

}

populateTest()