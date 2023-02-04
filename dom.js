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
var headerTitle = document.getElementById("header-title");
var header = document.getElementById("main-header");

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
