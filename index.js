const ingredContent = document.getElementById("ingredContent");
ingredContent.style.display = "none";

const recipesContent = document.getElementById("recipesContent");
recipesContent.style.display = "none";

const rightContent = document.getElementById("rightContent");
rightContent.style.display = "flex";

const liIngred = document.getElementById("li-ingred");
liIngred.onclick = function () {
  ingredContent.style.display = "flex";
  rightContent.style.display = "none";
  recipesContent.style.display = "none";
};

const liRecipes = document.getElementById("li-recipes");
liRecipes.onclick = function () {
  recipesContent.style.display = "flex";
  rightContent.style.display = "none";
  ingredContent.style.display = "none";
};

const ingredientsArray = ["chleb", "maslo", "dzem", "cebula", "ogorek"];

ingredientsArray.forEach((ingredient) => {
  const ingredContainer = document.createElement("div");
  const ingredItemName = document.createElement("span");
  ingredItemName.innerText = ingredient;
  const ingredEditButton = document.createElement("button");
  const ingredDeleteButton = document.createElement("button");
  ingredContainer.appendChild(ingredItemName);
  ingredContainer.appendChild(ingredEditButton);
  ingredContainer.appendChild(ingredDeleteButton);
  ingredItemName.className = "ingred-name";
  ingredEditButton.className = "ingred-edit-button";
  ingredDeleteButton.className = "ingred-delete-button";
  ingredContainer.className = "ingred-container";
  ingredContent.appendChild(ingredContainer);
});
