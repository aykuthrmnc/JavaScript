// Object Literals

// let yigit = {
//     name: "Yigit",
//     yearOfBirth: 2010,
//     job: "student"
// }

//-----------------------------------------
// Constructor

// function Person(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function () {
//         return 2021 - this.yearOfBirth;
//     }
// }

// let Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function () {
//         return 2021 - this.yearOfBirth;
//     }
// }

// let aykut = new Person("aykut", 1997, "student");

// console.log(aykut.calculateAge());

//-----------------------------------------
// Prototype

// function Person(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function() {
//     return 2021 - this.yearOfBirth;
// }

// Person.prototype.getName = function() {
//     return this.name;
// }

// let aykut = new Person("aykut", 1997, "student");

// console.log(aykut.calculateAge());
// console.log(aykut.getName());

//-----------------------------------------

// function Employee(name, salary) {
//     if (!this instanceof Employee) { // new uretilmediginde
//         return new Employee(name, salary);
//     }
//     this.name = name;
//     this.salary = salary;
// }

// Employee.prototype.calculateSalary = function () {
//     var month = new Date().getMonth() + 1;
//     var tax = 0;
//     var total = this.salary * month;

//     if (total <= 20000) {
//         tax = total * 0.2;
//     } else if (total > 20000 && total <= 30000) {
//         tax = total * 0.25;
//     } else {
//         tax = total * 0.3;
//     }

//     return {
//         tax: tax,
//         paid: total - tax
//     }
// }

// var emp1 = new Employee("Yiğit", 3000);
// var emp1_salary = emp1.calculateSalary();

// console.log(`${emp1.name} isimli personel toplam ${emp1_salary.tax} TL vergi kesintisi ile ${emp1_salary.paid} TL maaş almıştır.`);

//-----------------------------------------
// Object.create

// let personProto = {
//     calculateAge : function(){
//         return 2018-this.yearOfBirth;
//     }
// }

// let yigit = Object.create(personProto);

// yigit.name ='yiğit';
// yigit.yearOfBirth = 2010;
// yigit.job ='student';

// let emel = Object.create(personProto,{
//     name : {value : 'emel'},
//     yearOfBirth : {value : 1989},
//     job : {value : 'teacher'}
// });

// console.log(emel);
// console.log(emel.calculateAge());

// console.log(yigit);
// console.log(yigit.calculateAge())
//-----------------------------------------
// Prototype Inheritance

// let Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function () {
//     return 2021 - this.yearOfBirth;
// }

// let Teacher = function (name, yearOfBirth, job, subject) {
//     Person.call(this, name, yearOfBirth, job);
//     this.subject = subject;
// }

// // Inherit the Person prototype methods
// Teacher.prototype = Object.create(Person.prototype);
// // set Teacher constructor
// Teacher.prototype.constructor = Teacher;

// let aykut = new Teacher("aykut", 1997, "student", "ce");

// console.log(aykut);
// console.log(aykut.calculateAge());

//-----------------------------------------
// Inheritance

// // Person Constructor
// function Person(name) {
//     this.name = name;
// }

// Person.prototype.Introduce = function () {
//     console.log("Hello my name is " + this.name);
// }

// // Teacher Constructor
// function Teacher(name, branch) {
//     Person.call(this, name);
//     this.branch = branch;
// }

// Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.constructor = Teacher;
// Teacher.prototype.teach = function () {
//     console.log("I teach " + this.branch);
// };

// // Student Constructor
// function Student(name, number) {
//     Person.call(this, name);
//     this.number = number;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;
// Student.prototype.study = function () {
//     console.log("My Student number is " + this.number + " I've already studied hard");
// };

// // Headmaster Constructor
// function Headmaster(name, branch) {
//     Teacher.call(this, name, branch);
// }

// Headmaster.prototype = Object.create(Teacher.prototype);
// Headmaster.prototype.constructor = Headmaster;
// Headmaster.prototype.shareTask = function () {
//     console.log("I've already shared all the work");
// }

