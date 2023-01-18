/*
1. for - ĐK true
2. for/in - key của đối phương
3. for/of - value ''
4. while - khi ĐK true
5. do/while - lặp ít nhất 1 lần, sau đó lặp khi ĐK true

*/
// FOR
// for (var i = 1; i <= 1000; i++) {
//     console.log(i);
// }

// hàm in ra ngẫu nhiên trong mảng
// function getRandNumbers (min, max, length) {
//     var array = [1, 5, 6, 9, 6, 12, 56, 68, 32, 55, 100, 90, 10];
//     for(var i =0; i<= length-1; i++){
//         array.push(Math.random() * (max - min) + min);
//     }return array;
// }
// getRandNumbers();
// console.log(getRandNumbers());

// HÀM SUM
// function getTotal(arr) {
//     var numbers=0
//     for(var i of arr){
//         numbers += i
//     }
//     return numbers; 
// }

// VÒNG LẶP IN MẢNG

var myArray = [
    'JS',
    'PHP',
    'Java',
    'Dart'
]

// var arrayLength = myArray.length
// for( var i=0; i<arrayLength; i++){
//     console.log(myArray[i])
// }

// HÀM TÍNH TỔNG HÓA ĐƠN
// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ]

// function getTotal (orders) {
//     // var arrLength = arr.length
//     var sum = 0
    
//     for(var i=0; i<orders.length; i++){
//         sum+= orders[i].price;
//     }
//     return sum;
// }
// getTotal(orders) // Output: 8700000
// console.log(getTotal(orders))
//--------------------------------------------------------
 //FOR IN 
//String
 var myInfo = {
    name: 'Tuyet Thanh',
    age: 22,
    address: 'Nga Bay, Hau Giang'
 };

//  for(var key in myInfo) {
//     console.log(key)            // key
//     console.log(myInfo[key])    //data
//  }


 //Array     
// for(var key in myArray) {
//     console.log(key)            // key
//     console.log(myArray[key])    //data
// }

// IN DỮ LIỆU

// function run(object) {
//     var arr=[]
//     for(var key in object){
//         arr.push("Thuộc tính " + key + " có giá trị " + object[key])
//     }
//     return arr
// }
// console.log(run({ name: 'Nguyen Van A', age: 16 }));
//---------------------------------------------------------
//FOR OF

// for(var key of myArray) {
//     console.log(key)            // key
//     console.log(myArray[key])    //data
// }

    var languages='javascript'
// for (var value of languages) {
//     console.log(value)
// }
//Array 
// for (var value of Object.keys(myInfo)) { 
//     console.log(value)
// }
// for (var value of Object.values(myInfo)) {
//     console.log(value)
// }
//-----------------------------------------------------
//WHILE

var i = 0
// while(i < myArray.length) {
//     console.log(myArray[i])  
//     i++;
// }
//-----------------------------------------
// do while
// do{
//     i++
//     console.log(i)
// }while(i < 10)
var isSuccess = false
// do{
//     i++
//     console.log('Nạp thẻ lần ' +i)
//     if(false){
//         isSuccess = true;
//     }
//     else if(true){
//         isSuccess = true;
//     }
// }while(isSuccess && i < 3)

//-------------------------------------------------
//break && continue

// for (var i = 0; i <= 10; i++) {
//     if(i>5){
//         break;
//     }    
//     console.log(i);

// }
// for (var i = 0; i <= 10; i++) {
//     if(i%2 !=0){
//         continue;
//     }    
//     console.log(i);

// }
//--------------------------------------------
// Nested loop

var myNumberArray = [
    [1, 2],
    [3,4],
    [5,6]
]
// for(var i=0; i<myNumberArray.length;i++){
//     console.log(myNumberArray[i]); 
// }
// for(var i=0; i<myNumberArray.length;i++){
//     for(var j=0; j<myNumberArray[i].length;j++){
//         console.log(myNumberArray[i][j]);
//     }
// }

// var array = [1, 2, 3, 4, 1, 2, 3, 4, 22]
// console.log([...new Set(array)]);
//----------------------------------------------------
// đệ quy 
// xác định điểm dừng, logic handle => tại ra điểm dừng
// function countdown(num){
//     if(num>=0){
//         console.log(num);

//         return countdown(num-1);
//     }
//     return num;
// }
// countdown(10);

// function loop(start, end, cb){
//     if(start < end) {
//         cb(start)
//         return loop(start +1, end, cb);
//     }
// }

// var array = ['JavaScript', 'PHP', 'Ruby']
// loop(0, array.length - 1, function(index) {
//         console.log('index: ', index);
//         console.log(array[index]);
//     });



