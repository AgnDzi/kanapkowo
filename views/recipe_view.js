//wybodwanie widokow
const clickRecipeHandler = (event) => {
  const id = Number.parseInt(event.target.dataset.recipeId);
  // robie sobie console.dir i wtedy obczajam co to tam mam - jest dataset ale tam wszystko jest typu string wiec trzeba to przeparsowac na Int
  recipesArray = recipesArray.filter((elem) => elem.id !== id);
  createRecipeView();
};

//dataset dostarcza przegladarka - zbiór - tam mozesz dodac wlasne atrybuty (wlasne zmienne) dla danaego wyrenderowanego elementu drzewa DOM- konwencja jest taka ze piszesz : data-xxx(co chce sie) i wtedy jest parsowany html przez przegladarke i zamienany na objekty drzewa DOM (te node)
//gdy widzi 'data-xxx' wie ze to jest dla tego obiektu taka wlasciwosc data set - robi klucz i wartosc
//ta dataset jest typu DOMStringMap weic trzeba to sparsowac na INT

let recipesArray = [
  { name: "kanapka z lastryko", id: 1 },
  { name: "kanapka z dzemem", id: 2 },
  { name: "kanapka z miodem", id: 3 },
  { name: "kanapka z szynka", id: 4 },
  { name: "kanapka z ijij", id: 5 },
  { name: "kanapka z maslem", id: 6 },
  { name: "kanapka z boczkiem", id: 7 },
  { name: "kanapka z chlebem", id: 8 },
];

const markupRecipe = (recipe) =>
  recipe
    .map((recip) => {
      return `
  <div class="recipe-container">
    <span class="recipe-name">${recip.name}</span>
    <div class="recpie-button-container">
      <i class="fa-solid fa-pen-to-square"></i>
      <i data-recipe-id=${recip.id} class="fa-solid fa-trash" onclick="return clickRecipeHandler(event)"></i>
    </div>
  </div>`;
    })
    .join("");

const createRecipeView = () => {
  recipesContent.innerHTML = "";
  recipesContent.innerHTML = markupRecipe(recipesArray);
};
createRecipeView();
