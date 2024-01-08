// const clickProdHandler = (event) => {
//   const id = Number.parseInt(event.target.dataset.prodId);
//   productsArray = productsArray.filter((elem) => elem.id !== id);
//   createProductsView();
// };

let productsArray = [
  {
    name: "kanapka1",
    composition: "chleb,slonina,dzem",
    photo: "https://i.imgur.com/6jaCHNT.jpeg",
    id: 1,
  },
  {
    name: "kanapka2",
    composition: "chleb,slonina,dzem",
    photo: "https://i.imgur.com/eFX0GFp.jpeg",
    id: 2,
  },
];

const createProductsView = () => {
  productListContent.innerHTML = "";
  productListContent.innerHTML = markupProducts(productsArray);
};

// productsArray.forEach((product) => {
//   const productsListContainer = document.createElement("div");
//   const productsListButtonContainer = document.createElement("div");
//   const productItemName = document.createElement("span");
//   productItemName.innerText = product.name;
//   const productAddButton = document.createElement("i");
//   //const productDeleteButton = document.createElement("i");
//   const productImage = document.createElement("img");
//   productImage.src = product.photo;
//   productsListContainer.appendChild(productItemName);
//   productsListContainer.appendChild(productImage);
//   productsListButtonContainer.appendChild(productAddButton);
//   //productsListButtonContainer.appendChild(productDeleteButton);
//   productsListContainer.appendChild(productsListButtonContainer);
//   productItemName.className = "product-list-name";
//   productAddButton.className = "fa-solid fa-cart-plus";
//   // productDeleteButton.className = "fa-solid fa-trash";
//   productsListContainer.className = "products-list-container";
//   productsListButtonContainer.className = "product-list-button-container";
//   productImage.className = "product-image";
//   productListContent.appendChild(productsListContainer);
//   //i teraz jak to jest, ze on to widzi bo ta const productListContent jest zaczytywna w pliku index.js
// });

const markupProducts = (product) => {
  return product
    .map((prod) => {
      return `
    <div class="products-list-container">
    <span class="product-list-name">${prod.name}</span>
    <img src="${prod.photo}" class="product-image">
    <div class="product-list-button-container">
    <i data-prod-id class="fa-solid fa-cart-plus"></i>
    </div>
    </div>
    `;
    })
    .join("");
};

createProductsView();
//
