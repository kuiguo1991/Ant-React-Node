const express = require('express');
const app = express();

const WebsitesTVRouter= require('./routers/index');
const bodyParser = require("body-parser");


app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header('Content-Type', 'application/json; charset=utf-8');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200); 
    }
    else {
      next();
    }
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", WebsitesTVRouter);
app.listen(6551, () => {
    console.log("正在监听端口6551,http://localhost:6551/api"); //192.168.1.114换成你的ip,本机ip查询用cmd=>ipconfig
})