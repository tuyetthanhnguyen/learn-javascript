/*
1. tạo mảng
    cách tạo
    sử dụng
    kiểm tra data type
2. truy xuất mảng
    length
    lấy phần tử index
*/
// cach 1 thuong dung
var languages = [
    'Javascript',
    'php',
    'ruby',
    'dart',
    null,
    undefined,
    function () {

    },
    {}
];
// console.log(languages)
// console.log(Array.isArray(new Array(1,2)));
// console.log(languages.length)
// console.log(languages[0])
// JOIN: in ptu
// console.log(languages.join())
// console.log(languages.join(''))
// console.log(languages.join(' - '))  // join tuong tu toString
 
// // POP: xóa phần tử  cuối của mảng
// console.log(languages.pop())
// console.log(languages)

// // PUSH: thêm vào ptu ở cuối mảng
// console.log(languages.push('nodejs', 'java'))
// console.log(languages)

// SHIFT: xóa 1 ptu và return ptu đã xóa
// console.log(languages.shift())
// console.log(languages)

// // UNSHIFT: thêm vào ptu đầu mảng và return mảng mới
// console.log(languages.unshift('hello', 'hi'))
// console.log(languages)

// //  SPLICING: xóa element, chèn
// languages.splice(1, 1) // 1: nơi đặt con trỏ
//                         // 1: bao nhiêu phần tử dc xóa
// languages.splice(1, 0, 'hallo') // chèn hello vào vị trí 1
// console.log(languages)

// // CONTACT: nối 2 ararray
// var languages2 = [
//     'hello',
//     'hi'
// ];

// console.log(languages.concat(languages2))

// SLINCING: cắt 1 vài or toàn bộ elemets
// console.log(languages.slice(0)) // sao chếp
//  console.log(languages.slice(1, 2)) // cắt vị trí 1
//  console.log(languages.slice(1))    // cắt toàn bộ
// cach 2   ko thường dùng
/*
var a = new Array(
    'Javascript',
    'php',
    'ruby',
    'dart',
    null,
    undefined,
    function () {

    },
    {},
    123
);
*/

// in last element

function getLastElement(array){
    return array.slice(-1)  //(0, 1) first element
}

var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']