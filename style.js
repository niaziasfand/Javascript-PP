//variables
let firstname='asfand';
let lastname= 'khan';
let age=a;
let a=30;
let b=a-10;
let c =b;
console.log(c);


let name='arsaln';
occupation='teacher';
live='islamabad';
console.log('name',occupation,live)


const gravity= 9.81;
const pi= 3.14;
const boilingpoint=100;
const meltingpoint=0;
console.log(gravity,pi,boilingpoint,meltingpoint);

//primitive data types( variables, strings,booleans,null,undefined, bignit,symbol and object)
//non-primitive datatypes/object datatypes(an object, an array, a date)
    


// Numbers:
let length = 16;
let bredth = 7.5;

let area = length*bredth;
console.log(area)

// Strings:

let firstName = "asfand";
let lastName = "ali";
let space= ' ';
//string concatination (joining two or more strings)
let fullname= firstName+space+lastName;
console.log(fullname);

const paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus cumque, odio voluptas dolorum aspernatur reprehenderit nulla exercitationem doloribus illo a nihil deserunt ratione asperiores ullam quam et necessitatibus aut architecto."
console.log(paragraph)

\n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (")

console.log('hello \n there')
console.log(day 1\t3)

console.log('sum of 2 and 4 is 6')
let f=2
let g=4
console.log('sum of ${f} and ${g} is ${f+g}')

let FirstName = 'asfand'
let LastName ='khan'
let country ='pakistan'
let city = 'islamabad'
let language = 'javascript'
let job = 'berozgar'
let Age = '20'
let fullName = FirstName + ' ' + lastName
let personinfoone= 'I am ${Fullname}. I am ${Age} old. I live in ${country,city}'

let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personinfoone)
console.log(personInfoThree)



// Booleans
let x = true;
let y = false;
let userone={name:'asfand',age:'20',country:'pakistan'}
let usertwo={name:"ali",age:'20', country:"pakistan"}
console.log(userone==usertwo) false
// Object:
const person = {firstName:"Asfand", lastName:"Ali"};

// Array object:
const cars = ["Suzuki", "audi", "BMW"];

// Date object:
const date = new Date("2023-10-02");

//non primitive 
let numbers =[1,3,2];
numbers[1]=10;
console.log(numbers) will print 3


//maths object

const PI =Math.PI
console.log(Math.round(PI))                // 3 to round values to the nearest number

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // 3 rounding down

console.log(Math.ceil(PI))                 // 4 rounding up
console.log(Math.sqrt(100)) //10

//conditionals
let a = 0
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}


//switch
let a =45;
        let b=50;
switch(casevalue)
{
    case 1:
        
        if (a>b)
        {
            console.log('a is greater than b')

        }
        
        case 2:
            let a =5;
            let b=50;
            if (a>b)
            {
                console.log('a is greater than b')
    
            }
           
            case 3:
            
                if (a>=b)
                {
                    console.log('a is equal to b')
                }
                
            
}


let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}      


let userinputday=prompt('what is today')
let day= userinputday.toUpperCase()
switch(day){
case 'monday':console.log('today is monday')
break
case 'tuesday': console.log('today is tuesday')
break
case 'wednesday': console.log('today is wednesday')
break
case 'thursday': console.log('today is thursday')
break
case 'friday': console.log('today is friday')
break
case 'saturdayday': console.log('today is saturday')
break
case 'sunday': console.log('today is sunday')
break
case 'holidayday': console.log('today is holiday')
break
default:
    console.log('it is dryday')

}

let userinputage=prompt('enter your age');
let age = userinputage;
if(age>=18){
    console.log('you ar old enough to drive')
}
else{
    const waitingyear=18-age;
    console.log("wait for" ,waitingyear, "years to drive")
}


//array 


const numbers=[0,12,12,13,14,14,15,18,15,17,15,156,1231,215,12,4512,151,251,15,12,]
const countries=['pakitan', 'germany', 'australia']
const technologies=['html','css','javascript', 'bootstrap','react','nodejs','mogodb/mysql','express js','mern']

