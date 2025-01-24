const ORDER_PIZZA = "ORDER_PIZZA";

// Action
// const action = {
//   type: "ORDER_PIZZA",
//   shopName: "Pizza shop",
// };

// Action creator
function orderPizza() {
  return {
    type: "ORDER_PIZZA",
    shopName: "Pizza shop",
  };
}

// Reducer
const initialState = {
  pizzasBase: 100,
  toppings: ["cheese", "capsicum"],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_PIZZA:
      return {
        ...state,
        pizzasBase: state.pizzasBase - 1,
      };

    default:
      return state;
  }
};
