const mysql = require('mysql'); // mysql 드라이버 불러오기 

const mysqlConnection = {
    init: function() {              //DB와 연결하는 객체 생성
        return mysql.createConnection({
            host: process.env.host,
            user: process.env.user,
            password: process.env.password,
            port:process.env.port,
            database:process.env.database 
        });
    },
    open: function(con) {       //생성된 객체를 DB와 연결
        con.connect(err => {
            if(err){
                console.log("MySQL 연결 실패 : ",err);
            }
        });
    },
    close: function(con){       //DB와 연결을 종료
        con.end(err => {
            if(err){
                console.log("MySQL 종료 실패 : ", err);
            } else {
                console.log("MySQL Terminated...");
            }
        })
    }
}

module.exports = mysqlConnection;   //생성한 mysqlConnection 객체를 모듈화하여 외부 파일에서 불러와 사용할 수 있도록 export함