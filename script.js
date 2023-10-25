const data = {
    categories: [
      "Букети",
      "Квіти",
      "Цукерки"
    ],
    products: {
      "Букети": [
        { name: "Бархатний сезон", description: "Опис товару Бархатний сезон" },
        { name: "Мінібукет", description: "Опис товару Мінібукет" }
      ],
      "Квіти": [
        { name: "Троянда Freedom", description: "Опис товару Троянда Freedom" },
        { name: "Ірис", description: "Опис товару Ірис" }
      ],
      "Цукерки": [
        { name: "Шоколад", description: "Опис товару Шоколад" },
        { name: "Цукерки", description: "Опис товару Цукерки" }
      ],
    }
};
  

(function Categories() {
    const categoriesDiv = document.getElementById("categories");
    categoriesDiv.innerHTML = "";
    data.categories.forEach(category => {
      const categoryName = document.createElement("div");
      categoryName.textContent = category;
      categoryName.addEventListener("click", () => Products(category));
      categoriesDiv.appendChild(categoryName);
    });
})();



function Products(category) {
    const productsDiv = document.getElementById("products");
    productsDiv.innerHTML = "";
    data.products[category].forEach(product => {
      const productName = document.createElement("div");
      productName.textContent = product.name;
      productName.addEventListener("click", () => ProductInfo(product));
      productsDiv.appendChild(productName);
    });
}




function ProductInfo(product) {
    const productInfoDiv = document.getElementById("productInfo");
    productInfoDiv.innerHTML = "";
    const productName = document.createElement("h2");
    productName.textContent = product.name;
    
    const productDescription = document.createElement("p");
    productDescription.textContent = product.description;
    
    const buyButton = document.createElement("button");
    buyButton.textContent = "Купити";
    productInfoDiv.appendChild(productName);
    productInfoDiv.appendChild(productDescription);
    productInfoDiv.appendChild(buyButton);
    buyButton.addEventListener("click", () => {
      alert(`Товар "${product.name}" куплено!`);
      location.reload();    
    });    
}


