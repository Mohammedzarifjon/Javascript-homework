const minPrice = 200; 
const maxPrice = 1000;

const sneakerPrice = 600;
if (sneakerPrice < minPrice) {
  console.log("Цена слишком маленькая");
} else if (sneakerPrice > maxPrice) {
  console.log("Цена слишком большая");
} else {
  console.log("Цена нормальная");
}