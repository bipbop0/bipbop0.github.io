const scrollBtn = document.getElementById("scrollToTop");

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


document.querySelectorAll(".burger-menu").forEach((burger) => {
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    document.querySelector(".menu").classList.toggle("active");
  });
});

const petWrapper = document.getElementById("shop-by-pet-wrapper");

const pets = [
  "Кіт",
  "Хом'як",
  "Собака",
  "Папуга",
  "Кролик",
  "Черепаха"
];

petWrapper.innerHTML = pets
  .map((name, i) => `
      <div class="pet-info">
        <img src="assets/images/shop by pet/pet-${i + 1}.svg" alt="${name}">
        <h3>${name}</h3>
      </div>
  `)
  .join("");