//wybodwanie widokow

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
