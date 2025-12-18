const categoriesContainer = document.getElementById("categories-container");

const categories = [
  { name: "Аксесуари", products: 84 },
  { name: "Корм",      products: 64 },
  { name: "Меблі",     products: 22 },
  { name: "Сумки",     products: 16 }
];

categoriesContainer.innerHTML = categories
  .map((cat, i) => `
    <div class="categories-card" 
         style="background-image: url('assets/images/categories/card${i + 1}.svg')">
      
      <div class="card-info">
        <div class="card-text">
          <h3>${cat.name}</h3>
          <p>${cat.products} товарів</p>
        </div>

        <img src="assets/images/categories/arrow.svg" alt="стрілка" />
      </div>
    </div>
  `)
  .join("");



const fpContainer = document.getElementById("fp-container");

const featuredProducts = [
  { name: "Преміум корм для собак", price: 750 },
  { name: "Преміум корм для котів", price: 720 },
  { name: "Корм для собак преміум класу", price: 780 }
];

fpContainer.innerHTML = featuredProducts
  .map((p, i) => `
      <div class="fp-card">
        <img src="assets/images/featured products/fp-${i + 1}.svg" alt="">
        <div class="fp-card-info">
          <div class="fp-card-text">
            <h3>${p.name}</h3>
            <p>${p.price} ₴</p>
          </div>
          <img src="assets/images/featured products/heart.svg" alt="вподобати">
        </div>
      </div>
  `)
  .join("");



const logosSection = document.getElementById("logos");

const logosCount = 5; 

logosSection.innerHTML = Array.from({ length: logosCount })
  .map((_, i) => `
    <img src="assets/images/logos/Logo${i + 1}.svg" alt="Логотип ${i + 1}">
  `)
  .join("");



const bspContainer = document.getElementById("bsp-container");

const bspProducts = [
  { name: "Миска для кота",         price: 780 },
  { name: "Лежанка для кота",       price: 1850 },
  { name: "Повідець для собаки",   price: 370 },
  { name: "Преміум корм для кота", price: 720 },
  { name: "Миска для собаки",       price: 740 },
  { name: "Преміум корм для собаки", price: 1100 },
  { name: "Лежанка для собаки",     price: 1850 },
  { name: "Корм для собаки преміум", price: 750 }
];

bspContainer.innerHTML = bspProducts
  .map((p, i) => `
      <div class="fp-card">
        <img src="assets/images/best selling products/bsp-${i + 1}.svg" alt="">
        <div class="fp-card-info">
          <div class="fp-card-text">
            <h3>${p.name}</h3>
            <p>${p.price} ₴</p>
          </div>
          <img src="assets/images/featured products/heart.svg" alt="вподобати">
        </div>
      </div>
  `)
  .join("");








const NewsTitles = [
    "Як правильно доглядати за тваринами: поради ветеринарів",
    "Найкращі іграшки для активних собак та котів",
    "Як обрати правильний корм для вашої тварини"
];

const BlogContainer = document.getElementById("blog-cards");


BlogContainer.innerHTML = NewsTitles
  .map((title, i) => `
      <div class="big-card">
      <img src="assets/images/news and blog/n&b-${i + 1}.svg" alt="">
      <div class="big-card-text">
        <p>24 травня 2024</p>
        <h3>${title}</h3>
      </div>
    </div>
  `)
  .join("");