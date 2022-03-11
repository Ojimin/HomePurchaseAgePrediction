var jsonData = document.getElementById('jsonData').value;
var myJsonData = JSON.parse(jsonData);

myJsonData.sort(function (a, b) {
  return a.amount - b.amount;
})

newdata = []
for (i = 0; i < 5; i++) {
  newdata.push(myJsonData[i]);
}

priceList = [];
for (var i = 0; i < 5; i++) {
  priceList.push(newdata[i].amount);
}

var Container = document.getElementById("map");
var Option = {
  center: new kakao.maps.LatLng(33.450701, 126.570667),
  level: 5,
};

var map = new kakao.maps.Map(Container, Option);
resizeMap();
relayout();

function resizeMap() {
  var Container = document.getElementById("map");
  Container.style.width = "400px";
  Container.style.height = "300px";
}

function relayout() {
  map.relayout();
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    var latitude = position.coords.latitude,
      longitude = position.coords.longitude;
    var Position = new kakao.maps.LatLng(latitude, longitude);
    displayMarker(Position);
  });
}

// 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다 
var positions = []
for (var i = 0; i < 5; i++) {
  positions.push(newdata[i]);
}

// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();

for (var i = 0; i < positions.length; i++) {
  // 주소로 좌표를 검색합니다
  geocoder.addressSearch(positions[i].add_adress, function (result, status) {
    // 정상적으로 검색이 완료됐으면 
    if (status === kakao.maps.services.Status.OK) {
      var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
      // 결과값으로 받은 위치를 마커로 표시합니다
      var marker = new kakao.maps.Marker({
        map: map,
        position: coords
      });
      // 마커에 표시할 인포윈도우를 생성합니다 
      var infowindow = new kakao.maps.InfoWindow({
        content: `<div style="width:150px;text-align:center;padding:6px 0;">${result[0].address.address_name + " " + result[0].road_address.building_name}</div>`
        // String(priceList[i]) // 인포윈도우에 표시할 내용
      });

      // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
      // 이벤트 리스너로는 클로저를 만들어 등록합니다 
      // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
      kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
      kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
    }
  });
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
function makeOverListener(map, marker, infowindow) {
  return function () {
    infowindow.open(map, marker);
  };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
  return function () {
    infowindow.close();
  };
}


function displayMarker(Position) {
  var marker = new kakao.maps.Marker({
    map: map,
    position: Position,
  });

  map.setCenter(Position);
}

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

//가격리스트로 year계산
function yearCalc() {
  var sum = 0;
  for (var i = 0; i < priceList.length; i++) {
    sum = sum + priceList[i];
  }
  var meanPrice = sum / priceList.length;
  var saveInyear = (Number(salary) - Number(expenditure)) * 12;
  return Math.ceil(meanPrice / saveInyear);
}

//다음 페이지에서 입력값 받아오기
var salary = getParameterByName("salary");
var expenditure = getParameterByName("expenditure");
var year = yearCalc();
var div = document.getElementById("info");


//20년을 초과한 결과값이 나올 때 20 + α 로 표시합니다.
if (year > 20) {
  year = "20 + α ";
}
div.innerText = `${salary}만원의 월급과 ${expenditure}만원의 지출을 유지하면 당신은 ${year}년 후 아래의 집을 구매할 수 있습니다.`;

//주소 받아오기
dataFromServer = [];
for (var i = 0; i < 5; i++) {
  dataFromServer.push("주소: " + newdata[i].add_adress + ", 가격: " + newdata[i].amount + "만원, 면적: " + newdata[i].dedicated_area);
}

//next page li 요소 추가
for (var i = 0; i < dataFromServer.length; i++) {
  const li = document.createElement("li");
  const textNode = document.createTextNode(dataFromServer[i]);
  li.appendChild(textNode);
  document.getElementById("house_list").appendChild(li);
}
