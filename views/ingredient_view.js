import { ingredientsContainer } from "../index.js";

//wybudowanie widkow

const ingredientComponent = (ingredients) =>
  ingredients
    .map((ingredient) => {
      return `
        <div data-ingredient-id=${ingredient.id} class="ingred-container">
          <input class="ingred-name" type="text" value=${ingredient.name} onblur="updateIngredientName(${ingredient.id})" disabled />
          <div class="ingred-button-container">
            <i class="fa-solid fa-pen-to-square" onclick="onEditButtonClick(${ingredient.id})"></i>
            <i class="fa-solid fa-trash" onclick="onDeleteButtonClick(${ingredient.id})"></i>
          </div>
          </div>
          `;
    })
    .join("");

let ingredientsArray = [
  { name: "chleb", id: 1 },
  { name: "maslo", id: 2 },
  { name: "dzem", id: 3 },
  { name: "kielbasa", id: 4 },
  { name: "cebula", id: 5 },
  { name: "salami", id: 6 },
  { name: "majonez", id: 7 },
  { name: "chleb", id: 11 },
  { name: "maslo", id: 21 },
  { name: "dzem", id: 31 },
  { name: "kielbasa", id: 41 },
  { name: "cebula", id: 51 },
  { name: "salami", id: 61 },
  { name: "majonez", id: 71 },
];

const onDeleteButtonClick = (ingredientId) => {
  ingredientsArray = ingredientsArray.filter(
    (elem) => elem.id !== ingredientId
  );
  createIngredientView();
};

const onEditButtonClick = (ingredientId) => {
  const component = document.querySelector(
    `[data-ingredient-id="${ingredientId}"]`
  );
  const input = component.querySelector("input");
  input.disabled = false;
  input.focus();
};

const updateIngredientName = (ingredientId) => {
  const component = document.querySelector(
    `[data-ingredient-id="${ingredientId}"]`
  );
  const input = component.querySelector("input");
  const ingredientName = input.value;

  ingredientsArray = ingredientsArray.map((elem) => {
    if (elem.id == ingredientId) {
      elem.name = ingredientName;
    }
    return elem;
  });
  console.log(ingredientsArray);
  input.disabled = true;
};

const createIngredientView = () => {
  ingredientsContainer.innerHTML = "";
  ingredientsContainer.innerHTML = ingredientComponent(ingredientsArray);
};

createIngredientView();

//ingredDeleteButton.onclick = function (event) {
//przegladarka robi obsluge tego zdarzenia to automagicznie mi przekazuje ten event
//sygnatura funkcji jest z gory zadana , to jest funkcja ktora na perwszym miejscu przyjmuje ten parametr ktory jest obiektem tego zdarzenia (obiekt 'klassy' event)- a tworze tylko logike
//dodac sobie w css pointer na tym przycisku
//jak to usunac: kazdy element w drzewie DOM ma atrybuty, jest taki jeden co jest kubelkiem na wszystko:
//dataAttribute
// console.dir(event.target);
//debugger;
// const id = Number.parseInt(event.target.dataset.ingredientId);
// ingredientsArray = ingredientsArray.filter((elem) => elem.id !== id);
//rzutowanie: parsInt na klasie number number.parsInt - to sie bierze z prototypu Number
//albo przeciazyc operator dodawania - nie tylko sumowanie ale jako laczenie zbiorow
//dla tego opertaora jesli stringa poprzedzisz plusem to on go skonwertuje na liczbe (sprobuje to zrobic), jak zobaczy: 1 + '1' to da '11' bo jak jest string jako jeden z elementow to on to konkatynuje na stringa ale jesli jest 1 + +'1' to daje 2
