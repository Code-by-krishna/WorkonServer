
let number = 4;
        
//find a number is posi nagi or zero.

if (number == 0) {
    console.log("Zero");
} else if (number > 0) {
    console.log("Positive number");
} else {
    console.log("Negative number");
}

switch(true){
    case number == 0:
        console.log("Zero");
        break;
    case number > 0:
        console.log("Positive number");
        break;
    case number < 0:
        console.log("Negative number");
        break;
    default:
        console.log("Invalid Input");
}






//find a number is Even or Odd.

switch(true) {
    case number%2==0:
        console.log("Even number");
        break;
    case number%2!=0:
        console.log("Odd number");
        break;
    default:
      console.log("Invalid input");
}


//using ternary operator.

(number%2==0)?console.log('Even Number'):console.log('Odd Number');





//Find a number is prime or not.
let j;
for(j=2;j<number;j++){
    if(number%j==0) {
        console.log("Number is not a prime number");
        break;
    }
}
if(j==number) {
    console.log("Number is a prime number");
}


let i;
let flag = 1;
for(i=2;i<=number/2;i++){
    if(number%i==0) {
        flag = 0;
        console.log("Number is not a prime number");
        break;
    }
}
if(flag) {
    console.log("Number is a prime number");
}






//Enter a month to find day's.

if(number==1||number==3||number==5||number==7||number==8||number==10||number==12) {
    console.log("31 Days");
}
else if(number==2) {
    console.log("28/29 Days");
}
else {
    console.log("30 Days");
}



//using try catch block for error handling.
try {
    if (number == 0) {
        console.log("Zero");
    } else if (number > 0) {
        console.log("Positive number");
    } else {
        console.log("Negative number");
    }
} catch (error) {
    console.log(error);
    
}


//iterate Array with for-in and for-of loop.
const Name = ["Amit","Mohit","Mahak","Kiran","Swati"];

for(let x in Name) {
    console.log(x);
}

for(let x of Name) {
    console.log(x);
}





// Day 5 Functions and closure in js.

function Outer() {
    let x = 10;
    function inner() {
        console.log(x);
    }
    inner();
}
Outer();

function Outer() {
    let x = 10;
    return function inner() {
        console.log(x);
    }
}
const result2  = Outer();
result2();


function Outer() {
    let x = 10;
    function inner() {
      return  x;
    }
    return inner;
}
const result3  = Outer();
console.log(result3())



// creating a function with function keyword.

function Sum(a,b) {
    console.log("This is a function");
    let c = a + b;
    return c;
}
const result4 = Sum(5,7);
console.log(result4);


//Using of Rest Operator.

function Sum(a,b,...data) {
    console.log(a + b);
    return data;
}
const result = Sum(5,7,8,9,3,5,8);
console.log(result);


//Using spread operator.

const array  = [2,5,8,5,1,8];

function Spread(...data) {
    console.log(data);
    data.forEach((res) => console.log(res));
    
}
Spread(...array);



//using of argument.

function Sum(argument) {
    console.log(argument);
}
Sum([5,7,8,9,3,5,8]);


// Arrow function.

const fun = () => {
    console.log("This is an arrow functon");   
}
fun();


//IIFE functions.

(function() {
    console.log("This is IIFE function");
})();





































