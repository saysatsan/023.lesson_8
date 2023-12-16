const data = {
    categories: [
      "Букети",
      "Квіти",
      "Цукерки"
    ],
    products: {
      "Букети": [
        { 
          img: 'images/7.svg',
          name: "Бархатний сезон", 
          description: "Бархатний Сезон - елегантний та неповторний букет, який приваблює своєю розкішшю та барвистістю" 
        },
        { 
          img: 'images/6.svg',
          name: "Мінібукет", 
          description: "Цей компактний букет несе у собі велике значення та емоції в невеликому форматі, ідеально підходячи для подарунків та виявлення найтепліших почуттів." 
        }
      ],
      "Квіти": [
        { 
          img: 'images/1.svg',
          name: "Троянда Freedom", 
          description: "Троянда Freedom - виразна краса та символ безмежної любові. " 
        },
        { 
          img: 'images/8.svg',
          name: "Ірис", 
          description: 'Це квітка, яка вражає своєю неповторною красою та грацією. Її елегантні квітки з характерними "лепестками" надають їй витончений вигляд, який приваблює увагу. "Ірис" символізує мудрість, повагу та гармонію, і є відмінним вибором для вираження почуттів при даруванні. ' 
        }
      ],
      "Цукерки": [
        { 
          img: 'images/4.svg',
          name: "Шоколад", 
          description: 'Витончений та неповторний десерт, створений з любов\'ю та майстерністю. Наш майстер шоколатьє вдається об\'єднати вишуканий смак та хрусткість, доповнюючи його особливими інгредієнтами та унікальними фруктовими та горішковими нюансами. ' 
        },
        { 
          img: 'images/3.svg',
          name: "Цукерки", 
          description: 'Кожна цукерка - це витончений шедевр, в якому поєднуються особливі аромати, текстури та смакові враження.' 
        }
      ],
    }
};

const categoriesDiv = document.getElementById("categories"); 
const productsDiv = document.getElementById("products");
const productInfoDiv = document.getElementById("productInfo");

(function Categories() {    
    categoriesDiv.innerHTML = "";
    data.categories.forEach(category => {
      const categoryName = document.createElement("a");
      categoryName.classList.add('title');
      categoryName.textContent = category;
      
      categoryName.addEventListener("click", () => Products(category));
      
      categoriesDiv.append(categoryName);
    });
})();

function Products(category) {    
  productsDiv.innerHTML = "";
  productsDiv.style.backgroundColor = '#ff9900';

  data.products[category].forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add('productCard');

    const imgProduct = document.createElement('img');
    imgProduct.src = product.img;
    imgProduct.alt = product.name;

    const productName = document.createElement("div");
    productName.classList.add('productName');
    productName.textContent = product.name;

    productCard.append(imgProduct, productName);
    
    productCard.addEventListener("click", () => ProductInfo(product));

    productsDiv.append(productCard);
  });
}

function ProductInfo(product) {    
    productInfoDiv.innerHTML = "";
    productInfoDiv.style.borderLeft = '1px solid #ff9900';
    const imgProduct = document.createElement('img');
    imgProduct.src = `${product.img}`;
    imgProduct.alt = product.name;

    const productName = document.createElement("h2");
    productName.textContent = product.name;
    
    const productDescription = document.createElement("p");
    productDescription.textContent = product.description;
    
    const buyButton = document.createElement("button");
    buyButton.textContent = "Купити";

    productInfoDiv.append(imgProduct, productName, productDescription, buyButton);
 
    buyButton.addEventListener("click", () => {
      if (!document.querySelector(".orderForm")) {
        showOrderForm(product);
      }
    }) 
}

function showOrderForm(product) {
  const orderForm = document.createElement("form");
  orderForm.classList.add("orderForm");
  orderForm.textContent = '';

  const fullNameInput = createFormInput("text", "fullName", "ПІБ");
  const cityInput = createFormInput("text", "city", "Місто");
  const novaPoshtaInput = createFormInput("text", "novaPoshta", "Відділення Нової пошти");
  const paymentMethodInput = createFormSelect("paymentMethod", ["Післяплата", "Оплата банківською карткою"]);
  const quantityInput = createFormInput("number", "quantity", "Кількість");
  
  const commentInput = document.createElement('textarea');
  commentInput.name = 'comment';
  commentInput.placeholder = 'Коментар до замовлення';

  const submitButton = document.createElement("button");
  submitButton.textContent = "Замовити";
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    submitOrder(product);
  });

  orderForm.append(
    fullNameInput,
    cityInput,
    novaPoshtaInput,
    paymentMethodInput,
    quantityInput,
    commentInput,
    submitButton
  );

  productInfoDiv.append(orderForm);
}

function createFormInput(type, name, placeholder) {
  const input = document.createElement("input");
  input.type = type;
  input.name = name;
  input.placeholder = placeholder;
  return input;
}

function createFormSelect(name, options) {
  const select = document.createElement("select");
  select.name = name;

  options.forEach(optionText => {
    const option = document.createElement("option");
    option.value = optionText;
    option.text = optionText;
    select.add(option);
  });

  return select;
}

function submitOrder(product) {
  const orderForm = document.querySelector(".orderForm");

  if (!orderForm) {
    console.error('Form not found');
    return;
  }

  const formData = new FormData(orderForm);
  const orderData = {};
  formData.forEach((value, key) => {
    orderData[key] = value;
  });
  
  if (!orderData.fullName || !orderData.city || !orderData.novaPoshta || !orderData.paymentMethod || !orderData.quantity) {
    alert("Будь ласка, заповніть всі обов'язкові поля");
    return;
  }
  
  const orderInfo = document.createElement("div");
  orderInfo.classList.add("order-info");

  const productInfo = document.createElement("p");
  productInfo.textContent = `Товар: ${product.name}, Кількість: ${orderData.quantity}`;

  const deliveryInfo = document.createElement("p");
  deliveryInfo.textContent = `Доставка: ${orderData.city}, Склад Нової пошти: ${orderData.novaPoshta}, Спосіб оплати: ${orderData.paymentMethod}`;

  orderInfo.append(productInfo, deliveryInfo);
  productInfoDiv.append(orderInfo);

  orderForm.reset();
}
