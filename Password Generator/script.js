/*id password
id generate
id length
id lowercase
id uppercase
id numebers
id symbols
*/

const lowercase="abcdefghijklmnopqrstuvwxyz"
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers=" 0123456789"
const symbols="!@#$%^&*()_+?:{]}][()/~`"
const lengthelement=document.getElementById('length');
const lowercaseelement=document.getElementById('lowercase');
const uppercaseelement=document.getElementById('uppercase');
const numberselement=document.getElementById('numbers');
const symbolelement=document.getElementById('symbols');
const Generatebtn=document.getElementById('Generate');
const passwordelement=document.getElementById('password');

Generatebtn.addEventListener('click', function(){
    const length=lengthelement.value;
    let characters='';
    let password='';

    if (lowercaseelement.checked){
        characters+=lowercase
    }
    if (uppercaseelement.checked){
        characters+=uppercase
    }
    if (numberselement.checked){
        characters+=numbers
    }
    if (symbolelement.checked){
        characters+=symbols
    }
    for (let i=0; i<length; i++){
        password+=characters.charAt(Math.floor(Math.random()*characters.length))
    }
    passwordelement.value=password;

});

