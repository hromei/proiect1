function addItem(){
	var ul = document.getElementById("shopping-list");
  var name= document.getElementById("name");
  var cantitate= document.getElementById("cantitate");
  var li = document.createElement("li");
  li.setAttribute('id',name.value);
  li.setAttribute('id',cantitate.value);
  li.appendChild(document.createTextNode(name.value));
  li.appendChild(document.createTextNode(cantitate.value));
  
  ul.appendChild(li);
}

function save()
{
    //convert a data array to a string
    // Save current items list to localstorage
    localStorage.items = JSON.stringify(ul.items);
}

function load(){
     //convert the contents of localStorage back into something we can work with later in the data variable
    // Load shopping list
    ul.items = JSON.parse(localStorage.items);

    
}

window.addEventListener("load", function () {
  ul.load();
  document.getElementById("shopping-list").addEventListener("submit", shopper.add);
})
