//відкривання категорій
const nameCategorys = document.querySelectorAll(".list_name");
const productLists  = document.querySelectorAll(".product_list");

nameCategorys.forEach(nameCategory =>{
    nameCategory.addEventListener("click",() => {
        const category = nameCategory.dataset.category;
        productLists.forEach(productList => {
            productList.classList.remove('product_list_open');
        });
        const selectedProductList = document.getElementById(category);
        selectedProductList.classList.add('product_list_open');
    });
})


// відкривання продукту
const products = document.querySelectorAll(".product_item");
const productInfoblocks = document.querySelectorAll(".product_block")

products.forEach(product =>{
    product.addEventListener("click", (e) =>{
        productInfoblocks.forEach(productInfoblock =>{
            productInfoblock.classList.remove('product_block_open');
        })
        const productInfo = e.currentTarget.querySelector(".product_block");
        productInfo.classList.add("product_block_open"); 
    })
})

//події на кнопку
const btBuys = document.querySelectorAll(".buy");

btBuys.forEach(btBuy =>{
    btBuy.addEventListener("click",()=>{        
        alert("Ваше замовлення прийняте");
        location.reload();
    })
   

})

