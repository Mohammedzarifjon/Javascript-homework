const cars = {
    toyota: {
        name: "Toyota Corolla",
        wheels: 4,
        doors: 4,
        isStarted: false,
        hp: 132,
    },
    ford: {
        name: "Ford Mustang",
        wheels: 4,
        doors: 2,
        isStarted: true,
        hp: 450,
    },
    bmw: {
        name: "BMW 3 Series",
        wheels: 4,
        doors: 4,
        isStarted: true,
        hp: 255,
    },
    tesla: {
        name: "Tesla Model S",
        wheels: 4,
        doors: 4,
        isStarted: true,
        hp: 670,
    },
};

const printCarNames = (cars) => {
    for (const carBrand in cars) {
        console.log(carBrand);
    }
};

printCarNames(cars);