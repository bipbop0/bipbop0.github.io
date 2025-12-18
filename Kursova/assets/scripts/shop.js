const FFcheckbox = document.getElementById("first-filter-checkbox");

const FFoptions = [
    { name: "Furniture", amount: 21 },
    { name: "Bowls", amount: 28 },
    { name: "Clothing", amount: 12 },
    { name: "Food", amount: 80 },
    { name: "Toys", amount: 90 },
    { name: "Sale", amount: 24 }
];

FFcheckbox.innerHTML = FFoptions
    .map((ff, i) => `
    <div class="input-wrapper">
        <div class="input-checkbox">
            <input type="checkbox" id="${ff.name}" name="${ff.name}">
            <label for="${ff.name}">${ff.name}</label>
        </div>
        <span class="count">${ff.amount}</span>
    </div>
  `)
    .join("");


const SFcheckbox = document.getElementById("second-filter-checkbox");

const SFoptions = [
    { name: "Natural food", amount: 28 },
    { name: "Pet care", amount: 18 },
    { name: "Dogs friend", amount: 16 },
    { name: "Pet food", amount: 40 },
    { name: "Favorite pet", amount: 28 },
    { name: "Green line", amount: 18 }
];

SFcheckbox.innerHTML = SFoptions
    .map((sf, i) => `
    <div class="input-wrapper">
        <div class="input-checkbox">
            <input type="checkbox" id="${sf.name}" name="${sf.name}">
            <label for="${sf.name}">${sf.name}</label>
        </div>
        <span class="count">${sf.amount}</span>
    </div>
  `)
    .join("");



const tagsFilter = document.getElementById("tags-filter");

const tags = [
  "Dog food",
  "Cat food",
  "Natural",
  "Parrot",
  "Small dog",
  "Cat"
];

tagsFilter.innerHTML = tags
  .map((name, i) => `
      <h4 class="tag">${name}</h4>
  `)
  .join("");



const productsContainer = document.getElementById("products-container");

const products = [
    { name: "Pet Carrier", price: 29.99 },
    { name: "Cat Bowl", price: 20.99 },
    { name: "Cat Bowl", price: 19.99 },
    { name: "Premium Cat Food", price: 20.99 },
    { name: "Dog Bowl", price: 4.99 },
    { name: "Cat Bed", price: 49.99 },
    { name: "Dog Leash", price: 9.99 },
    { name: "Dog Bed", price: 49.99 },
    { name: "Premium Cat Food", price: 20.99 },
    { name: "Premium Dog Food", price: 29.99 },
    { name: "Dog Bowl", price: 19.99 },
    { name: "Premium Dog Food", price: 24.99 }
];

productsContainer.innerHTML = products
    .map((p, i) => `
        <div class="fp-card">
            <img src="./assets/images/products/product-${i + 1}.svg" alt="">
            <div class="fp-card-info">
                <div class="fp-card-text">
                    <h3>${p.name}</h3>
                    <p>$${p.price}</p>
                </div>
                <img class="like" src="./assets/images/products/like.svg" alt="">
            </div>
        </div>
    `)
    .join("");




const ppContainer = document.getElementById("pp-container");

const popularProducts = [
  { name: "Premium Dog Food", price: 99 },
  { name: "Premium Cat Food", price: 220 },
  { name: "Cat Bed", price: 50 },
  { name: "Dog Leash", price: 220 },
  { name: "Cat Bowl", price: 220 }
];

ppContainer.innerHTML = popularProducts
  .map((p, i) => `
    <div class="option-wrapper">
        <img src="./assets/images/popular products/product-${i + 1}.svg" alt="">
        <div class="option-info-container">
            <h4>${p.name}</h4>
            <p>$${p.price}</p>
        </div>
    </div>
  `)
  .join("");