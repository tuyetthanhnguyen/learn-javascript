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
// var languages = [
//     'Javascript',
//     'php',
//     'ruby',
//     'dart',
//     null,
//     undefined,
//     function () {

//     },
//     {}
// ];
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

// function getLastElement(array){
//     return array.slice(-1)  //(0, 1) first element
// }

// var animals = ['Monkey', 'Tiger', 'Elephant'];
// var result = getLastElement(animals);

// console.log(result); // Expected: "Elephant"
// console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']


//---------------------------------------------------
// làm việc với mảng
/*
Array method:


*/
// function giaiThua(number){
//     if(number >0){
//         return number * giaiThua(number - 1);
//     }
//     return 1;
// }
// console.log(giaiThua(6))


var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 300
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 400
    },
    {
        id: 4,
        name: 'PHP',
        coin: 450
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    }
];
 //   forEach()
// courses.forEach(function(course, index){
//     console.log(course)
// })

//    every() =>boolean
// var isFree = courses.every(function(course, index){
//     // console.log(index)
//     return course.coin === 0
// })
// console.log(isFree)

//    some()
// var isFree = courses.some(function(course, index){
//     // console.log(index)
//     return course.coin === 0
// })
// console.log(isFree)

// find()
    // var isFree = courses.find(function(course, index){
    //     // console.log(index)
    //     return course.coin === 0
    // })
    // console.log(isFree)

// filter()
    // var isFree = courses.filter(function(course, index){
    //     // console.log(index)
    //     return course.coin === 0
    // })
    // console.log(isFree)

// map()
    // var isFree = courses.map(function(course, index){
    //     // console.log(index)
    //     return course.coin === 0
    // })
    // console.log(isFree)

    // var newCourses = courses.map(function courseHandler (course, index){
    //     // console.log(course);
    //     // return course.name;
    //     // return {
    //     //     id: course.id,
    //     //     name: `Khoa hoc: ${course.name}`,
    //     //     coin: course.coin,
    //     //     coinText: `Gia: ${course.coin}`,
    //     //     index: index,
    //     //     originArray: course,
    //     // };
    //     return `<h2>${course.name}</h2>`;
    //  });
    // //  console.log(newCourses);
    // console.log(newCourses.join(''));
    
    {/* <h2>Javascript</h2><h2>HTML, CSS</h2><h2>Ruby</h2><h2>PHP</h2><h2>R
    eactJS</h2> */}

// ex
// const sports = [
//     {
//         name: 'Bóng rổ',
//         like: 6
//     },
//     {
//         name: 'Bơi lội',
//         like: 5
//     },
//     {
//         name: 'Bóng đá',
//         like: 10
//     },
// ]
// function getMostFavoriteSport(arr) {        
//     return arr.filter(function(course) { course.like > 5 }) }
// // Kỳ vọng
// console.log(getMostFavoriteSport(sports)) 
// // Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]

// reduce()
    // var isFree = courses.reduce(function(course, index){
    //     // console.log(index)
    //     return course.coin === 0
    // })
    // console.log(isFree)

// 


// 1. Easy :)

// biến lưu trữ
// var totalCoin = 0;
// // Lặp qua các phần tử
// for(var course of courses){
//     // thực hiện việc lưu trữ
//     totalCoin += course.coin;
// }
// console.log(totalCoin);

// 2. ngắn gọn
// 3. Hiệu năng

// biến lưu trữ
// thực hiện việc lưu trữ
// var i = 0;
// function coinHandler(accumulator, currentValue, currentIndex, originArray){
//     i++;
//     // console.log(i);
//     var total = accumulator + currentValue.coin;
//     console.table({
//         'Lượt chạy: ': i,
//         'Biến tích trữ: ': accumulator,
//         'Giá khóa học: ': currentValue.coin,
//         'Tích trữ được: ': total
//     });
//     // return accumulator + currentValue.coin;
//     return total;
//     // console.log(currentValue)
//     // return 100;
//     }
//     var totalCoin = courses.reduce(coinHandler, 0);
//     console.log(totalCoin);

