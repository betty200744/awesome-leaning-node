/**
 * Created by betty on 12/19/17.
 */
"use strict";
const objectPath = require('object-path');
const ObjectId = require('mongoose').Types.ObjectId;

let reviewSyncMapping = [
  'name',
  'support.deliveryHours',
  'support.ensureQuality',
  'support.refundable',
  'support.refundableLabel',
  'mainCategory._id',
  'minorCategory._id',
  'martProducts.b',
  'martProduct',
  'martProducts.costPrice',
  'martProducts.pric',
  'martProducts.serialNo',
  'martProduc',
  'martProducts.soldout',
  'martProducts.stockCoun',
  'martProducts.transferFe',
  'merchantTransferFee',
  'martProducts.priceLimitation.from',
  'martProducts.priceLimitation.to',
  'transferFeeTemplate',
  'martTransferFeeTemplate',
  'brandInfo.na',
  'extra.afterSalePolicy',
  'extra.merchantTransferFee',
  'extra.QA',
  'extra.sellerCommen',
  'extra.info',
  'extra.merchantSerialNo',
  'merchant',
  'productImage',
  'pictures',
  'sellerSerialNo',
];


let martReviewObject =
  { "_id" : ObjectId("5a37d7957d4f9608fcd3c161"), "maxProfitPercentage" : 0.16, "name" : "冬装日系连帽羽绒服男青年学生加厚保暖棉服外套户外修身棉服潮装", "productImage" : "https://oexd4utdf.qnssl.com/archive/7f9515b28cea2a511e96_800_800.jpg", "support" : { "deliveryHours" : 72, "ensureQuality" : true, "refundable" : true, "refundableLabel" : "", "_id" : ObjectId("5a37d7957d4f9608fcd3c165") }, "minProfitPercentage" : 0.16, "middleCategory" : { "name" : "男上衣", "_id" : ObjectId("5a2fb5205216262f9c546386") }, "minorCategory" : { "name" : "羽绒服", "_id" : ObjectId("5a2fb5205216262f9c546394") }, "transferFeeTemplate" : ObjectId("59b760fe072f803f68d46059"), "mainCategory" : { "name" : "男装", "_id" : ObjectId("5a2fb5205216262f9c546549") }, "overseas" : false, "stockLabel" : "enough", "merchant" : ObjectId("59b760e9780b413900bfd501"), "martProducts" : [ ObjectId("5a37d7957d4f9608fcd3c166"), ObjectId("5a37d7957d4f9608fcd3c167"), ObjectId("5a37d7957d4f9608fcd3c168"), ObjectId("5a37d7957d4f9608fcd3c169"), ObjectId("5a37d7957d4f9608fcd3c16a"), ObjectId("5a37d7957d4f9608fcd3c16b"), ObjectId("5a37d7957d4f9608fcd3c16c"), ObjectId("5a37d7957d4f9608fcd3c16d"), ObjectId("5a37d7957d4f9608fcd3c16e"), ObjectId("5a37d7957d4f9608fcd3c16f"), ObjectId("5a37d7957d4f9608fcd3c170"), ObjectId("5a37d7957d4f9608fcd3c171") ], "extra" : { "QA" : "", "info" : "", "sellerComment" : "TIA线上商店\nhttps://item.taobao.com/item.htm?spm=a230r.7195193.1997079397.8.rqVP2O&id=560781776066&abbucket=16", "afterSalePolicy" : "", "merchantSerialNo" : "MY006" }, "costPrice" : 250.32, "price" : 298, "wholesale" : false, "saleCount" : 0, "stockCount" : 360, "brandInfo" : { "name" : "" }, "pictures" : [ ], "__v" : 1, "auditState" : "pending" }


const buildUpdateBody =  (mapping, sourceObj) => {
  return mapping.reduce((o, map) => {
    const value = objectPath.get(sourceObj, map);
    if (value !== undefined) {
      o[map] = value;
    }
    return o;
  }, {});
}

const updateBody = buildUpdateBody(reviewSyncMapping, martReviewObject);

console.log(updateBody);
