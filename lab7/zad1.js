// Створюємо Promise
const myPromise = new Promise((resolve, reject) => {
  // Через 2 секунди (2000 мс) викликаємо resolve з потрібним значенням
  setTimeout(() => {
    resolve("Hello, World!");
  }, 2000);
});

// Приклад використання Promise
myPromise
  .then((result) => {
    console.log(result); // Виведе: Hello, World! (через 2 секунди)
  })
  .catch((error) => {
    console.error(error);
  });

// Альтернативний варіант з async/await
async function testPromise() {
  try {
    const result = await myPromise;
    console.log(result); // Виведе: Hello, World! (через 2 секунди)
  } catch (error) {
    console.error(error);
  }
}

// testPromise();
