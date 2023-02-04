//EXAMINE THE DOCMENT OBJECT

// console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);

// //this is not write way to select anything from the dom: it will be change if html update
// document.all[10].textContent = "Hello";
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

//GET ELEMENT BY ID
// console.log(document.getElementById("header-title"));

// var headerTitle = document.getElementById("header-title");
// var header = document.getElementById("main-header");

// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerHTML = "GoodBye";

// // this will show all parent and child id/class  text under the id : header-title
// console.log(headerTitle.textContent);
// //this will show only parent class or id
// console.log(headerTitle.innerText);

// headerTitle.innerHTML = "<h3>Hello</h3>";
// headerTitle.style.borderBottom = "solid 3px black";
// header.style.borderBottom = "solid 3px black";

//GET ELEMENT BY CLASSNAME
// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";

// //gives error
// // items.style.backgroundColor = "gray";

//correct
// for (var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "gray";
// }

// //--------------task
// var items = document.getElementsByClassName("list-group-item");
// // Make the 3 rd element in the list have green background color
// items[2].style.backgroundColor = "green";

// // Make all the elements in the list have bold color font
// for (var i = 0; i < items.length; i++) {
//   items[i].style.fontWeight = "bold";
// }

// GET ELEMENT BY TAGNAME
// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";

//gives error
//li.style.backgroundColor = "gray";

//correct
// for (var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "#ccc";
// }

//querySelector
// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #ccc";

// var input = document.querySelector("input");
// input.value = "Hello World";

// var submit = document.querySelector('input[type = "submit"]');
// submit.value = "SEND";

// var item = document.querySelector(".list-group-item");
// item.style.color = "red";

// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "coral";

//QUERYSELECTORALL
// var title = document.querySelectorAll(".title");
// console.log(title);
// title[0].textContent = "Hello";

// var odd = document.querySelectorAll("li:nth-child(odd)");
// var even = document.querySelectorAll("li:nth-child(even)");
// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "#f4f4f4";
//   even[i].style.backgroundColor = "#ccc";
// }

//------------task 6
// Make the 2nd item have green background color
var secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.backgroundColor = "green";
// Make the 3rd item invisible
var thirdItem = document.querySelector(".list-group-item:nth-child(3)");
thirdItem.style.visibility = "hidden";

// Using QuerySelectorALL change the font color to green for 2nd item in the item list
var secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.color = "green";
// Choose all the odd elements and make their background green using QuerySelectorALL
var odd = document.querySelectorAll("li:nth-child(odd)");
for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green";
}
//note: loop will stop because 3rd row invisible
