
var courses = [
{    name: 'Javascript',
    coin: 680,
    isFinish: true
},
{
    name: 'PHP',
    coin: 860,
    isFinish: true
},
{
    name: 'Ruby',
    coin: 980,
    isFinish: false
}
];

// filter
/*
Array.prototype.filter2 = function(callback){
    var output = []
    for (var index in this) {
        if (this.hasOwnProperty(index)){
            var result = callback(this[index], index, this);
            if (result){
                output.push(this[index])
            }
        }
    }
}

var filterCourses = courses.filter(function(course, index, array) {
    console.log(course, index, array)
    return course.coin > 700;
});
console.log(filterCourses);

*/

//some
/*
var courses = new Array(100);
var result = courses.some(function(course, index, array){
    return course.isFinish;
});
*/
/*
Array.prototype.some2 = fuction(callback){
    var output = false;
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(callback(this[index], index, this)){
                output = true;
                break;
            };
        }
    }
    return output;
}

var courses = new Array(100);
var result = courses.some2(function(course, index, array){
    return course.isFinish;
});
 console.log(result);

 */


 // every: true / false
/*
Array.prototype.every2 = function(callback) {
    for (var index in this){
        if(this.hasOwnProperty(index)){
            var result = callback(this[index], index, this);
            if(!result) {
                output = false;
                break;
            }
        }
    }
    return output;
}

var result = courses.every2(function(course, index, array){
    return course.isFinish;
});

console.log(result);

*/


Array.prototype.myEvery = function(cb) {
    var output = true;
    for (var index in this){
        if (this.hasOwnProperty(index)){
            var results = cb(this[index], index, this)
            if (!results){
                output = false;
                break;
            }
        }
    }
    return output;
}

const numbers = [1, 3, 3, 5];

var number1 = numbers.myEvery(function(number, index, array)
{
    return number % 2 !== 0;
});
console.log(number1);
var number2 = numbers.myEvery(function(number, index, array)
{
    return index % 2 === 0;
});
console.log(number2);
var number3 = numbers.myEvery(function(number, index, array)
{
    return array.length % 2 === 0;
});
console.log(number3);