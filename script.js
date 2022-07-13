//Bài 1:
function calcSalary() {
    var salaryPerDay = +document.getElementById("txtSalary").value;
    var workingDays = +document.getElementById("txtWorkingDays").value;
    var totalSalary = salaryPerDay * workingDays;
    var result1 = document.getElementById("result1");
    result1.innerHTML = "Tổng tiền lương 1 tháng là: " + new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalSalary);
}

//Bài 2:
function calcAvg() {
    var num1 = +document.getElementById("txtNum1").value;
    var num2 = +document.getElementById("txtNum2").value;
    var num3 = +document.getElementById("txtNum3").value;
    var num4 = +document.getElementById("txtNum4").value;
    var num5 = +document.getElementById("txtNum5").value;
    var result2 = document.getElementById("result2");
    var totalAvg = (num1 + num2 + num3 + num4 + num5) / 5;
    result2.innerHTML = "Giá trị trung bình của 5 số là: " + totalAvg;
}

//Bài 3:
function exchangeMoney() {
    var amount = document.getElementById("txtAmount").value;
    var result3 = document.getElementById("result3");
    var totalMoney = amount * 23500;
    result3.innerHTML = "Số tiền sau khi quy đổi từ USD sang VND là: " + new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalMoney);
}

//Bài 4:
function calcAreaPeri() {
    var length = +document.getElementById("txtLength").value;
    var width = +document.getElementById("txtWidth").value;
    var result4 = document.getElementById("result4");
    var perimeter = (length + width) * 2;
    var area = length * width;
    result4.innerHTML = "Diện tích: " + area + " - Chu vi: " + perimeter;
}

//Bài 5:
function calcNum() {
    var num = document.getElementById("txtNum").value;
    var result5 = document.getElementById("result5");
    var tensOfNum = Math.floor(num / 10);
    var unitsOfNum = num % 10;
    var totalOfNum = unitsOfNum + tensOfNum;
    result5.innerHTML = "Tổng 2 ký số là: " + totalOfNum;
}