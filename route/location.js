/*
   File Name: location.js
   Author : Ananth Pandian
   Date: 23/04/2017
*/

var db=require('./db'),
jwt = require('jsonwebtoken'),
db=db.db();

exports.save=function(req,res){
  if(req.body.token){
    var token=req.body.token
    jwt.verify(token, 'ananthpandian', function(err,user){
      if (err) {
        res.send({status:'error',desc:'token required'})
      }
      else{
        var time=new Date().getTime();
        db.location.save({username:user.username,address:req.body.location,time:time},function(err,data){
          res.send({status:'success'})
        })
      }
    });
  }
  else{
    res.send({status:'error',desc:'token required'})
  }
}

exports.get=function(req,res){
  if(req.body.token){
    var token=req.body.token
    jwt.verify(token, 'ananthpandian', function(err,user){
      if (err) {
        res.send({status:'error',desc:'token required'})
      }
      else{
        var time=new Date().getTime();
        db.location.find({username:user.username},function(err,data){
          res.send({status:'success',location:data})
        })
      }
    });
  }
  else{
    res.send({status:'error',desc:'token required'})
  }
}
