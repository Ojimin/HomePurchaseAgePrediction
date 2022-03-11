const express = require("express");
const fs = require("fs");
const path = require("path");
const HTTPS = require("https");
const mysql = require('mysql');

var address;
var json_data = [];

const app = express();
const domain = "2020105619.oss2021.tk"; //사용할 때 도메인을 수정해주세요!
const sslport = 8080;

const dotenv = require('dotenv').config();   //dotenv를 사용하기 위해서 dotenv 라이브러리를 불러온 뒤, config() 메소드를 호출
const mysqlConObj = require('./config/mysql');   //config의 mysql파일을 가져와 mysqlConnection 객체 사용
const db = mysqlConObj.init();

app.use(express.static(path.join(__dirname, "kakao")));
app.use(express.static(path.join(__dirname, "public")));

mysqlConObj.open(db);   //db 연결

db.query('SELECT * FROM csvdata.csvdata', function (error, results, fields) {
  if (error) {
    throw (error);
  }
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/main.html"));
});

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/geolocation", function (req, res) {
  address = req.query.address;
  db.query('SELECT * FROM csvdata.csvdata', function (error, results, fields) {
    if (error) {
      throw (error);
    }
    json_data = [];
    for (var i = 0; i < results.length; i++) {
      if (results[i].city_country == address) {
        json_data.push(results[i]);
      }
    }
    res.render('kakaomap', { 'data': json_data })
  });
});


try {
  const option = {
    ca: fs.readFileSync("/etc/letsencrypt/live/" + domain + "/fullchain.pem"),
    key: fs
      .readFileSync(
        path.resolve(
          process.cwd(),
          "/etc/letsencrypt/live/" + domain + "/privkey.pem"
        ),
        "utf8"
      )
      .toString(),
    cert: fs
      .readFileSync(
        path.resolve(
          process.cwd(),
          "/etc/letsencrypt/live/" + domain + "/cert.pem"
        ),
        "utf8"
      )
      .toString(),
  };

  HTTPS.createServer(option, app).listen(sslport, () => {
    console.log(`[HTTPS] Server is started on port ${sslport}`);
  });
} catch (error) {
  console.log(
    "[HTTPS] HTTPS 오류가 발생하였습니다. HTTPS 서버는 실행되지 않습니다."
  );
  console.log(error);
}
