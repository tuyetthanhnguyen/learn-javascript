/*
1. DL nguyen thuy
-Number
-String
-Boolean
-Undefined
-Null
-Symbol
2. DL phuc tap - complex data
-Function
-Object
*/
// Number type
var a = 1;
var b = 2;
var c = 1.5;
// String type
var fullName = '\"Tuyet Thanh Nguyen\" ';
console.log(typeof fullName);
//Boolean type
var t = true;
var f = false;

//Undefined type
var age;
console.log(age);
//Null
var n= null;
//Symbol
var s = Symbol('id'); // unique 'nang cao'
var id = Symbol('id');
console.log(s == id);

//function

// var myfunction = function(){
//     alert('Hi. My name\'s Thanh');
// }
// myfunction();

// Object
var myObject = {
    name: 'Tuyet Thanh',
    age: 22,
    adress: 'Hau Giang',
    myfunction: function(){

    }
    
};
console.log('myObjetc', myObject);

var myArray = [
    'JavarScript',
    'PHP',
    'Ruby'

];

console.log(myArray);