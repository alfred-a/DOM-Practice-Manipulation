// 1: Set the text of the <h1> element
const h1 = document.querySelector("h1");
h1.textContent = "Weekend Activities";

// 2: Set the color of the <h1> to a different color
h1.style.color = "pink";

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const description = document.querySelector(".desc");
const descText = "<b>fun stuff!</b>";
description.innerHTML = descText;

// 4: Set the class of the <ul> to 'list'
const ulClass = document.querySelector("ul");
ulClass.className = "list";

// 5: Create a new list item and add it to the <ul>

const item = document.createElement("li");
item.innerHTML = "<input> Eat ice cream";
ulClass.appendChild(item);

// 6: Change all <input> elements from text fields to checkboxes
const input = document.getElementsByTagName("input");
for (var i = 0; i < input.length; i++) {
  input[i].type = "checkbox";
}

// 7: Create a <button> element, and set its text to 'Delete'
const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";

// Add the <button> inside the '.extra' <div>
const extra = document.querySelector(".extra");
extra.appendChild(deleteButton);

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
const container = document.querySelector(".container");
deleteButton.addEventListener("click", () => {
  container.removeChild(extra);
});
