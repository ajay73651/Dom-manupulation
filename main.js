var seletedRow = null;

function onFormSubmit() {
  var formData = readFormData();
  insertNewRecord(formData);
  var formData1 = JSON.stringify(formData);
  localStorage.setItem(formData.email, formData1);
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["fullname"] = document.getElementById("fullname").value;
  formData["email"] = document.getElementById("email").value;
  formData["phone"] = document.getElementById("phone").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullname;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.email;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.phone;
  cell5 = newRow.insertCell(3);
  cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                    <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
  document.getElementById("fullname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  seletedRow = null;
}

function onEdit(td) {
  onDelete(td);
  seletedRow = td.parentElement.parentElement;
  document.getElementById("fullname").value = seletedRow.cells[0].innerHTML;
  document.getElementById("email").value = seletedRow.cells[1].innerHTML;
  document.getElementById("phone").value = seletedRow.cells[2].innerHTML;
  let formData2 = readFormData();
  console.log(formData2);
  localStorage.removeItem(formData2.email, formData2);
}

function onDelete(td) {
  row = td.parentElement.parentElement;
  localStorage.removeItem(row.cells[1].innerHTML);
  document.getElementById("employeeList").deleteRow(row.rowIndex);
  resetForm();
}
