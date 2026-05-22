function addToOrder(name, price, sizeId = null, qtyId = null) {
  const size = sizeId ? document.getElementById(sizeId)?.value : null;
  const quantity = qtyId ? parseInt(document.getElementById(qtyId)?.value) : 1;

  const item = {
    name: name,
    price: price,
    size: size,
    quantity: quantity
  };

  let order = JSON.parse(localStorage.getItem("order")) || [];
  order.push(item);
  localStorage.setItem("order", JSON.stringify(order));

  window.location.href = "order.html";
}

function clearCart() {
  localStorage.removeItem("order");
  displayOrder();
}

function displayOrder() {
  console.log("displayOrder is running");
  const order = JSON.parse(localStorage.getItem("order")) || [];
  const list = document.getElementById("order-list");
  const totalElement = document.getElementById("total-price");

  if (!list || !totalElement) return;

  list.innerHTML = "";
  let total = 0;

  if (order.length === 0) {
    list.innerHTML = "<li>Your cart is empty</li>";
    totalElement.textContent = "";
    return;
  }

  order.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - P${item.price} ${item.size ? "| Size: " + item.size : ""} | Qty: ${item.quantity}`;
    list.appendChild(li);
    total += item.price * item.quantity;
  });

  totalElement.textContent = "Total: P" + total.toFixed(2);
}

window.onload = displayOrder;