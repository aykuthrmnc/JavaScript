// Arrow Functions

// let welcomeES6 = () => {
//     console.log("Hello from ES6");
// }
// welcomeES6();
// ****************

// with parameters
// let multiplyES6 = () => {return x*y};
// let multiplyES6 = (x, y) => x * y;
// console.log(multiplyES6(5, 6));
// ****************

// object literals
// let getProductES6 = (id, name) => (
//     {
//         id: id,
//         name: name
//     }
// )
// ****************

// const phones = [
//     { name: "IPhone 8", price: 3000 },
//     { name: "IPhone 6", price: 2000 },
//     { name: "IPhone 5", price: 1000 },
//     { name: "IPhone 7", price: 2500 }
// ];
// // ES5
// let pricesES5 = phones.map(function(phone) {
//     return phone.price;
// })
// console.log(pricesES5);
// // ES6
// let pricesES6 = phones.map(phone => phone.price);
// console.log(pricesES6);

//-----------------------------------------
// Spread Operator

// function getTotal(a, b, c) {
//     return a + b + c;
// }
// console.log(getTotal(10,20,30));
// ****************

// let numbers = [10,20,30];
// ES5
// console.log(getTotal.apply(null,numbers));
// ES6
// console.log(getTotal(...numbers));
// ****************

// let arr1 = ["two", "three"];
// let arr2 = ["one", "four", "five"];
// let arr3 = ["one", ...arr1, "four", "five"];
// arr1.push(...arr2);
// arr1.unshift(...arr2);
// console.log(arr1);
// ****************

// let h1 = document.querySelector("h1");
// let divs = document.querySelectorAll("div");
// let tags = [h1, ...divs];
// tags.forEach(tag => tag.style.color = "red");
// console.log(tags);
//-----------------------------------------
// Rest Parameters

// ES5
// function sumES5() {
//     let arr = Array.prototype.slice.call(arguments);
//     let result = 0;
//     arr.forEach(function (item) {
//         result += item;
//     });
//     return result;
// }
// console.log(sumES5(10, 20, 30));
// ****************

// ES6
// function sumES6(...arr) {
//     let result = 0;
//     arr.forEach(item => result += item);
//     return result;
// }
// console.log(sumES6(10, 20, 30));
//-----------------------------------------
// Destructuring

// Destructuring Assignment
// var a, b, rest;
// [a, b] = [10, 20];
// console.log(a);
// console.log(b);

// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(a);
// console.log(b);
// console.log(rest);

// ({ a, b } = { a: 10, b: 20 });
// console.log(a);
// console.log(b);

// ({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
// console.log(a);
// console.log(b);
// console.log(rest);
// ****************

// Array Destructuring
// const arrConfig = ["localhost", "8080", "900"];
// const [server, port, timeout] = arrConfig;
// console.log(server, port, timeout);
// ****************

// Object Destructuring
// const objConfig = {
//     server: "localhost",
//     port: "8080",
//     timeout: 900
// }
// const { server, port, timeout = 800 } = objConfig;
// console.log(server, port, timeout);
// let { timeout: t } = objConfig; console.log(t);

// const day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
// const [, , wed, , fri] = day;
// console.log(wed, fri);
//-----------------------------------------
// Classes

// ES5
// var PersonES5 = function (name,job,yearOfBirth) {
//     this.name = name;
//     this.job = job;
//     this.yearOfBirth = yearOfBirth;
// }
// PersonES5.prototype.calculateAge = function () {
//     return 2021 - this.yearOfBirth;
// }
// var yigit = new PersonES5("yigit","student",2010);
// console.log(yigit.calculateAge());
// ****************

// ES6
// class PersonES6 {
//     constructor(name, job, yearOfBirth) {
//         this.name = name;
//         this.job = job;
//         this.yearOfBirth = yearOfBirth;
//     }
//     calculateAge() {
//         return 2021 - this.yearOfBirth;
//     }
// }
// let emel = new PersonES6("emel", "teacher", 1989);
// console.log(emel.calculateAge());
//-----------------------------------------
// Static Methods

// class PersonES6 {
//     constructor(name, job, yearOfBirth) {
//         this.name = name;
//         this.job = job;
//         this.yearOfBirth = yearOfBirth;
//     }
//     calculateAge() {
//         return 2021 - this.yearOfBirth;
//     }
//     static sayHi() {
//         console.log("Hello there");
//     }
// }
// let emel = new PersonES6("emel", "teacher", 1989);
// console.log(emel.calculateAge());
//-----------------------------------------
// Sub Classes

// ES5
// function PersonES5(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// PersonES5.prototype.sayHi = function () {
//     return `Hello I'm ${this.firstName} ${this.lastName}`;
// }

// function CustomerES5(firstName, lastName, phone, username) {
//     PersonES5.call(this, firstName, lastName);
//     this.phone = phone;
//     this.username = username;
// }
// CustomerES5.prototype = Object.create(PersonES5.prototype);

// var customer = new CustomerES5("aykut", "harmanci", "1234567", "aykuthrmnc");
// console.log(customer.sayHi());
// ****************

// ES6
class PersonES6 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHi() {
        return `Hello I'm ${this.firstName} ${this.lastName}`;
    }
}

class CustomerES6 extends PersonES6 {
    constructor(firstName, lastName, phone, username) {
        super(firstName, lastName);
        this.phone = phone;
        this.username = username;
    }
}

let customer1 = new CustomerES6("aykut", "hrmnc", "13579", "aykuth42");
console.log(customer1.sayHi());
