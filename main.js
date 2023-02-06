var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

//Form submit event
form.addEventListener("submit", addItem);
//Delete event
itemList.addEventListener("click", removeItem);

//Add item
function addItem(e) {
  e.preventDefault();

  //Get input value
  var newItem = document.getElementById("Item").value;

  //create new li element
  var li = document.createElement("li");

  //Add class
  li.className = "list-group-item";
  //   console.log(li);

  //Add text node with input value
  li.appendChild(document.createTextNode(newItem));

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
