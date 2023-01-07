
function tong() {
    var x = 3
    var y = 6
    x += y
    console.log(x)
}
tong()
function hieu() {
    var x = 3
    var y = 6
    x -= y
    console.log(x)
}
hieu()
function tich() {
    var x = 3
    var y = 6
    x *= y
    console.log(x)
}
tich()
function sodu() {
    var x = 3
    var y = 6
    x /= y
    console.log(x)
}
sodu()

function thuong() {
    var x = 3
    var y = 6
    x **= y
    console.log(x)
}
thuong()
function add() {
    var x = 3
    x++     
    console.log(x++)  //=4
    console.log(++x)    //=6
}
add()

var a = 6
var b = a++ + --a;
// 6+6
var c = ++a * 2 - a-- *2
//7*2-7*2
console.log(b)
console.log(c)

