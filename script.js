
function handleClick() {

  window.location.href = "about.html";
}

function handleSortBySelection() {
  var selectElement = document.getElementById("sort-by-select");
  var selectedOption = selectElement.value;

  // Perform action based on the selected option
  switch (selectedOption) {
    case "Sort-by":
      // Perform sorting by price
      console.log("Sort by price");
      break;
    case "Most-recent":
      // Perform sorting by name
      console.log("Sort by name");
      break;
    case "Difficulty":
      // Perform sorting by rating
      console.log("Sort by rating");
      break;
    default:
      console.log("Invalid selection");
      break;
  }
}

