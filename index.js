let userRole = null;
//potrzebuje cos, zeby robic zasiegi a tego nie trzeba tu czyscic a jak dam local storage to trzeba czyscic

const loginFailedMsg = document.getElementById("pLogin");

const ingredContent = document.getElementById("ingredContent");
ingredContent.style.display = "none";

const recipesContent = document.getElementById("recipesContent");
recipesContent.style.display = "none";

const loginForm = document.getElementById("loginForm");
loginForm.style.display = "flex";

const rightContent = document.getElementById("rightContent");
rightContent.style.display = "none";

const leftMenu = document.getElementById("leftMenu");
leftMenu.style.display = "none";

const productList = document.getElementById("productList");
productList.style.display = "none";

const liIngred = document.getElementById("li-ingred");
liIngred.onclick = function () {
  ingredContent.style.display = "flex";
  rightContent.style.display = "none";
  recipesContent.style.display = "none";
  leftMenu.style.display = "block";
  loginForm.style.display = "none";
};

const liRecipes = document.getElementById("li-recipes");
liRecipes.onclick = function () {
  recipesContent.style.display = "flex";
  rightContent.style.display = "none";
  ingredContent.style.display = "none";
  leftMenu.style.display = "block";
  loginForm.style.display = "none";
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

const mockedLoginService = () => {
  const usersArray = [
    { login: "user1", password: "pass1", rola: "customer" },
    { login: "user2", password: "pass2", rola: "cook" },
  ];
  const authenticateUser = (login, password) => {
    const foundUser = usersArray.find(
      (user) => user.login === login && user.password === password
    );
    if (foundUser) {
      return { role: foundUser.rola };
    } else {
      return { errorMsg: "Incorrect password or login" };
    }
  };

  return { authenticateUser };
};

//przyjmie parametr
const handleSubmit = (event) => {
  event.preventDefault();

  const loginName = event.target.elements.loginName.value;
  const password = event.target.elements.password.value;

  //target czyli tam gdzie jest obslugiwane a curenttarget to skad wyszlo- zrodlo
  const serviceResponse = mockedLoginService().authenticateUser(
    loginName,
    password
  );

  userRole = serviceResponse.role ?? null;

  if (serviceResponse.role === "cook") {
    leftMenu.style.display = "block";
    rightContent.style.display = "block";
    loginForm.style.display = "none";
    location.hash = "cook-view";
  } else if (serviceResponse.role === "customer") {
    productList.style.display = "flex";
    loginForm.style.display = "none";
    location.hash = "customer-view";
  } else {
    loginFailedMsg.innerText = serviceResponse.errorMsg ?? "jepjep"; //bo to jako default wartosc jakby nie bylo tej waidmosci, gdy null lub undefined
    //paragraf sobie dorobic zeby wrzucac ten tekst
    console.log("dupa");
  }
};

//te url zmiany: uzywac tego HASH od location HASH (lokalizacja na stornie wiec nei strzela pod adres w necie tylko bedzie przechodzilo po tym dokumencie )
// hash change event

window.addEventListener(
  "hashchange",
  (event) => {
    console.log(event);
    const path = location.hash;

    if (path.includes("cook") && userRole === "cook") {
      console.log("poprawna rola");
    } else if (path.includes("customer") && userRole === "customer") {
      console.log("poprawna rola");
    } else {
      alert("niepoprawna rola");
      const oldHash = event.oldURL.slice(event.oldURL.indexOf("#") + 1) ?? "";
      location.hash = oldHash;
      console.log(oldHash);
    }
  },
  false
);
//tu musze jeszcze zrobic validacje czy gdy zmieni sie hash czy rola pozwala na wejscie na te podstorne czyli znowu zamokowac taka mape: rola + hashe, gdy sie nie zgodza to trzebaby cofnac na poprzedni adres
//albo nie hash tylko objekt na window: history - i metody push state/replay state

// const productsArray = [{name: 'kanapka1', composition: 'chleb,slonina,dzem', photo: },{name: 'kanapka2', composition: 'chleb,slonina,dzem', photo:}]

// productsArray.forEach((product) =>{

// })
