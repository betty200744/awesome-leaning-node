/**
 * Created by betty on 8/7/17.
 */
"use strict";
var R = require("ramda");

var reasonMap = [
  {reasonCode: 0, reason: "7 天无理由退换货"},
  {reasonCode: 1, reason: "尺寸拍错/不喜欢/效果不好"},
  {reasonCode: 2, reason: "质量问题"},
  {reasonCode: 3, reason: "收到商品时有划痕或破损"},
  {reasonCode: 4, reason: "颜色/尺寸/参数与描述不符"},
  {reasonCode: 5, reason: "其他"},
];

console.log(R.find(R.propEq('reason', '其他'))(reasonMap));