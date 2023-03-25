// console.log('Merhaba');
// console.error('Hata');
// console.warn('Uyarı');
// ----------------------------------------------------
// === veya !== Deger ve tip kontrolu yapar
// ----------------------------------------------------
// Yas hesaplama
// var birthday = new Date('12/18/1997');
// var year = Date.now() - birthday.getTime();
// var yas = new Date(year);
// console.log(yas.getFullYear() - 1970);
// ----------------------------------------------------
// val = Math.PI;
// val = Math.round(2.4);
// val = Math.round(2.7);
// val = Math.ceil(2.4);
// val = Math.ceil(2.7);
// val = Math.floor(2.4);
// val = Math.floor(2.7);
// val = Math.sqrt(64);
// val = Math.pow(2,4);
// val = Math.abs(-100);
// val = Math.min(1,2,3,4,5,6,7,8,9);
// val = Math.max(1,2,3,4,5,6,7,8,9);
// val = Math.round(Math.random()*100+1);
// ----------------------------------------------------
// var val = "Aykut Harmancı";
// val = val.concat(' ',"Harmancı");
// val = val.indexOf("ar");
// val = val.includes("ar");
// val = val.toUpperCase();
// val = val.toLowerCase();
// val = val.substring(0,5);
// val = val.slice(6);
// val = val.replace('a','e');
// val = val.slice();
// console.log(val);
// ----------------------------------------------------
// var hobbies = "sinema spor,kitap+yazılım";
// val = hobbies.split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\+]/);

// var url = "http://aykuthrmnc.com/Modern Javascript KURSU sıfırdan ileri seviye ü ö ş";
// console.log(url.toLowerCase()
//                .replace(/ /g,'-')
//                .replace(/ı/g,'i')
//                .replace(/ü/g,'u')
//                .replace(/ö/g,'o')
//                .replace(/ş/g,'s')
// );

// console.log(val);
// console.log(typeof val);
// ----------------------------------------------------
// const fullName = "Aykut Harmancı";
// const city = "Konya";
// const yearOfBirth = 1997;
// var val = `my name is ${fullName} I'm ${(2021-yearOfBirth>=18)?'over 18':'under 18'} and I live in ${city}`;
// console.log(val);
// ----------------------------------------------------
// Arrays

// let mix = ['Aykut','Harmancı',1997,null,undefined,["Html","Css"]];
// let years = [2017,1999,2012,2010];

// mix[mix.length] = "ArtıBir";
// console.log(mix);
// console.log(typeof mix);
// console.log(mix.length);

// Add and Delete
// years.push(2021);
// years.unshift(0);
// years.pop();
// years.shift();
// console.log(years.indexOf(199));
// console.log(years);

// Reverse
// years.reverse();

// Sort
// years.sort()

// Concat
// let val = years.concat(mix);
// console.log(val);

// Splice
// console.log(mix);
// mix.splice(2,0,"Seda");
// console.log(mix);
// mix.splice(0,1);
// console.log(mix);


// function over18(year){
//     let age = 2021 - year;
//     return age>=18;
// }

// Find
// let val = years.find(over18);

// Filter
// let val = years.filter(over18);

// console.log(val);

// ----------------------------------------------------
// var numbers = [1,2,5,80,15];

// function compare(a,b){
//     if (a>b) return 1;
//     if (a==b) return 0
//     if (a<b) return -1;
// }

// console.log(numbers.sort(compare));
// ----------------------------------------------------
// Object Literals

// let person = {
//     firstName : "Aykut",
//     lastName : "Harmancı",
//     age : 23,
//     hobbies : ["music","game"],
//     address : {
//         city : "Konya",
//         country : "Turkiye"
//     },
//     getBirthYear : function(){
//         return 2021-this.age;
//     }
// }

// let val = person.getBirthYear();
// console.log(val);

// let people = [
//     {firstName : "Aykut", lastName : "Harmancı"},
//     {firstName : "Mehmet", lastName : "Yıldız"},
//     {firstName : "Aykut", lastName : "Harmancı"}
// ];

// let val;
// val = people[2];
// val = people[2].firstName;

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].firstName);
// }
// ----------------------------------------------------
// Arrays

// let cars = ["Bmw","Mercedes","Toyota"];
// let people = [
//     { firstName: "Aykut", lastName: "Harmancı" },
//     { firstName: "Mehmet", lastName: "Yıldız" },
//     { firstName: "Aykut", lastName: "Harmancı" }
// ]

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// for (let i in cars) {
//     console.log(cars[i]);
// }

// cars.forEach(function(item){
//     console.log(item);
// });

// map : returns an array
// let val = people.map(function(item){
//     return item.firstName + " " + item.lastName;
// });
// console.log(val);

// let numbers = [1, 5, 6, 8, 10];
// let num = numbers.map(function(n){
//     return n*n;
// });
// console.log(num);
// ----------------------------------------------------
// Functions Declarations

// function sum(a,b) {
//     return a+b;
// }

// console.log(sum(10,20));

// Function Expression

// const sum = function(a,b=0) {
//     return a+b;
// }
// console.log(sum(10,20));
// console.log(sum(10)); // NaN

// function sumAll() {
//     var total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total;
// }
// console.log(sumAll(10,20,30,40));
// ----------------------------------------------------
// Window Object

// let val;

// alert
// alert('Merhaba');

// prompt
// var n = prompt("Bir sayı giriniz");
// console.log(n);

// confirm
// var confirm = confirm("Emin misiniz?");
// console.log(confirm);

// scroll
// val = window.scrollX;
// val = window.scrollY;

// location
// val = window.location;
// val = window.location.href;
// val = window.location.hostname;
// val = window.location.host;
// val = window.location.protocol;
// val = window.location.search;

// window.location.href='https://google.com';
// window.location.reload();

// navigator
// val = window.navigator;

// document
// val = window.document;
// val = document.getElementById("header");

// console.log(val);
