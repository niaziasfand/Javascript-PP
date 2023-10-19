function calculatetotalamount(){

const principle = parseFloat(document.getElementById('principle').value)
const interestrate = parseFloat(document.getElementById('interestrate').value)
const tenure= parseFloat(document.getElementById('tenure').value)


const totalamount =(principle*interestrate*tenure)/100;

document.getElementById('result').innerText=`Total Amount: $ ${totalamount.toFixed(2)}`;


}

document.getElementById('button').addEventListener('click',calculatetotalamount);
  