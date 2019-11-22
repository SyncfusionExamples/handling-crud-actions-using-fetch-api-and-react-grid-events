export {};
const baseUrl = "http://localhost:8080/api";
// get
export function getOrders() {
  return fetch(baseUrl + "/orders")
    .then(res => res.json())
    .then(data => {
      return data;
    });
}

// add
export function addOrder(order: any) {
    console.log(order);
  return fetch(baseUrl + "/orders", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      value: order
    })
  })
    .then((data: any) => {
      return data;
    });
}

// update
export function updateOrder(order: any) {
  return fetch(baseUrl + "/orders/" + order.OrderID, {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      value: order
    })
  })
    .then(data => {
      return data;
    });
}

// delete
export function deleteOrder(primaryKey: string) {
  return fetch(baseUrl + "/orders/" + primaryKey, {
    method: "delete"
  })
    .then(data => {
      return data;
    });
}
