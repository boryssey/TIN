function addRow() {
  let table = document.getElementById('myTable');
  let row = document.createElement("tr");
  let cell1 = document.createElement("td")
  let name = document.createTextNode(document.getElementById('name').value);
  let cell2 = document.createElement("td");
  let pass = document.createTextNode(document.getElementById('surname').value);
  cell1.appendChild(name);
  cell2.appendChild(pass);
  row.appendChild(cell1);
  row.appendChild(cell2);
  table.appendChild(row);
  document.getElementById('name').value = "";
  document.getElementById('surname').value = "";
}
