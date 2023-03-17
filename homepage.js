const getLocalStorage = localStorage.getItem("email");

if (getLocalStorage !== null) {
  const collection = document.getElementsByClassName("name-data");
  collection[0].innerHTML = `${getLocalStorage}`;
}

// data dummy
let data = [
  { name: "Anto", age: 25, email: "anto@gmail.com" },
  { name: "Joko", age: 30, email: "joko@gmail.com" },
  { name: "Bobi", age: 35, email: "bobi@gmail.com" },
];

// menampilkan data ke dalam tabel
function showData() {
  let tableBody = document.querySelector("#dataTable tbody");
  tableBody.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let row = "<tr>";
    row += "<td>" + data[i].name + "</td>";
    row += "<td>" + data[i].age + "</td>";
    row += "<td>" + data[i].email + "</td>";
    row += "<td><button class='btn btn-block btn-success btn-xs' type='button' onclick='editData(" + i + ")'>Edit</button>";
    row += "<button class='btn btn-block btn-danger btn-xs' type='button' onclick='deleteData(" + i + ")'>Hapus</button></td>";
    row += "</tr>";
    tableBody.innerHTML += row;
  }
}

// menampilkan data pada saat halaman web dimuat
window.onload = function () {
  showData();
};

// menambah data ke dalam objek data
function addData() {
  let name = document.querySelector("#inputName").value;
  let age = document.querySelector("#inputAge").value;
  let email = document.querySelector("#inputEmail").value;
  data.push({ name: name, age: age, email: email });
  showData();
  alert("Data added successfully");
}

// mengedit data dalam objek data
function editData(index) {
  let name = prompt("Nama baru:", data[index].name);
  let age = prompt("Umur baru:", data[index].age);
  let email = prompt("Email baru:", data[index].email);
  data[index] = { name: name, age: age, email: email };
  showData();
}

// menghapus data dari objek data
function deleteData(index) {
  data.splice(index, 1);
  showData();
  alert("data has been deleted");
}
//logout
function logout() {
  window.localStorage.removeItem("email");
  window.localStorage.removeItem("password");
  window.location.replace("index.html");
}
