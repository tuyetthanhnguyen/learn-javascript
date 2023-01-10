/*
1. Create
2.case using backsflash (\)
3. length
4. code long?
5. Template string ES6
*/
/*
var a = 'TT'; // c1
var b = new String('TT'); //c2
console.log(a);
console.log(b.length);
console.log('Toi la: '+a+" "+b);
console.log(`Toi la: ${a} ${b}`);
*/
//--------------------------------------

// work with String
// var c = 'Hoc JS tai F8';

//1. length
// console.log(c.length)

// //2. find index
// console.log(c.indexOf('JS')); //0 1 2 3 4
// console.log(c.indexOf('abs')); // -1
// console.log(c.search('JS', 'JavaScript'))

// //3. cut String
// console.log(c.slice(4, 6))
// //4. replace
// console.log(c.replace(/JS/g, 'JavaScript'))

//5. Convert to upper case
// console.log(c.toUpperCase())

//6. Convert to lower case
//console.log(c.toLowerCase())

//7. Trim
// console.log(c.trim().length)

//8. Split
// var d = 'JS, PHP, Ruby'
// console.log(d.split(', '));
// var languages = 'JavaScript'
// console.log(languages.split(''));// '' rỗng thì in ra từng chữ cái

//9. Get a character by index
// const my = 'TT'
// console.log(my.charAt(10));
// console.log(typeof my.charAt(10));
// console.log(my[1])

//-------------------------------------
//Examble 1
var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

function strToArray(str) {
    str = coursesStr;
    return str.split(', ');
}

// Expected results
console.log(strToArray(coursesStr)) 


// Output: ['HTML & CSS', 'JavaScript', 'ReactJS']

//--------------------------------------------------
//Ex2:
function getContentLength(content) {
    return content.length;
}


// Mở tab Console để xem kết quả trực quan
console.log(getContentLength('JavaScript'));
console.log(getContentLength('Hello World'));
//----------------------------------------------------
//Ex3:
function getUpperCaseName(a){
    return a.toUpperCase()
}



// Expected results:
console.log(getUpperCaseName("Nguyen van a")) // "NGUYEN VAN A"
console.log(getUpperCaseName("nGuyen vAn C")) // "NGUYEN VAN C"