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
var li = document.getElementsByTagName("li");
console.log(li);
console.log(li[1]);
li[1].textContent = "Hello 2";
li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";

//gives error
//li.style.backgroundColor = "gray";

//correct
for (var i = 0; i < li.length; i++) {
  li[i].style.backgroundColor = "#ccc";
}

//querySelector
var header = document.querySelector("#main-header");
header.style.borderBottom = "solid 4px #ccc";
