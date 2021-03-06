# ๐   __์ฌ์ฉ์ ์ง ๊ตฌ๋งค ์์ธก ์๋น์ค(Home Purchase Prediction)__

 
## โ  __About the Project__
 + ์ฌ์ฉ์์ ์์๋, ์์ง์ถ, ๊ฑฐ์ฃผ ์ง์ญ์ ์๋ ฅ๋ฐ์ ์ฌ์ฉ์์ ์์น ๊ทผ์ฒ์ ์ง ๋งค๋งค ๋ฐ์ดํฐ ๋ฐํ์ผ๋ก ์ง๊ตฌ๋งค๋ฅผ ์์ธกํ๋ค.
 
 ![home](https://www.choicenews.co.kr/news/photo/202009/74272_43434_2846.png)
 
### ๐ Languages 
 + JavaScript 
 + HTML
 + CSS
 
### Built with
 + Node.js
 + EJS
 + MySQL
 
###  API
 + [Kakao maps API](https://apis.map.kakao.com/) 



## ๐ __Getting Started__
+ ๐ป ๋ก์ปฌ์์ ๋์์ํค๊ธฐ 

1. ์ํ๋ ๋๋ ํ ๋ฆฌ์์ HomePurchaseAgePrediction์ ํด๋ก ํฉ๋๋ค. 

        git clone http://khuhub.khu.ac.kr/2020105635/HomePurchaseAgePrediction.git


2. HomePurchaseAgePrediction directory๋ก ์ด๋ ํ

        cd HomePurchaseAgePrediction
3. ์คํ์ ์ํ ํจํค์ง ๋ชจ๋์ ์ค์นํฉ๋๋ค. 

        npm install
4. HomePurchaseAgePrediction/views/kakaomap.ejs ํ์ผ์์ kakaomap api key๋ฅผ API_KEY์ ์๋ ฅํฉ๋๋ค.

        appkey='์นด์นด์ค๋งต์์ ๋ฐ๊ธ๋ฐ์ ํค๋ฅผ ์๋ ฅํด์ฃผ์ธ์'
5. ๋ฐ๊ธ๋ฐ์ ๋๋ฉ์ธ์ server.js ํ์ผ์์ ๋๋ฉ์ธ ์ฃผ์๋ฅผ ์๋ ฅํฉ๋๋ค.
        
        const domain = "๋๋ฉ์ธ ์๋ ฅ"

6. .env file์์ db ์ ์์ ์ํ ์ ๋ณด๋ฅผ ์๋ ฅํฉ๋๋ค. ์ด ๋ ์ ์ฅํ ๋ฐ์ดํฐ๋ [์ฃผํ ์ค๊ฑฐ๋๊ฐ์ ๋ณด](https://www.data.go.kr/data/3050988/fileData.do)๋ฅผ ์ฐธ๊ณ ํ์ธ์.

         host= 'db ์ฃผ์'
         user= '์ฌ์ฉ์ ์๋ ฅ'
         password= '๋น๋ฐ๋ฒํธ ์๋ ฅ'
         port= 'ํฌํธ ๋ฒํธ ์๋ ฅ'
         database= 'db ์๋ ฅ'

7. node server.js ์คํํฉ๋๋ค.

        node server.js

+ ๐ ๋ฐฐํฌ๋ ์น์ฌ์ดํธ์์ ๋์์ํค๊ธฐ <br>
 https://2020105619.oss2021.tk:8080/
    
 
## ๐ __Usage__

<์์ ํ๋ฉด>
![image](/uploads/252acb5299d638d0c978f900a161983c/image.png)
(ex. ์์๋: 1000 ์์ง์ถ: 25 ์ฃผ์: ๋ถ์ฐ๊ด์ญ์ ์ฌ์ฐ๊ตฌ ์ฃผ๋ก๋) <br>

***์ฃผ์ : ์ฃผ์ ์๋ ฅํ  ๋ ์ ํํ ์ฃผ์๋ฅผ ๊ธฐ์ํด์ฃผ์ธ์!(๋ง์ถค๋ฒ, ๋์ด์ฐ๊ธฐ ์ฃผ์)*** <br>

<์ถ๋ ฅ ํ๋ฉด>
![image](/uploads/77b2742c0495cc6577d5e77e69d61da1/image.png)

์ง๋์ ๊ตฌ๋งค ๊ฐ๋ฅํ ์ง ์์น๋ฅผ ํ์ํด์ค๋๋ค! 

## :map: __Roadmap__
๋ฐ์ดํฐ ๋ถ์์ ํตํด ๋ ์ ํํ ์ง๊ฐ ์์ธก์ ์ํด ์ถํ ์์ ์ด ํ์ํฉ๋๋ค.

## ๐ค __Contributing__
1. ํ๋ก์ ํธ fork
2. ๊ธฐ๋ฅ ๋ถ๊ธฐ ๋ง๋ค๊ธฐ (git chekcout -b feature/featureName)
3. ๋ณ๊ฒฝ ์ฌํญ ์ปค๋ฐ (git commmit -m "Add feature~")
4. ํธ์ (git push origin feature/featureName)
5. pull request


## ๐ __License__
[Distributed under the MIT License](http://khuhub.khu.ac.kr/2020105635/HomePurchaseAgePrediction/blob/master/License)


## ๐ค __Contact__

+ ๊น๋ฏผ๊ธฐ(2020103711)
    + E-mail : khu2020@khu.ac.kr

+ ์์ฐ์ง(2020105619)
    + E-mail : duswls214@khu.ac.kr

+ ์ค์ง๋ฏผ(2020105635)
    + E-mail : ogm0205@khu.ac.kr

