
/*
   File Name: user.js
   Author : Ananth Pandian
   Date: 23/04/2017
*/

var db=require('./db'),
jwt = require('jsonwebtoken'),
db=db.db();

//Register new User
exports.register=function(req,res){
  var user=req.body;
  db.user.findOne({username:user.username},function(err,data){
    if(data)
    {
      res.send({status:'exist'})
    }
    else{
      db.user.save(user,function(error,save){
        if(!error){
          var token = jwt.sign(user, 'ananthpandian');
          req.session.usertoken=token;
          console.log(req.session.usertoken)
          res.send({status:'success',token:token})
        }
        else{
          res.send({status:'error'})
        }
      })
    }
  })
}

//User Login
exports.login=function(req,res){
  var user=req.body;
  db.user.findOne({username:user.username},function(err,data){
    if(data){
      var token = jwt.sign(data, 'ananthpandian');
      req.session.usertoken=token;
      res.send({status:'success',token:token})
    }
    else{
      res.send({status:'error'})
    }
  })
}

//user logout
exports.logout=function(req,res)
{
  req.session.destroy(function(err,data){
    res.redirect('/')
  })
}
