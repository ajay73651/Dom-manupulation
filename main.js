let itemList = document.getElementById("items");
let myObj = {};
function onsignup(event) {
  event.preventDefault();
  let name = event.target.username.value;
  let email = event.target.Email.value;
  let Phone = event.target.Phone.value;
  myObj.name = name;
  myObj.email = email;
  myObj.Phone = Phone;
  let myObj_serialized = JSON.stringify(myObj);
  localStorage.setItem(email, myObj_serialized);
  //create li element
  let li = document.createElement("li");
  //create delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  //text for delete button
  deleteBtn.appendChild(document.createTextNode("Delete"));

  //add textnode with input value
  li.appendChild(document.createTextNode(`${name} - ${email} - ${Phone}`));
  //add delete button into li
  li.appendChild(deleteBtn);
  //itemList
  itemList.appendChild(li);
  //Delete event
  itemList.addEventListener("click", removeItem);
  function removeItem(event) {
    if (event.target.classList.contains("delete")) {
      // console.log(1);
      if (confirm("Are you sure?")) {
        var li = event.target.parentElement;
        itemList.removeChild(li);
        localStorage.removeItem(email);
      }
    }
  }
}
