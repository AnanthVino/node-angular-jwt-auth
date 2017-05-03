/*
   File Name:server.js
   Author : Ananth Pandian
   Date: 23/04/2017
*/

var express=require('express'),
app=express(),
http=require('http'),
user=require('./route/user.js'),
location=require('./route/location.js'),
bodyParser = require('body-parser'),
session = require('express-session'),
server=http.createServer(app);

app.use(express.static(__dirname+'/public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({secret: 'ssshhhhh'}));

// Rest API Enables

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Check user session

function userSession(req, res, next) {
  // console.log(req.session.token)
  if (req.session.usertoken) {
    next();
  } else {
    res.redirect('/');
  }
}

app.get('/',function(req,res){
  res.sendfile('views/login.html')
})

app.get('/home',function(req,res){
  // console.log(req.session)
  if(req.session.usertoken){
    res.sendfile('views/home.html');
  }else {
    res.redirect('/');
  }
})

app.post('/user_register',user.register)
app.post('/user_login',user.login)
app.get('/user_logout',user.logout)
app.post('/save_location',location.save)
app.post('/get_location',location.get)

server.listen(8080)
