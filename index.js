//let userRole = null;
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

const productListContent = document.getElementById("productList");
productListContent.style.display = "none";

const liIngred = document.getElementById("li-ingred");
liIngred.onclick = function () {
  toggleViewVisibility(true);
};

const liRecipes = document.getElementById("li-recipes");
liRecipes.onclick = function () {
  toggleViewVisibility(false);
};

//przebudowa ONCLICKA:
const toggleViewVisibility = (isVisible) => {
  leftMenu.style.display = "block";
  loginForm.style.display = "none";
  rightContent.style.display = "none";
  if (isVisible) {
    ingredContent.style.display = "flex";
    recipesContent.style.display = "none";
  } else {
    ingredContent.style.display = "none";
    recipesContent.style.display = "flex";
  }
};

//
//
//
//
//

// const funckja_zewnentrzna = () => {
//   const imie = "Aga";
//   const funkcja_wewnetrzna = () => {
//     return "Cześć " + imie;
//   };

//   return funkcja_wewnetrzna;
// };

// const wywolanie_funkcji_zewnetrznej = funckja_zewnentrzna();

// wywolanie_funkcji_zewnetrznej(); // 'Cześć Aga'
//kiedy funckaj zosataje wywoalana to juz jej nie ma i dlatego ma mnie zdziwic ze skad on nie wie co podstawic pod stala IMIE skoro po wywolaniu funkcji ona znika
//funckja moze zostac wywoalana poza swoim zakresem ale nadal miec do niego dostep - ta zewnatrzna domyka te wewnatrzna
// w tej zoltej ksiazce to jest opisane ale kurde gdzie jest ta ksiazka

// bandler zarzadza kodem zrodlowym - mam zaleznosci miedzy plikami, type script musi byc skompilowany do JS, s-cssy (preprocesory) tez - musi to byc w odpowiedniej kolejnosci zaciagnete (sparsowane czyli zmienic format),
// pilkow mam wiele w projekcie - zeby te pliki zaciagnac we wlasciwej kolejnosci ( bandler maja tzw entry point dociagnie wszystkie zaleznosci)
// bandler rozdzieli kody html od css od js na paczki ( zrobi takie wyspy),zminifiukuje kod
// bundler  ma taka opcje HMR ktory pozwala nasluchiwac na zmiany w plikach i przebuduje wtedy projket
