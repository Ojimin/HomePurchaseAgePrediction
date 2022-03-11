function jbSubmit() {
  var salary = Number(document.getElementById("salary").value);
  var expenditure = Number(document.getElementById("expenditure").value);
  if (salary == "" || expenditure == "") {
    alert("값을 입력하세요!");
    return false;
  } else if (isNaN(salary) || isNaN(expenditure)) {
    alert("숫자를 입력하세요!");
    return false;
  } else {
    return true;
  }
}
