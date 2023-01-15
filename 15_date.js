
/*
var date = new Date();

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
console.log(date.getFullYear()+1)
console.log(date.getMonth() + 1)
console.log(date.getDate())
// console.log(`${day}/${month}/${year}`)

// nextyear
var date = new Date();
var year = date.getFullYear();
function getNextYear() {
return year+1;
}

*/

// Math
// console.log(Math.PI)
// console.log(Math.round(1.5))// nằm tròn
// console.log(Math.abs(-4))
// console.log(Math.cell(4.1)) // nằm tròn trên
// console.log(Math.floor(5.9)) // nằm tròn dưới
var random = Math.floor(Math.random() * 100)
if(random<50){
    console.log('cường hóa thành công')
}

console.log(Math.min(-100, 1, 90, 50, 40))
console.log(Math.max(-100, 1, 90, 50, 40))

// Ex:

function getRandomItem(coin){
    var coin = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
];
    var max = coin.length
    var random = Math.floor(Math.random() * max)
    return coin[random]
}
getRandomItem()
console.log(getRandomItem())