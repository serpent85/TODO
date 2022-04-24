let input = document.getElementById("IADD");
let button = document.getElementById("ADD");
let item = document.getElementById("ITEM");

button.addEventListener("click", ADD);
function ADD() {
  var items = document.createElement("item");
  items.innerHTML = input.value;
  item.appendChild(items);
  // var Dbtn = document.createElement("button");
  // item.appendChild(Dbtn);
  // Dbtn.classList.add("button");
  // Dbtn.innerHTML = "DELETE";
  items.classList.add("MainItem");
  input.value = "";
  items.addEventListener("click", function () {
    items.remove();
  });
}
