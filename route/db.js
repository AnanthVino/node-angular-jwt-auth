/*
   File Name: db.js
   Author : Ananth Pandian
   Date: 23/04/2017
*/

var mongo=require('mongojs'),
config=require('./config'),
db=mongo('mongodb://'+config.mongo_ip+'/'+config.db_name)

exports.db=function(){
  return db;
}
