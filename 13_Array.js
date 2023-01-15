/*
1. tạo mảng
    cách tạo
    sử dụng
    kiểm tra data type
2. truy xuất mảng
    length
    lấy phần tử index
*/
// cach 1
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
console.log(languages)
console.log(Array.isArray(new Array(1,2)));
console.log(languages.length)
console.log(languages[0])
// cach 2
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