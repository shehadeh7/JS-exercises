function calcTip(){
    var tip    = parseFloat(document.getElementById("tip").value);
    var amount = parseFloat(document.getElementById("cash").value);

    return (amount + amount*tip/100);
}