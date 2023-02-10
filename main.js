var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

//Form submit event
form.addEventListener("submit", addItem);
let myObj = {};
//Add item
function addItem(e) {
  e.preventDefault();

  //Get input value
  var newName = document.getElementById("Item").value;
  var newEmail = document.getElementById("emaill").value;
  var newPhone = document.getElementById("pNumber").value;

  myObj.newName = newEmail;
  myObj.newEmail = newEmail;
  myObj.newPhone = newPhone;

  //store object in local object
  //  localStorage.setItem("myObj", myObj); // if directly access myObj then give output: [object, object]

  let myObj_serialized = JSON.stringify(myObj);
  localStorage.setItem(newEmail, myObj_serialized);
  //create new li element
  var li = document.createElement("li");
  //Add text node with input value
  li.appendChild(document.createTextNode(newName));
  li.appendChild(document.createTextNode(newEmail));
  li.appendChild(document.createTextNode(newPhone));
  //Append li to list
  itemList.appendChild(li);
}
