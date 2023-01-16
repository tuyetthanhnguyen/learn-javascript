/*
function run(a) {
    if(a%3 == 0 && a%5!=0 && a%15!=0)
        return 1;
    else if(a%5==0 && a%15!=0)
        return 2;
    else if (a%15 == 0)
        return 3;
}


// Kỳ vọng
console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3

*/
/*
// switch case:
var date = 6;
switch(date) {
    case 2:
        console.log('Monday')
        break;
    case 3:
        console.log('Tuesday')
        break;
    case 4:
        console.log('Wednesday')
        break;
    case 5:
        console.log('Thursday')
        break;
    default:
        console.log('I do not known')
}

*/

// toán tử 3 ngôi

var course = {
    name: 'Javascript',
    coin: 250
}
// if (course.coin > 0){
//     console.log(`${course.coin} Coins`)
// }
// else{
//     console.log('Free')
    
// }
var result = course.coin > 0 ? `${course.coin} Coins` : 'Free';
console.log(result)