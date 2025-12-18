// 1. Фільтрація та пошук у масиві об'єктів

// Масив товарів
const products = [
  { name: "Ноутбук", category: "Електроніка", price: 35000, inStock: 7 },
  { name: "Смартфон", category: "Електроніка", price: 15000, inStock: 0 },
  { name: "Книга", category: "Література", price: 400, inStock: 15 },
  { name: "Навушники", category: "Електроніка", price: 2000, inStock: 3 },
  { name: "Рюкзак", category: "Аксесуари", price: 1200, inStock: 0 },
];

// Функція: повертає товари, які є в наявності (inStock > 0)
function getAvailableProducts() {
  return products.filter((product) => product.inStock > 0);
}

// Функція: шукає товар за назвою
function findProductByName(productName) {
  const product = products.find((product) => product.name === productName);
  return product || "Товар не знайдено";
}

// Тестування першого розділу
console.log("Товари в наявності:");
console.log(getAvailableProducts());

console.log("\nПошук товару 'Смартфон':");
console.log(findProductByName("Смартфон"));

console.log("\nПошук товару 'Книга':");
console.log(findProductByName("Книга"));

console.log("\nПошук неіснуючого товару:");
console.log(findProductByName("Планшет"));

// 2. Групування та сортування масиву об'єктів

// масив студентів
const students = [
  { name: "Іван Петренко", age: 20, grade: 85, group: "ІТ-21" },
  { name: "Марія Сидоренко", age: 19, grade: 92, group: "ІТ-22" },
  { name: "Олексій Коваленко", age: 21, grade: 78, group: "ІТ-21" },
  { name: "Анна Литвиненко", age: 20, grade: 95, group: "ІТ-22" },
  { name: "Сергій Мороз", age: 19, grade: 88, group: "ІТ-21" },
  { name: "Олена Шевченко", age: 20, grade: 90, group: "ІТ-22" },
];

// групує студентів за групами (використовуємо reduce)
function groupBy(studentsArray) {
  return studentsArray.reduce((groups, student) => {
    const group = student.group;
    if (!groups[group]) {
      groups[group] = []; // створюємо масив для нової групи
    }
    groups[group].push(student);
    return groups;
  }, {});
}

// сортує студентів за оцінками у порядку спадання
function sortStudentsByGrade(studentsArray) {
  return [...studentsArray].sort((a, b) => b.grade - a.grade);
}

console.log("\nГрупування студентів за групами:");
console.log(groupBy(students));

console.log("\nСтуденти, відсортовані за оцінками (спадання):");
console.log(sortStudentsByGrade(students));
