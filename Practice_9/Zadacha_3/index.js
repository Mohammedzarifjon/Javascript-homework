const createCar = (additionalFields) => {
    const baseCar = {
        wheels: 4,
        doors: 4,
        isStarted: false,
    };

    const newCar = { ...baseCar, ...additionalFields };

    return newCar;
};

console.log(createCar({ name: "Haval", hp: 198 }));
console.log(createCar({ name: "Toyota", color: "Red", isStarted: true }));