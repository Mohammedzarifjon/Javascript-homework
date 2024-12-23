function addToCart(product) {
    const cart = document.getElementById('cart');

    const cartItem = document.createElement('li');

    const text = document.createTextNode(product);

    cartItem.appendChild(text);

    cart.appendChild(cartItem);
}
