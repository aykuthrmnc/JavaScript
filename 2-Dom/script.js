// Single Elements

// document.getElementById
// document.getElementById("header").style.fontSize = "45px";
// document.getElementById("header").style.color = "red";
// document.getElementById("header").style.fontWeight = "bold";
// document.getElementById("header").style.display = "none";
// document.getElementById("header").innerText = "Aykut Harmancı";
// document.getElementById("header").innerText = "<b>Aykut Harmancı</b>";
// document.getElementById("header").innerHTML = "<b>Aykut Harmancı</b>";

// document.querySelector
// document.querySelector("#header");
// document.querySelector(".card-header");
// document.querySelector("h1");
// document.querySelector("div"); // Ilk elemani secer
// document.querySelector("li").style.color = "red";
// document.querySelector("li:last-child").style.color = "blue";
// document.querySelector("li:nth-child(2)").style.color = "yellow";
// document.querySelector("li:nth-child(3)").textContent = "task item";
// document.querySelector("li").className = "list-group-item list-group-item-primary";
// document.querySelector("li").classList.add("active");

// ----------------------------------------------------
// Multiple Elements

// document.getElementsByClassName
// document.getElementsByClassName("list-group-item")[0];
// document.getElementsByClassName("list-group-item")[0].style.color = "red";
// document.getElementsByClassName("list-group-item")[0].textContent = "new item";

// let val = document.getElementsByClassName("list-group-item");
// for (let i = 0; i < val.length; i++) {
//     console.log(val[i].textContent = i+1 + ". item");   
// }

// document.getElementsByTagName
// console.log(document.getElementById("task-list").getElementsByTagName("a"));

// document.querySelectorAll
// let val = document.querySelectorAll("li");
// val.forEach(function(item,index){
//     item.textContent = `${index} - hello`;
// });
// console.log(val);

// let val = document.querySelectorAll("li:nth-child(odd)");
// val.forEach(function(item){
//     item.style.background = "#ccc";
// });
// console.log(val);
// ----------------------------------------------------
// Traversing the Dom

// let list = document.querySelector(".list-group");
// console.log(list);

// let val = list.childNodes;
// console.log(val);

// let val = list.children;
// console.log(val);
// list.children[2].textContent="new item";
// list.children[2].children;
// ----------------------------------------------------
// Creating Elements

// const li = document.createElement("li");

// // add class
// li.className ="list-group-item list-group-item-secondary";

// // attribute
// li.setAttribute("title","new item");
// li.setAttribute("data-id","5");

// // text node
// const text = document.createTextNode("new item");
// li.appendChild(text);
// li.innerHTML = "new item"; // 2. Yontem

// const a = document.createElement("a");
// a.setAttribute("href","#");
// a.className="delete-item float-end";
// a.innerHTML='<i class="fas fa-times"></i>';

// // append a to li
// li.appendChild(a);

// // append li to ul
// document.querySelector('#task-list').appendChild(li);

// console.log(li);
// ----------------------------------------------------
// Delete and Update Elements
// const taskList = document.querySelector('#task-list');

// removing element
// taskList.remove();
// taskList.childNodes[7].remove();
// taskList.children[3].remove();
// taskList.removeChild(taskList.children[3]);

// removing attribute
// taskList.children[0].removeAttribute('class');
// for (let i = 0; i < taskList.children.length; i++) {
//     taskList.children[i].removeAttribute('class');
// }
// console.log(taskList);

// Replacing Elements
// const cardHeader = document.querySelector('.card-header');

// create element
// const h2 = document.createElement('h2');
// h2.setAttribute('class','card-header');
// h2.appendChild(document.createTextNode('My list'));

// const parent = document.querySelector('.card');
// parent.replaceChild(h2, cardHeader);
// console.log(cardHeader);

// Classes
// let val;
// let link = taskList.children[0].children[0];

// val = link.className;
// val = link.classList;
// val = link.classList[1];

// link.classList.add('new');
// link.classList.remove('new');

// val = link.getAttribute('class');
// val = link.setAttribute('href','https://google.com');
// val = link.hasAttribute('href');

// console.log(val);
// ----------------------------------------------------
// Event Listeners

// const btn = document.querySelector('#btnDeleteAll');
// const btn2 = document.querySelector('#btnAddNewTask');

// btn.addEventListener('click',function(){
//     console.log('btn clicked'); 
// });
// btn.addEventListener('click',btnClick);
// btn.addEventListener('click',btnClick2);
// btn2.addEventListener('click',btnClick);
// function btnClick() {
//     console.log('btn clicked'); 
// }
// function btnClick2() {
//     console.log('btn 2 clicked'); 
// }
// function btnClick(e){
//     document.querySelector('#' + e).addEventListener('click',function(event){
//         event.preventDefault();
//     });
// }

