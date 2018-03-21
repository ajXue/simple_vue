var express = require("express");
var app = express();
var request = require("request");

app.all('/query',function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  // console.log(req.query.pinpai);
  // console.log(req.query.number);
  let pinpai = req.query.pinpai;
  let number = req.query.number;
  request('http://www.kuaidi100.com/query?type='+pinpai+'&postid='+number+'',function (error, response, body) {
    console.log(body)
    res.send(body)
  })
});

app.listen(8001,function () {
  console.log('wuliu server is running!')
});


