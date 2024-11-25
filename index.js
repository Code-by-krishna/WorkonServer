
// let number = 4;
        
// //find a number is posi nagi or zero.

// if (number == 0) {
//     console.log("Zero");
// } else if (number > 0) {
//     console.log("Positive number");
// } else {
//     console.log("Negative number");
// }

// switch(true){
//     case number == 0:
//         console.log("Zero");
//         break;
//     case number > 0:
//         console.log("Positive number");
//         break;
//     case number < 0:
//         console.log("Negative number");
//         break;
//     default:
//         console.log("Invalid Input");
// }






// //find a number is Even or Odd.

// switch(true) {
//     case number%2==0:
//         console.log("Even number");
//         break;
//     case number%2!=0:
//         console.log("Odd number");
//         break;
//     default:
//       console.log("Invalid input");
// }


// //using ternary operator.

// (number%2==0)?console.log('Even Number'):console.log('Odd Number');





// //Find a number is prime or not.
// let j;
// for(j=2;j<number;j++){
//     if(number%j==0) {
//         console.log("Number is not a prime number");
//         break;
//     }
// }
// if(j==number) {
//     console.log("Number is a prime number");
// }


// let i;
// let flag = 1;
// for(i=2;i<=number/2;i++){
//     if(number%i==0) {
//         flag = 0;
//         console.log("Number is not a prime number");
//         break;
//     }
// }
// if(flag) {
//     console.log("Number is a prime number");
// }






// //Enter a month to find day's.

// if(number==1||number==3||number==5||number==7||number==8||number==10||number==12) {
//     console.log("31 Days");
// }
// else if(number==2) {
//     console.log("28/29 Days");
// }
// else {
//     console.log("30 Days");
// }



// //using try catch block for error handling.
// try {
//     if (number == 0) {
//         console.log("Zero");
//     } else if (number > 0) {
//         console.log("Positive number");
//     } else {
//         console.log("Negative number");
//     }
// } catch (error) {
//     console.log(error);
    
// }


// //iterate Array with for-in and for-of loop.
// const Name = ["Amit","Mohit","Mahak","Kiran","Swati"];

// for(let x in Name) {
//     console.log(x);
// }

// for(let x of Name) {
//     console.log(x);
// }





// // Day 5 Functions and closure in js.

// function Outer() {
//     let x = 10;
//     function inner() {
//         console.log(x);
//     }
//     inner();
// }
// Outer();

// function Outer() {
//     let x = 10;
//     return function inner() {
//         console.log(x);
//     }
// }
// const result2  = Outer();
// result2();


// function Outer() {
//     let x = 10;
//     function inner() {
//       return  x;
//     }
//     return inner;
// }
// const result3  = Outer();
// console.log(result3())



// // creating a function with function keyword.

// function Sum(a,b) {
//     console.log("This is a function");
//     let c = a + b;
//     return c;
// }
// const result4 = Sum(5,7);
// console.log(result4);


// //Using of Rest Operator.

// function Sum(a,b,...data) {
//     console.log(a + b);
//     return data;
// }
// const result = Sum(5,7,8,9,3,5,8);
// console.log(result);


// //Using spread operator.

// const array  = [2,5,8,5,1,8];

// function Spread(...data) {
//     console.log(data);
//     data.forEach((res) => console.log(res));
    
// }
// Spread(...array);



// //using of argument.

// function Sum(argument) {
//     console.log(argument);
// }
// Sum([5,7,8,9,3,5,8]);


// // Arrow function.

// const fun = () => {
//     console.log("This is an arrow functon");   
// }
// fun();


// //IIFE functions.

// (function() {
//     console.log("This is IIFE function");
// })();







// function outer() {
  
//    const b = 50;
   
//    function inner() {
//      const a = 100; 
//      console.log(`a is ${a} and b is ${b}, the sum is ${a+b}`);
//    }
//    return inner;
// }
// const fnFirst = outer();
// const fnSecond = outer();

// fnFirst();
// fnSecond();









// //Array examples ans its methods.

const arr = [1,2,8,4,3];

// //array .length method.
// console.log(arr.length);

// //use simple for loop for array iteration.
// number = "";
// for(let i=0;i<arr.length;i++) {
//    number += arr[i] + " ";
// }
// console.log(number);



// number = [];
// for(let i=0;i<arr.length;i++) {
//    number.push(arr[i]);
// }
// console.log(number);


// // Add or remove element from array.

// const Arraypop = arr.pop();
// console.log(Arraypop,arr);


// const Arraypush = arr.push(10);
// console.log(Arraypush,arr);


// const Arrayshift = arr.shift();
// console.log(Arrayshift,arr);

// const Arrayunshift = arr.unshift(10);
// console.log(Arrayunshift,arr);


// //Array join() method.

// const Arrayjoin = arr.join(" & ");
// console.log(Arrayjoin);

// //Array split() method.
// const arrString = arr.join("-");
// const Arraysplit = arrString.split("-"); 
// console.log(Arraysplit); 


// //Array splice() method.
// const Arraysplice = arr.splice(2,1,7,10);
// console.log(arr,Arraysplice);

// const Arraysplice = arr.splice(2,0,7,10);
// console.log(arr,Arraysplice);

// const Arraysplice = arr.splice(2);
// console.log(arr,Arraysplice);

// const Arraysplice = arr.splice(-2,1);
// console.log(arr,Arraysplice);


// //Array slice() method.

// const Arrayslice = arr.slice(1,4);
// console.log(arr,Arrayslice);

// const Arrayslice = arr.slice(1);
// console.log(arr,Arrayslice);


// //forEach() loop.

// const data = arr.forEach(res => console.log(res));
// console.log(data); //data is undefine because forEach return undefine.


// const text = [];
// arr.forEach((res) => {
//      text.push(res);
// });
// console.log(text);

// //Array map() method.

// const data = arr.map((res) => {
//     return res * 3;
// })
// console.log(data);

const Arrayofobj = [
    {id: 1,name: "Amit kumar"},
    {id: 2,name: "Pankaj Saini"},
    {id: 3,name: "Rohit mehra"},
    {id: 2,name: "Sumit  Saini"},
];

// Arrayofobj.map((res) => {
//     console.log(res.id,res.name);
    
// })

// const data = Arrayofobj.map(res => res.name)
// console.log(data);


// //Using of filter() and find() method.

// const data = Arrayofobj.filter(res => res.id === 2);
// console.log(data);

// const data = Arrayofobj.find(res => res.id === 2);
// console.log(data);

// //Array flat() method.

// const array = [1,2,[3,4,[9,10]],5,6,7,8];
// const flatarray = array.flat(2);
// console.log(array,flatarray);


//Array reduce method.

// const data = arr.reduce(sum);

// function sum(total,value) {
//     return total + value;
// }
// console.log(data);
















































