const isSunny = true; 
const temperature = 25;  
const hasUmbrella = false;  

let canHavePicnic = (isSunny && temperature >= 20 && temperature <= 30) || (!isSunny && temperature < 15 && hasUmbrella);

console.log("Можно ли устроить пикник:", canHavePicnic);