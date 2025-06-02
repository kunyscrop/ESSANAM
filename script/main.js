// script.js
let total = 0;
const orderList = document.getElementById('orderList');
const totalPrice = document.getElementById('totalPrice');

function addToOrder(item, price) {
    const listItem = document.createElement('li');
    listItem.textContent = `${item} - $${price}`;
    orderList.appendChild(listItem);
    total += price;
    totalPrice.textContent = total;
}

function saveOrder() {
    alert('Order saved! Total: $' + total);
    orderList.innerHTML = '';
    total = 0;
    totalPrice.textContent = total;
}
