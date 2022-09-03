var enterButton = document.getElementById("enter");
var input = document.getElementById("task");
var ul = document.getElementById("list");
var item = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}

function add() {
  var li = document.createElement("li");

  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  function crossOut() {
    li.classList.toggle("done");
  }

  li.addEventListener("click", crossOut);

  var dBtn = document.createElement("btn");
  dBtn.appendChild(document.createTextNode("X"));
  li.appendChild(dBtn);
  dBtn.addEventListener("click", deleteListItem);

  function deleteListItem() {
    li.classList.add("delete");
  }
}
