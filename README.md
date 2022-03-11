# 🏠  __사용자 집 구매 예측 서비스(Home Purchase Prediction)__

 
## ✍  __About the Project__
 + 사용자의 월소득, 월지출, 거주 지역을 입력받아 사용자의 위치 근처의 집 매매 데이터 바탕으로 집구매를 예측한다.
 
 ![home](https://www.choicenews.co.kr/news/photo/202009/74272_43434_2846.png)
 
### 🔍 Languages 
 + JavaScript 
 + HTML
 + CSS
 
### Built with
 + Node.js
 + EJS
 + MySQL
 
###  API
 + [Kakao maps API](https://apis.map.kakao.com/) 



## 🏃 __Getting Started__
+ 💻 로컬에서 동작시키기 

1. 원하는 디렉토리에서 HomePurchaseAgePrediction을 클론합니다. 

        git clone http://khuhub.khu.ac.kr/2020105635/HomePurchaseAgePrediction.git


2. HomePurchaseAgePrediction directory로 이동 후

        cd HomePurchaseAgePrediction
3. 실행을 위한 패키지 모듈을 설치합니다. 

        npm install
4. HomePurchaseAgePrediction/views/kakaomap.ejs 파일에서 kakaomap api key를 API_KEY에 입력합니다.

        appkey='카카오맵에서 발급받은 키를 입력해주세요'
5. 발급받은 도메인을 server.js 파일에서 도메인 주소를 입력합니다.
        
        const domain = "도메인 입력"

6. .env file에서 db 접속을 위한 정보를 입력합니다. 이 때 저장한 데이터는 [주택 실거래가정보](https://www.data.go.kr/data/3050988/fileData.do)를 참고하세요.

         host= 'db 주소'
         user= '사용자 입력'
         password= '비밀번호 입력'
         port= '포트 번호 입력'
         database= 'db 입력'

7. node server.js 실행합니다.

        node server.js

+ 🌐 배포된 웹사이트에서 동작시키기 <br>
 https://2020105619.oss2021.tk:8080/
    
 
## 🚀 __Usage__

<시작 화면>
![image](/uploads/252acb5299d638d0c978f900a161983c/image.png)
(ex. 월소득: 1000 월지출: 25 주소: 부산광역시 사산구 주례동) <br>

***주의 : 주소 입력할 때 정확한 주소를 기입해주세요!(맞춤법, 띄어쓰기 주의)*** <br>

<출력 화면>
![image](/uploads/77b2742c0495cc6577d5e77e69d61da1/image.png)

지도에 구매 가능한 집 위치를 표시해줍니다! 

## :map: __Roadmap__
데이터 분석을 통해 더 정확한 집값 예측을 위해 추후 수정이 필요합니다.

## 🤝 __Contributing__
1. 프로젝트 fork
2. 기능 분기 만들기 (git chekcout -b feature/featureName)
3. 변경 사항 커밋 (git commmit -m "Add feature~")
4. 푸시 (git push origin feature/featureName)
5. pull request


## 📝 __License__
[Distributed under the MIT License](http://khuhub.khu.ac.kr/2020105635/HomePurchaseAgePrediction/blob/master/License)


## 👤 __Contact__

+ 김민기(2020103711)
    + E-mail : khu2020@khu.ac.kr

+ 서연진(2020105619)
    + E-mail : duswls214@khu.ac.kr

+ 오지민(2020105635)
    + E-mail : ogm0205@khu.ac.kr

