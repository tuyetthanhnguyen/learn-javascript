// var a = 1
// var b = 2
// if (a<=b) {
//     console.log('Dieu kien dung!')
// }
// else {
//     console.log('Dieu kien sai!')

// }
/*  toan tu
var age = 20
var canBuyAlcohol = age >18
console.log(canBuyAlcohol)
*/
/* Toan tu logic
*/
var a = 1;
var b = 2;
var c = 3;
if(a > 0 && b > 0 && c > 0){ // 1 DK SAI THI SAI
    console.log('DIEU KIEN DUNG!');
}
else{
    console.log('DIEU KIEN SAI!');
}
if(a < 0 || b < 0 || c < 0){ // 1 DK DUNG THI DUNG
    console.log('DIEU KIEN DUNG!');
}
else{
    console.log('DIEU KIEN SAI!');
}
/*
var a = true;
var b = false;
var c = a || b;
var d = b && c;

console.log(c, d);

var d = '1';
console.log(a === d); // ss value & typeof
console.log(a !== d); // ss value & typeof
 // ss value & typeof
 console.log(a == d); // ss value
*/
 // toan tu logical

 var result = a < b && a < 0;
 console.log('result', result);
 console.log(result);
 if(a < b){
    console.log('A < B');
 }
 else {
    console.log('A > B');
 }