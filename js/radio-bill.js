var radioBtn = document.querySelector(".billItemTypeRadio")
var radioAddBtn = document.querySelector(".radioBillAddBtn")
var callTotalTwoElem = document.querySelector(".callTotalTwo");
var smsTotalTwoElem = document.querySelector(".smsTotalTwo");
var totalTwoElem = document.querySelector(".totalTwo");

let billR = radiobuttonbill();
function radioBill() {
    
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        billR.radioBill(checkedRadioBtn.value);
    }
    
    callTotalTwoElem.innerHTML = billR.callTotal().toFixed(2);
    smsTotalTwoElem.innerHTML = billR.smsTotal().toFixed(2);
   totalTwoElem.innerHTML = 'R' + billR.Total().toFixed(2);

    totalTwoElem.classList.remove("warning");
    totalTwoElem.classList.remove("danger");
    totalTwoElem.classList.add(billR.colours());

}
radioAddBtn.addEventListener("click", radioBill);