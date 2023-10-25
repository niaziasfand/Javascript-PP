function calculatetip(){

const amount = parseFloat(document.getElementById("amount").value)
const percentage= parseFloat(documnet.getElementById("percentage").value)

const tipamount = amount*(percentage/100);
const totalamount = tipamount+amount;


document.getElementById("tipamount").textContent='$'+tipamount.toFixed(2);
document.getElementById("totalammount").textContent='$'+totalamount.toFixed(2);








}