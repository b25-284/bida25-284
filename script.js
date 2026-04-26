function addToOrder(itemName, price, sizeSelectId, qtyInputId) {
  const size = sizeSelectId ? document.getElementById(sizeSelectId).value : "0.5 metres";
  const quantity = parseInt(document.getElementById(qtyInputId).value);

  const orderItem = {
    name: itemName,
    size: size,
    price: price,
    quantity: quantity,
    total: (price * quantity).toFixed(2)
  };

  localStorage.setItem("orderItem", JSON.stringify(orderItem));
  window.location.href = "order.html";
}