// btn2.addEventListener('click',function(e){
//     e.preventDefault(); // Scroll sabit yerinde kalir
//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.classList);
//     console.log(e.type);
// });
// ----------------------------------------------------
// Mouse Events

// const btn = document.querySelector('#btnDeleteAll');
// const ul = document.querySelector('#task-list');

// click
// btn.addEventListener('click',eventHandler);
// ul.addEventListener('click',eventHandler);

// double click
// btn.addEventListener('dblclick',eventHandler);

// mousedown
// btn.addEventListener('mousedown',eventHandler);
// mouseup
// btn.addEventListener('mouseup',eventHandler);

// mouseenter ** Nesnenin kapsama alanina girince calisir
// ul.addEventListener('mouseenter',eventHandler);
// mouseleave ** Nesnenin kapsama alanindan cikinca calisir
// ul.addEventListener('mouseleave',eventHandler);

// mouseover ** Nesne icindeki baska elemana gidince calisir
// ul.addEventListener('mouseover',eventHandler);
// mouseout ** Nesne icindeki baska elemana gidince calisir
// ul.addEventListener('mouseout',eventHandler);

// mousemove
// ul.addEventListener('mousemove',eventHandler);
// const h5 = document.querySelector('h5');

// function eventHandler(event) {
//     console.log(`event type : ${event.type}`);
//     h5.textContent = `Mouse X : ${event.offsetX} Mouse Y : ${event.offsetY}`;
// }
// ----------------------------------------------------
// Keyboard Events

// const input = document.querySelector('#txtTaskName');
// const form = document.querySelector('form');
// const select = document.querySelector('#select');

// input.addEventListener('keydown',eventHandler);
// input.addEventListener('keyup',eventHandler);
// input.addEventListener('keypress',eventHandler);

// input.addEventListener('focus',eventHandler);
// input.addEventListener('blur',eventHandler);

// input.addEventListener('cut',eventHandler);
// input.addEventListener('paste',eventHandler);
// input.addEventListener('select',eventHandler);

// form.addEventListener('submit',eventHandler);

// select.addEventListener('change',eventHandler);

// function eventHandler(e) {
//     console.log('event type :' + e.type);
//     console.log('key code :' + e.keyCode);
//     console.log('value :'+e.target.value);
//     e.target.style.backgroundColor = 'yellow';
//     e.preventDefault();
// }
// ----------------------------------------------------
// Event Bubbling

// const form = document.querySelector('form');
// const cardBody = document.querySelector('.card-body');
// const card = document.querySelector('.card');
// const container = document.querySelector('.container');

// form.addEventListener('click',function(e){
//     console.log('form');
//     e.stopPropagation();
// });
// cardBody.addEventListener('click',function(e){
//     console.log('cardBody');
//     e.stopPropagation();
// });
// card.addEventListener('click',function(e){
//     console.log('card');
//     e.stopPropagation();
// });
// container.addEventListener('click',function(e){
//     console.log('container');
//     e.stopPropagation();
// });

// Event Capturing
// form.addEventListener('click',function(e){
//     console.log('form');
// },true);
// cardBody.addEventListener('click',function(e){
//     console.log('cardBody');
// },true);
// card.addEventListener('click',function(e){
//     console.log('card');
// },true);
// container.addEventListener('click',function(e){
//     console.log('container');
//     e.stopPropagation();
// },true);

// const deleteItems = document.querySelectorAll('.fa-times');
// deleteItems.forEach(function(item) {
//     item.addEventListener('click',function(e) {
//         console.log(e.target);
//     })
// });

// const ul = document.querySelector('ul');
// ul.addEventListener('click',function(e) {
//     if (e.target.className === 'fas fa-times') {
//         console.log(e.target.parentElement.parentElement.remove());
//         e.preventDefault();
//     }
// });
// ----------------------------------------------------
// Local Storage

// let val;

// set item
// const firstName = localStorage.setItem('firstName','Aykut');
// const lastName = localStorage.setItem('lastName','Harmancı');
// let hobbies = ['sinema','araba','gezmek'];

// get item
// val = localStorage.getItem('firstName');

// remove item
// localStorage.removeItem('firstName');

// clear
// localStorage.clear();

// set array to storage
// localStorage.setItem('hobbies', JSON.stringify(hobbies));
// val = JSON.parse(localStorage.getItem('hobbies'));

// console.log(val);
// console.log(localStorage);

// Session Storage

// const city = sessionStorage.setItem('city','Konya');
// const country = sessionStorage.setItem('country','Türkiye');
// console.log(sessionStorage);
// ----------------------------------------------------
// Kopyala-Kes-Yapistir Ozelliklerini Kapatma
// $(document).ready(function(){ 
//     $('#txtTaskName').on("cut copy paste",function(e) {
//         e.preventDefault();
//     });
// });
// Html Uzerinde Kapatma
// onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" onPaste="return false"