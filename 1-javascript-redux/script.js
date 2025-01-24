const ORDER_PIZZA = "ORDER_PIZZA";

// Action
const action = {
  type: "ORDER_PIZZA",
  shopName: "Pizza shop",
};

// Action creator
function orderPizza() {
  return {
    type: "ORDER_PIZZA",
    shopName: "Pizza shop",
  };
}