console.log('total numbers:', numbers)
console.log('total numbers length', numbers.length)

console.log('total countries:', countries)
console.log('total countries length',countries.lenght)

console.log('number of technologies to learn ', technologies)
console.log('total numbers of technologoes',technologies.length)



const arr=['pakitan', 'germany', 'australia']
console.log(arr)

 let js='javascript';
 const charsinjavascript=js.split('')
 console.log(charsinjavascript)

 const fruits = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits[0] // we are accessing the first item using its index

console.log(firstFruit) // banana

secondFruit = fruits[1]
console.log(secondFruit) // orange

let lastFruit = fruits[3]
console.log(lastFruit) // lemon
// Last index can be calculated as follows

let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]

console.log(lastFruit)  // lemon


const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ] // List of countries
  
  console.log(countries)      // -> all countries in array
  console.log(countries[0])   //  -> Albania
  console.log(countries[10])  //  -> Kenya
  
  let lastIndex = countries.length - 1;
  console.log(countries[lastIndex]) //  -> Kenya


  //concatination
  const first =[1,2,3,4]
  const sec =[5,6,7,8]
  console.log(first.concat(sec))

  //array to string

  const number=[1,2,3]
  console.log(numbers.toString())
  const names=['asfand', 'ali', 'khan']
  console.log(names.toString())
  
  console.log(names.join())
  console.log(names.join(''))
  console.log(names.join(""))
  console.log(names.join(,))
  names.reverse()
console.log(names.reverse())


const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0]) // [1, 2, 3]

 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
 console.log(fullStack.length)  // 2
 console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
 console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]

// loops


for(let i=0; i<=5;i++)
{console.log(i)}

for(let i=10; i>=0;i--)
{console.log(i)}

for(let i = 0; i <= 5; i++){
    console.log(${i} * ${i} = ${i * i})
  }
  0 * 0 = 0
1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 16
5 * 5 = 25

const countries=['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newarr=[]
for(let i=0; i<numbers.length; i++){


    newarr.push(countries[i].toUpperCase())
}
for(let i = 0; i <= 5; i++){
    if(i == 3){
      break
    }
    console.log(i)
  }
  
  // 0 1 2
  for(let i = 0; i <= 5; i++){
    if(i == 3){
      continue
    }
    console.log(i)
  }
  
  // 0 1 2 4 5

const numberr=[0,2,3,4,5,6]
const newarrr=[]
sum=0
for(i=0; i<=numberr.length;i++)
{
  newarrr.push(numberr[i]**5)
}
console.log(newarrr)



const arr1=[ali,ali,ali,ali,ali,ali,ali]
const arr2=[]
sum=0
for(i=0; i<=arr1.length; i++){
  arr2.push(arr1[i].toUpperCase())


}
console.log(arr2)

//while


let i=10
while(i<=0)
{
  console,log(i)
  i--

}



//do while
let i=0;
do{console,log(i)
i++}
while(i<=5)






  ///functions




  // function with one parameter
function functionName(parm1) {
    //code goes her
  }
  functionName(parm1) // during calling or invoking one argument needed
  
  function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
  }
  
  console.log(areaOfCircle(10)) // should be called with one argument
  
  function square(number) {
    return number * number
  }
  
  console.log(square(10))





  // function with two parameters
function functionName(parm1, parm2) {
    //code goes her
  }
  functionName(parm1, parm2) // during calling or invoking two arguments needed
  // Function without parameter doesn't take input, so lets make a function with parameters
  function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    console.log(sum)
  }
  sumTwoNumbers(10, 20) // calling functions
  // If a function doesn't return it doesn't store data, so it should return
  
  function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
  }
  
  console.log(sumTwoNumbers(10, 20))
  function printFullName(firstName, lastName) {
    return ${firstName} ${lastName}
  }
  console.log(printFullName('Asabeneh', 'Yetayeh')




  //functions


console.log(sumTwoNumbers(10, 20))
function printFullName(firstName, lastName) {
  return `${firstName} ${lastName}`
}
console.log(printFullName('Asabeneh', 'Yetayeh'))




















  //objects



  


