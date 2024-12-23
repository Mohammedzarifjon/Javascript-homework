const cars = {
    "Toyota": {
      name: "Toyota",
      wheels: 4,
      doors: 4,
      isStarted: true,
      hp: 150
    },
    "BMW": {
      name: "BMW",
      wheels: 4,
      doors: 4,
      isStarted: false,
      hp: 200
    },
    "Audi": {
      name: "Audi",
      wheels: 4,
      doors: 4,
      isStarted: true,
      hp: 180
    }
  };
  
  function getCar(carName) {
    if (cars[carName]) {
      return cars[carName]; 
    } else {
      console.log("Автомобиль не найден"); 
    }
  }
  
  const carInfo = getCar("BMW");
  if (carInfo) {
    console.log(carInfo); 
  }
  
  const carInfoNotFound = getCar("Mercedes");
  if (!carInfoNotFound) {
    console.log("Не удалось найти автомобиль Mercedes");
  }
  