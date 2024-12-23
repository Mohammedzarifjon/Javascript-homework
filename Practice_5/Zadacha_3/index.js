function greeting(age) {
    if (age >= 18) {
       alert("Добро пожаловать на наш взрослый сайт!");
    } else {
       alert("Извините, доступ только для совершеннолетних");
    }
 }
 
 function processUserInput(callback) {
    const age = prompt('Пожалуйста, введите ваш возраст');
    callback(Number(age));
 }
 
 processUserInput(greeting);
 