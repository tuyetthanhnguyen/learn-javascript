/*
1. tham số
 định nghĩa
 KDL
 tính private
 1 tham số
 nhiều tham số
 */
function writeLog(){
    console.log('Day la 1 dong log');
}
writeLog();
/*
2. Truyền tham số
 1 tham số
 nhiều tham số
*/
function writeLog(message, message2){
    console.log(message);
    console.log(message2);
    console.log(typeof message2);
}
writeLog('Text message', 'PHP');
/*
3. Arguments 
 đối tượng arguments
 */
function writeLog(){
    console.log(arguments);
}
/*
 giới thiệu vòng for of
*/
function writeLog() {
    var myString = '';
    for (var param of arguments) {
        myString += `${param} - `
    }
    console.log(myString);
}
writeLog('Log 1', 'Log 2', 'Log 3', 'Log 4', '5', '6');

function sum(message, message2){
    console.log(message);
    console.log(message2);
}
sum('a', 'b');

function sum(a,b){
    return (a+b);
}
// return trong ham 
function sum(a, b){
    return[a, b];
}
var result = sum(2, 8);
console.log(result);

function sum(a, b) {
    return (a+b);
}
var result =sum(20, 10);
console.log(result);
