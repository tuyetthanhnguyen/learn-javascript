/*
var emailKey = 'email'

var myInfo = {
    name: 'NTTT',
    age: 22,
    address: 'NB, HG, VN',
    [emailKey]: 'tuyetthanhnguyen2001lqd@gmail.com',
    phone: '0344722027',
    getName: function() {
        return this.name
    },
    getAge: function() {

    }
}; 
console.log(myInfo.getName());

*/
// console.log(myInfo[myKey])
// myInfo.email = 'tuyetthanhnguyen2001lqd@gmail.com'

// console.log(myInfo.name)
// console.log(myInfo['address'])
// var myKey = 'address'
//  delete myInfo.age
 
//Object contructor
/*
function User(firstName, lastName, avatar) {
    this.firstName = firstName
    this.lastName = lastName
    this.avatar = avatar

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new User('Thanh', 'Nguyen', 'Avatar')
var user = new User('Thuy', 'Nguyen', 'Avatar')

author.title = 'Chia se tai F8'
user.comment = 'Lieu co kkhoa asp.net ko ad :)'
console.log(author.getName())
// console.log(author.constructor === User)
console.log(user.getName())

*/

// Object prototype - basic

function User(firstName, lastName, avatar) {
    this.firstName = firstName
    this.lastName = lastName
    this.avatar = avatar

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}
User.prototype.className = 'F8'
// phương thức
User.prototype.getClassName = function() {
    return this.className
}
var user1 = new User('Thanh', 'Nguyen', 'Avatar 1')
var user2 = new User('Thuy', 'Nguyen', 'Avatar 2')

console.log(user1.className)
console.log(user2.getClassName())
