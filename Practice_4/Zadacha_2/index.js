function celsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32;
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
  }
  
  console.log(celsiusToFahrenheit(25)); 
  console.log(celsiusToFahrenheit(0));  
  console.log(celsiusToFahrenheit(-10)); 
  
  console.log(fahrenheitToCelsius(77));  
  console.log(fahrenheitToCelsius(32));  
  console.log(fahrenheitToCelsius(14));  
  