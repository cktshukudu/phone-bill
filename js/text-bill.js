var billTypeTextElem = document.querySelector(".billTypeText");
var AddToBillBtnElem = document.querySelector(".addToBillBtn");
var callTotalOneElem = document.querySelector(".callTotalOne"); 
var smsTotalOneElem = document.querySelector(".smsTotalOne");
var totalOneElem = document.querySelector(".totalOne");

let bills = textInputBill();
function textBillTotal(){

    bills.setBill(billTypeTextElem.value.trim());
    
    callTotalOneElem.innerHTML = bills.callTotal().toFixed(2);
    smsTotalOneElem.innerHTML = bills.smsTotal().toFixed(2);
    totalOneElem.innerHTML = 'R' + bills.overallTotal().toFixed(2);
        
    totalOneElem.classList.remove("warning");
    totalOneElem.classList.remove("danger");
    totalOneElem.classList.add(bills.colours());
      
}  
AddToBillBtnElem.addEventListener("click", textBillTotal);