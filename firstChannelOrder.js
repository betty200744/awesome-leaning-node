/**
 * Created by betty on 8/15/17.
 */
"use strict";


const db = require('./db');
var co = require("co");
var R = require("ramda");
const ObjectId = require('mongoose').Types.ObjectId;




function firstChannelOrder() {
  return co.call(this, function *() {

    var beforApril = yield db.order.distinct('buyer',{paid: true,channel: ObjectId("56d66433221cd2cb361c534d"), create: {$lt: new Date('2017-04-01')}});

    var April =  yield db.order.distinct('buyer',{paid: true,channel: ObjectId("56d66433221cd2cb361c534d"), create: {$lt: new Date('2017-05-01'), $gt: new Date('2017-04-01')}});

    var count =  R.intersection(beforApril, April).length;
    console.log(count);
  });
}

function applyReplacement() {
  return co.call(this, function *() {
    var orderId = "5792977cb256c411031e7ba4";
    yield db.order.findByIdAndUpdate(orderId, {
      replacement: {
        description: "ylzhao description",
        images: [],
        state: 'apply'
      },
    }).exec();
  });
}

function selectUserChannel() {
  return co.call(this, function *() {
    var info = yield db.user.findById("56960a27f95a32ad7e2b9719").select('channels').populate('channels', 'code');
    console.log(info.channels);
    var result = R.join('_',R.map(R.prop('code'), info.channels));
    console.log(result);
  });
}

function listGroup() {
  return co.call(this, function *() {
    var group = yield db.group.find({}).lean().exec();
    // group.map(g => {
    //   var p = g.permissions;
    //   p.map( p => g.permissions = p)
    // })
    var str = JSON.stringify(group);
    console.log(str)

  });
}



function listAllPermissions() {
  return co.call(this, function *() {
    var permission = yield db.permission.find({}).lean().exec();
    // group.map(g => {
    //   var p = g.permissions;
    //   p.map( p => g.permissions = p)
    // })
    var str = JSON.stringify(permission);
    console.log(str)
  });
}


function findNoDeviceUser() {
  return co.call(this, function *() {
    var users = yield  db.user.find({'bind.Wechat': {$exists: true} , device: {$exists: false}, admin: {$exists: false}, create: {$gt: new Date('2017-08-01')}})
  });
  
}


db.users.find({'bind.Wechat': {$exists: true} , device: {$exists: false}, admin: {$exists: false}, create: {$gt: new Date('2017-08-01')}}).map( u => print('nickname:' + u.nickname +  ',wechat name' + u.Wechat.name));

// listAllPermissions()
// listGroup();

// firstChannelOrder();

// applyReplacement()
// selectUserChannel();

// var a = {'a': 1, b:2};
// var b = {'a': 1, b:4};
// var obs = [a, b];
// var result = R.none(R.propEq('c', 1))(obs) ;
//
// console.log(result);

// console.log(R.difference([7,6,5,4,3],[1,2,3,4] ).length)

