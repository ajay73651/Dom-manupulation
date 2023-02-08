var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

//Form submit event
form.addEventListener("submit", addItem);
//Delete event
itemList.addEventListener("click", removeItem);
//filter items
filter.addEventListener("keyup", filterItems);

//Add item
function addItem(e) {
  e.preventDefault();

  //Get input value
  var newItem = document.getElementById("Item").value;
  var newDescription = document.getElementById("description").value;
  localStorage.setItem("addItem", newItem);
  localStorage.setItem("addItem", newDescription);
  //create new li element
  var li = document.createElement("li");

  //Add class
  li.className = "list-group-item";
  //   console.log(li);

  //Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(newDescription));

  // create delete button element
  var deleteBtn = document.createElement("button");

  //Add classes to del btn
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  //Append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  //Append button to li
  li.appendChild(deleteBtn);

  //Append li to list
  itemList.appendChild(li);
}

//remove function
function removeItem(e) {
  // console.log(1);
  if (e.target.classList.contains("delete")) {
    // console.log(1);
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//filter items  AND escriptions function
function filterItems(e) {
  //convert text to lowercase
  var text = e.target.value.toLowerCase();
  //get lis
  var items = itemList.getElementsByTagName("li");
  //convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    var descName = item.childNodes[1].textContent;
    if (
      itemName.toLocaleLowerCase().indexOf(text) &&
      descName.toLocaleLowerCase().indexOf(text) != -1
    ) {
      item.style.display = "black";
    } else {
      item.style.display = "none";
    }
  });
}

// ------------------------------------------------------------------------

/*
//-------Application (localStorage, sessionStorage, cookies)
//local storage
//set local storage value
localStorage.setItem("name", "bob");
//get local storage value
// console.log(localStorage.getItem("name"));
//remove set value
localStorage.removeItem("name");
console.log(localStorage.getItem("name"));

//session storage
sessionStorage.setItem("name", "john");
console.log(sessionStorage.getItem("name"));
sessionStorage.removeItem("name");
sessionStorage.setItem("name", "bob");
//Note: it will override the value whereas john
//so output become name bob on the place of name john

//cookies
document.cookie =
  "name = kyle; expires = " + new Date(2024, 0, 1).toUTCString();

document.cookie =
  "lastName = Smith; expires = " + new Date(9999, 0, 1).toUTCString();

console.log(document.cookie);

// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------

//-----------------------Debugging---------------------------------------------------------
let x = 1;
// console.log("aaaaa", x);
let y = 2;
console.log("zzzz", "x =", x, "y=", y);

const f = function () {};

console.log("f=", f); // output : f= ƒ () {}

console.dir(f); // we can get more details using dir

let a = [1, 2, 3];
console.log(a);
console.log(JSON.parse(JSON.stringify(a)));
a.push(4);
console.log(a);
console.log(JSON.parse(JSON.stringify(a)));
// ...........................
console.table(a, ["age", "eyeColor"]);

// --------------------------------
console.time("st");
console.time("something else");
setTimeout(() => {
  console.timeEnd("st");
}, 5000);
console.timeEnd("something else");

//------------------------------------
let p = 1;
let q = 2;

debugger;

/*
What is HTML Web Storage?
With web storage, web applications can store data locally within the user's browser.
Before HTML5, application data had to be stored in cookies, included in every server request. Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance.
Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the server.
Web storage is per origin (per domain and protocol). All pages, from one origin, can store and access the same data.

window.localStorage - stores data with no expiration date
window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)

*/

// -----------------------------------------------------------------------------
