//wybudowanie widkow

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

const createIngredView = () => {
  ingredContent.innerHTML = "";
  ingredientsArray.forEach((ingredient) => {
    const ingredContainer = document.createElement("div");
    const ingredButtonContainer = document.createElement("div");
    const ingredItemName = document.createElement("span");
    ingredItemName.innerText = ingredient.name;
    const ingredEditButton = document.createElement("i");
    const ingredDeleteButton = document.createElement("i");
    ingredDeleteButton.dataset.ingredientId = ingredient.id;
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

    ingredDeleteButton.onclick = function (event) {
      //przegladarka robi obsluge tego zdarzenia to automagicznie mi przekazuje ten event
      //sygnatura funkcji jest z gory zadana , to jest funkcja ktora na perwszym miejscu przyjmuje ten parametr ktory jest obiektem tego zdarzenia (obiekt 'klassy' event)- a tworze tylko logike
      //dodac sobie w css pointer na tym przycisku
      //jak to usunac: kazdy element w drzewie DOM ma atrybuty, jest taki jeden co jest kubelkiem na wszystko:
      //dataAttribute
      console.dir(event.target);
      //debugger;
      const id = Number.parseInt(event.target.dataset.ingredientId);
      ingredientsArray = ingredientsArray.filter((elem) => elem.id !== id);
      //rzutowanie: parsInt na klasie number number.parsInt - to sie bierze z prototypu Number
      //albo przeciazyc operator dodawania - nie tylko sumowanie ale jako laczenie zbiorow
      //dla tego opertaora jesli stringa poprzedzisz plusem to on go skonwertuje na liczbe (sprobuje to zrobic), jak zobaczy: 1 + '1' to da '11' bo jak jest string jako jeden z elementow to on to konkatynuje na stringa ale jesli jest 1 + +'1' to daje 2
      createIngredView();

      //metoda: filter
    };
    //ingredEditButton.onclick = function () { };
  });
};

createIngredView();