// let p1 = new Person("Aykut");
// p1.Introduce();

// let t1 = new Teacher("Mehmet","Math");
// t1.Introduce();
// t1.teach();

// let s1 = new Student("Yigit","100");
// s1.Introduce();
// s1.study();

// let h1 = new Headmaster("Ahmet","Math");
// h1.Introduce(); // Person
// h1.teach();     // Teacher
// h1.shareTask(); // Headmaster
//-----------------------------------------
// Immediate Functions

// (function(){})();

// (function(name){
//     var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//     var today = new Date();
//     var msg = "Welcome " + name + " Today is " + days[today.getDay()];
//     console.log(msg);
// }("Aykut"));
//-----------------------------------------
// Functions That Return Functions

// function Question(hobby) {
//     switch (hobby) {
//         case "car":
//             return function (name) {
//                 console.log(name + " do you have a car?");
//             }
//             break;
//         case "book":
//             return function (name) {
//                 console.log(name + " what is your favourite book?");
//             }
//             break;
//         case "software":
//             return function (name, type) {
//                 console.log(name + " are you interested in " + type + "?");
//             }
//             break;

//         default:
//             console.log(name + " how are you?");
//             break;
//     }
// }

// var carQuestion = Question("car");
// carQuestion("Aykut");
// var bookQuestion = Question("book");
// bookQuestion("Aykut");
// bookQuestion("Mehmet");
// var softwareQuestion = Question("software");
// softwareQuestion("Aykut","NodeJs");
//-----------------------------------------
// const person = {
//     firstName: "Aykut",
//     lastName: "Harmancı",
//     // get fullName() {
//     //     return `${this.firstName} ${this.lastName}`;
//     // },
//     // set FullName(value) {
//     //     const parts = value.split(" ");
//     //     this.firstName = parts[0];
//     //     this.lastName = parts[1];
//     // }
// }

// Object.defineProperty(person, "fullName", {
//     get function() {
//         return `${this.firstName} ${this.lastName}`;
//     },
//     set function(value) {
//         const parts = value.split(" ");
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// });

// Object.defineProperty(person, "age", {
//     value: 50,
//     writable: true
// });

// person.age = 55;

// person.FullName = "Mehmet Yıldız";
// console.log(person.fullName);
// console.log(person);
//-----------------------------------------
// Error Handling

// ReferenceError, TypeError, SyntaxError, URIError, Error
// var user = {
//     name: "Aykut Harmancı"
// }
// try {
//     console.log(user.name);

//     if (!user.email) {
//         throw new Error("User has no email");
//     }
//     console.log(user.email);
// } catch (e) {
//     console.log(e);
//     console.log(e.message);
//     console.log(e.name);
//     console.log(e instanceof ReferenceError);
//     console.log(e instanceof TypeError);
//     console.log(typeof e);
// } finally {
//     console.log("Finally block");
// }

// Error Handling App
// document.getElementById("myBtn").addEventListener("click", function (e) {
//     var name = document.getElementById("name");
//     var age = document.getElementById("age");
//     var errors = document.getElementById("errors");
//     errors.innerHTML = "";
//     try {
//         if (name.value.length === 0) {
//             throw new Error("Name is required");
//         }
//         if (name.value.length > 20) {
//             throw new Error("Name is too long");
//         }
//         if (age.value.length === 0) {
//             throw new Error("Age is required");
//         }
//         if (isNaN(age.value)) {
//             throw new Error("Age is not numeric");
//         }
//         console.log("Form is submitted");
//     } catch (err) {
//         errors.innerHTML = err.message;
//     } finally {
//         name.value = "";
//         age.value = "";
//     }

//     e.preventDefault();
// });
//-----------------------------------------
// ES6
//-----------------------------------------
// Arrow Functions

let welcomeES6 = () => {
    console.log("Hello from ES6");
}

welcomeES6();