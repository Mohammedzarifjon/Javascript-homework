function getAge(yearOfBirth) {
    const currentYear = new Date().getFullYear();
    return currentYear - yearOfBirth;
  }
  
  const users = [];
  
  for (let i = 0; i < 3; i++) {
    const name = prompt(`Введите имя ${i + 1}-го пользователя:`);
    const yearOfBirth = parseInt(prompt(`Введите год рождения пользователя ${i + 1}:`), 10);
    const age = getAge(yearOfBirth);
    users.push({ name, age }); 
  }
  
  users.forEach((user, index) => {
    console.log(`${index + 1} '${user.name}' ${user.age}`);
  });
  
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  const averageAge = totalAge / users.length;
  
  console.log(`Средний возраст пользователей: ${averageAge.toFixed(0)}`);