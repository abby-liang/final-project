function fave(id) {
    console.log("entered favorite function");

  if (id.checked) {
    console.log("favorite box checked");

    var label = id.previousSibling.previousSibling;
    label.innerHTML = "Favorited &#9829;";
    label.style.color = "#C20544";

    console.log(id.parentElement.parentElement);
    var food = label.parentElement.parentElement;
    food.classList.add("favorite");

  } else {
    console.log("favorite box unchecked");

    var label = id.previousSibling.previousSibling;
    label.innerHTML = "Favorite &#9825;";
    label.style.color = "#595959";

    console.log(id.parentElement.parentElement);
    var food = label.parentElement.parentElement;
    food.classList.remove("favorite");
  }
}

// document.querySelector("#yourFavorites").addEventListener("click", function() {
// 	// document.querySelector("#print").style.display = "inline";
// });