/**
 * Created by betty on 9/8/17.
 */
"use strict";

var deliveryTimeMap =
{ '48': '2个工作日',
  '72': '3个工作日',
  '120': '5个工作日',
  '168': '7个工作日',
  '240': '10个工作日',
  '336': '15个工作日',
  '480': { a: {"aa": 1}, b: 2 } };

function convertForUpdate(body) {

  const flattenObject = (key, obj) => {
    return Object.keys(obj).reduce((o, k) => {
      o[`${key}.${k}`] = obj[k];
      return o;
    }, {});
  };

  Object.keys(body).map(key => {
    if (typeof body[key] === 'object' && body[key]) {
      Object.assign(body, flattenObject(key, body[key]));
      delete body[key];
    }
  });
  return body;
};

var c = convertForUpdate(deliveryTimeMap);
console.log(c);