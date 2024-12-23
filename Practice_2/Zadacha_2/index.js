let product1 = prompt("Введите название товара 1:", "Молоко");
let price1 = parseFloat(prompt(`Введите стоимость товара "${product1}":`, "75"));
let count1 = parseInt(prompt(`Введите количество товара "${product1}":`, "1"), 10);

let product2 = prompt("Введите название товара 2:", "Кофе");
let price2 = parseFloat(prompt(`Введите стоимость товара "${product2}":`, "420"));
let count2 = parseInt(prompt(`Введите количество товара "${product2}":`, "1"), 10);

let product3 = prompt("Введите название товара 3:", "Яблоки");
let price3 = parseFloat(prompt(`Введите стоимость товара "${product3}":`, "160"));
let count3 = parseInt(prompt(`Введите количество товара "${product3}":`, "1"), 10);

let total1 = price1 * count1;
let total2 = price2 * count2;
let total3 = price3 * count3;

console.log(product1, total1);
console.log(product2, total2);
console.log(product3, total3);

let totalSum = total1 + total2 + total3;

console.log("Сумма всей покупки:", totalSum);