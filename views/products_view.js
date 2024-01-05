const productsArray = [
  {
    name: "kanapka1",
    composition: "chleb,slonina,dzem",
    photo: "https://i.imgur.com/6jaCHNT.jpeg",
  },
  {
    name: "kanapka2",
    composition: "chleb,slonina,dzem",
    photo: "https://i.imgur.com/eFX0GFp.jpeg",
  },
];

productsArray.forEach((product) => {
  const productsListContainer = document.createElement("div");
  const productsListButtonContainer = document.createElement("div");
  const productItemName = document.createElement("span");
  productItemName.innerText = product.name;
  const productAddButton = document.createElement("i");
  //const productDeleteButton = document.createElement("i");
  const productImage = document.createElement("img");
  productImage.src = product.photo;
  productsListContainer.appendChild(productItemName);
  productsListContainer.appendChild(productImage);
  productsListButtonContainer.appendChild(productAddButton);
  //productsListButtonContainer.appendChild(productDeleteButton);
  productsListContainer.appendChild(productsListButtonContainer);
  productItemName.className = "product-list-name";
  productAddButton.className = "fa-solid fa-cart-plus";
  // productDeleteButton.className = "fa-solid fa-trash";
  productsListContainer.className = "products-list-container";
  productsListButtonContainer.className = "product-list-button-container";
  productImage.className = "product-image";
  productListContent.appendChild(productsListContainer);
  //i teraz jak to jest, ze on to widzi bo ta const productListContent jest zaczytywna w pliku index.js
});

//
