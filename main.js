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

//filter items function
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
