var calculateBtn = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal")
var billStringField = document.querySelector(".billString");

var billStringElement = document.querySelector(".billString");
function totalPhoneBill(billString){

var billItems = billString.split(",");
var billTotal = 0;
for (var i=0;i<billItems.length;i++){
    var billItem = billItems[i].trim();
    if (billItem === "call"){
        billTotal += 2.75;
    }
    else if (billItem === "sms"){
        billTotal += 0.75;
    }
}
var roundedBillTotal = billTotal.toFixed(2);
return roundedBillTotal;
}
function calculateBtnClicked(){
  
    var billString = billStringField.value;
    var roundedBillTotal = totalPhoneBill(billString);
    var currentTotal = Number(roundedBillTotal);

    billTotalElement.classList.remove("warning")
    billTotalElement.classList.remove("danger")
    if (currentTotal >= 30) {
        billTotalElement.classList.add("danger")
    } else if (currentTotal >= 20 && currentTotal < 30){
        billTotalElement.classList.add("warning")
    }
    billTotalElement.innerHTML = 'R' + roundedBillTotal;
}
calculateBtn.addEventListener("click", calculateBtnClicked)

