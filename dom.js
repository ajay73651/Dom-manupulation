//TRAVERSING THE DOM
var itemList = document.querySelector("#items");

//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement;
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement.parentElement);

//NOTE : PareElement and parentNode Both are working same

//childNode -------------//don't use this, practice more using children
// console.log(itemList.childNodes);
//children
// console.log(itemList.children);

//difference b/w childNode And children
//--childNode returns child node (elements, text nodes, and comment nodes).
//-- children returns child elements (not text and comment nodes)
//-- suggetion: you have to use children

// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

//firstChild ---------------//don't use this too, practice more using firstChildElement
// console.log(itemList.firstChild);
//firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello 1";

//lastChild ---------------//don't use this too, practice more using firstChildElement
// console.log(itemList.lastChild);
//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Hello 4";

//--------------------------------------------

//nextSibling
// console.log(itemList.nextSibling);
//nextElementSibling
// console.log(itemList.nextElementSibling); //output in console null because itemList have no next sibling

//previousSibling
// console.log(itemList.previousSibling); //text
//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "green";

//------------------------------------------------
//------createElement

//Create a div
// var newDiv = document.createElement("div");

//add class
// newDiv.className = "Hello";

//add id
// newDiv.id = "Hello-1";

//add attribute
// newDiv.setAttribute("title", "Hello Div");

//create text node
// var newDivText = document.createTextNode("Hello World!");
//add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector("header .container");
// var h1 = document.querySelector("header h1");
// console.log(h1);

// console.log(newDiv);

// newDiv.style.fontSize = "30px";
// container.insertBefore(newDiv, h1);

//......................................
//.....................................
//------------Task 7
//create new div
var newDiv = document.createElement("div");
//create text node
var newDivText = document.createTextNode("Hello World!");
// add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");
container.insertBefore(newDiv, h1);
var newDiv = document.createElement("div");
var newDivText = document.createTextNode("Hello World!");

newDiv.appendChild(newDivText);
var item1 = document.querySelector("div ul");
var li1 = document.querySelector("ul li");
item1.insertBefore(newDiv, li1);
