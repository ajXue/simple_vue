var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('*',function(req,res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method == 'OPTIONS') {
    res.send(200); /让options请求快速返回/
  }
  else {
    next();
  }
});

app.all('/query',function (req, res) {
  var pinpai = req.query.pinpai;
  var number = req.query.number;
  request('http://www.kuaidi100.com/query?type='+pinpai+'&postid='+number+'',function (error, response, body) {
    console.log(body);
    res.send(body)
  })
});
app.all('/login', function (req, res, next) {
  console.log(req.body.username)
  console.log(req.body.password)
  if (req.body.username == "xuerenwei" && req.body.password == "123456" ) {
    res.json({"code": "ok"})
  } else {
    res.json({"code": "error"})
  }
});

app.listen(8001,function () {
  console.log('wuliu server is running at port:80001!');
});


