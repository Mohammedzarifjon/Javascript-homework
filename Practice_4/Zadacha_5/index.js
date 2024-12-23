function totalSum(price, amount, discount) {
    const priceWithDiscount = price * (1 - discount / 100);
    
    const totalPrice = priceWithDiscount * amount;
    
    return totalPrice; 
  }
  
  const priceItem = 25000;
  const amountItem = 3;
  const discountItem = 20;
  
  console.log(totalSum(priceItem, amountItem, discountItem));
  