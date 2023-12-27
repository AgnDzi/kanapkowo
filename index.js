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

const ingredientsArray = [
  "chleb",
  "maslo",
  "dzem",
  "cebula",
  "ogorek",
  "chleb",
  "maslo",
  "dzem",
  "cebula",
  "ogorek",
  "chleb",
  "maslo",
  "dzem",
  "cebula",
  "ogorek",
  "chleb",
  "maslo",
  "dzem",
  "cebula",
  "ogorek",
  "chleb",
  "maslo",
  "dzem",
  "cebula",
  "ogorek",
  "chleb",
  "maslo",
  "dzem",
  "cebula",
  "ogorek",
  "chleb",
  "maslo",
  "dzem",
  "cebula",
  "ogorek",
  "chleb",
  "maslo",
  "dzem",
  "cebula",
  "ogorek",
  "chleb",
  "maslo",
  "dzem",
  "cebula",
  "ogorek",
  "chleb",
  "maslo",
  "dzem",
  "cebula",
  "ogorek",
  "chleb",
  "maslo",
  "dzem",
  "cebula",
  "ogorek",
  "chleb",
  "maslo",
  "dzem",
  "cebula",
  "ogorek",
];

ingredientsArray.forEach((ingredient) => {
  const ingredContainer = document.createElement("div");
  const ingredButtonContainer = document.createElement("div");
  const ingredItemName = document.createElement("span");
  ingredItemName.innerText = ingredient;
  const ingredEditButton = document.createElement("i");
  const ingredDeleteButton = document.createElement("i");
  ingredContainer.appendChild(ingredItemName);
  ingredButtonContainer.appendChild(ingredEditButton);
  ingredButtonContainer.appendChild(ingredDeleteButton);
  ingredContainer.appendChild(ingredButtonContainer);
  ingredItemName.className = "ingred-name";
  ingredEditButton.className = "fa-solid fa-pen-to-square";
  ingredDeleteButton.className = "fa-solid fa-trash";
  ingredContainer.className = "ingred-container";
  ingredButtonContainer.className = "ingred-button-container";
  ingredContent.appendChild(ingredContainer);
});

const recipesArray = [
  "kanapka podstawowa",
  "kanapka z tunczykiem",
  "dzemkanapka z dzemem",
  "kanapka z cebula",
  "kanapka z chlebem",
  "kanapka podstawowa",
  "kanapka z tunczykiem",
  "dzemkanapka z dzemem",
  "kanapka z cebula",
  "kanapka z chlebem",
  "kanapka podstawowa",
  "kanapka z tunczykiem",
  "dzemkanapka z dzemem",
  "kanapka z cebula",
  "kanapka z chlebem",
  "kanapka podstawowa",
  "kanapka z tunczykiem",
  "dzemkanapka z dzemem",
  "kanapka z cebula",
  "kanapka z chlebem",
  "kanapka podstawowa",
  "kanapka z tunczykiem",
  "dzemkanapka z dzemem",
  "kanapka z cebula",
  "kanapka z chlebem",
  "kanapka podstawowa",
  "kanapka z tunczykiem",
  "dzemkanapka z dzemem",
  "kanapka z cebula",
  "kanapka z chlebem",
  "kanapka podstawowa",
  "kanapka z tunczykiem",
  "kanapka z dzemem",
  "kanapka z cebula",
  "kanapka z chlebem",
  "kanapka podstawowa",
  "kanapka z tunczykiem",
  "dzemkanapka z dzemem",
  "kanapka z cebula",
  "kanapka z chlebem",
  "kanapka podstawowa",
  "kanapka z tunczykiem",
  "dzemkanapka z dzemem",
  "kanapka z cebula",
  "kanapka z chlebem",
  "kanapka podstawowa",
  "kanapka z tunczykiem",
  "dzemkanapka z dzemem",
  "kanapka z cebula",
  "kanapka z chlebem",
  "kanapka podstawowa",
  "kanapka z tunczykiem",
  "dzemkanapka z dzemem",
  "kanapka z cebula",
  "kanapka z chlebem",
  "kanapka podstawowa",
  "kanapka z tunczykiem",
  "dzemkanapka z dzemem",
  "kanapka z cebula",
  "kanapka z chlebem",
];

recipesArray.forEach((recipe) => {
  const recipeContainer = document.createElement("div");
  const recipeButtonContainer = document.createElement("div");
  const recipeItemName = document.createElement("span");
  recipeItemName.innerText = recipe;
  const recipeEditButton = document.createElement("i");
  const recipeDeleteButton = document.createElement("i");
  recipeContainer.appendChild(recipeItemName);
  recipeButtonContainer.appendChild(recipeEditButton);
  recipeButtonContainer.appendChild(recipeDeleteButton);
  recipeContainer.appendChild(recipeButtonContainer);
  recipeEditButton.className = "fa-solid fa-pen-to-square";
  recipeItemName.className = "recipe-name";
  recipeDeleteButton.className = "fa-solid fa-trash";
  recipeContainer.className = "recipe-container";
  recipeButtonContainer.className = "recpie-button-container";
  recipesContent.appendChild(recipeContainer);
});