// ngắn gọn hơn (nâng cao)
// var totalCoin = courses.reduce((a, b) =>
// a+b.coin, 0);
// console.log(totalCoin);
///////////////////////////////////////////
// Ex reduce()

// var sports = [
//     {
//         name: 'Bơi lội',
//         gold: 11
//     },
//     {
//         name: 'Boxing',
//         gold: 3
//     },
//     {
//         name: 'Đạp xe',
//         gold: 4
//     },
//     {
//         name: 'Đấu kiếm',
//         gold: 5
//     },
// ]
// function getTotalGold(sports){
//     return sports.reduce((a, b)=> a+b.gold, 0);
// };
// // Expected results:
// console.log(getTotalGold(sports)) // Output: 23 

////////////////////////////////////////
// var numbers = [100, 200, 220, 200, 480];
// var totalCoin = numbers.reduce(function(total, number){
//     return total + number;
// }, 0);
// console.log(totalCoin);
////////////////////////////////////////////
//Flat - "Làm phẳng" mảng từ Depth aray - "Mảng sâu"
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8]];
// var flatArray = depthArray.reduce(function(flatOutput, depthItem){
//     return flatOutput.concat(depthItem);
// }, []);
// console.log(flatArray);
//////////////////////////////////////////////////////
// Lấy ra những khóa học đưa vào 1 mảng mới
// var topics = [
//     {
//         topic: "front-end",
//         courses: [
//             {
//                 id: 1,
//                 title: "HTML, CSS"
//             },
//             {
//                 id: 2,
//                 title: "JavaScript"
//             },
//         ]
//     },
//     {
//         topic: "Back-end",
//         courses: [
//             {
//                 id: 1,
//                 title: "PHP"
//             },
//             {
//                 id: 2,
//                 title: "NodeJS"
//             }
//         ]
//     },
// ];
// var newCourses = topics.reduce(function(courses, topic){
//     return courses.concat(topic.courses);
// }, []);

// console.log(newCourses);
// var htmls = newCourses.map(function(course){
//     return `
//     <div>
//         <h2>${course.title}</h2>
//         <p>ID: ${course.id}</p>
//     </div>
//     `;
// })
// console.log(htmls.join(''));

/////////////////////////////////////////////////////
// EX
/*
var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];
    function calculateRating(arr) { 
        var movieDirectByNolan = arr.filter(function(movie) { 
            return movie.Director === "Christopher Nolan" 
        });
        var totalIMDB = movieDirectByNolan.reduce((a, b) => 
        a + Number(b.imdbRating), 0);

        return totalIMDB/movieDirectByNolan.length 
    }
  // Expected results
  console.log(calculateRating(watchList)); // Output: 8.675
*/

//phương thức reduce có logic như nào?
// có truyền initValue
/*
Array.prototype.reduce2 = function (callback, initialValue){
    for (let i = 0; i < this.length; i++) {
        result = callback(result, this[i], i, this)
    }
}
const numbers = [1, 2, 3, 4, 5] 
const result = numbers.reduce((total, number) =>{
    // const result = numbers.reduce((total, number, index, array) =>{
        return total + number
}, 0)

//}, 10)    // result = 25
// callback: bắt buộc, là hàm dc gọi lại, truyền vào đối số của hàm khác
// initialValue: 
console.log(result)
*/
/*
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
function arrToObj(arr){
    return arr.reduce((obj, [key, val])=>(obj[key]=val, obj), {});
}
console.log(arrToObj(arr));
*/
Array.prototype.map2 = function() {
    var arrayLength = this.length
    for (var i = 0; i<this.length; ++i){

    }
}
var courses =[ 
    'JavaScript',
    'PHP',
    'Ruby'
]
courses.map2(function(courses, index ){
    console.log(index, course)
});
