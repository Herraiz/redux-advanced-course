const redux = require("redux");
const createStore = redux.createStore;

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
    // shopName: "Pizza shop",
  };
}

// Reducer
const initialState = {
  pizzasBase: 100,
  //   toppings: ["cheese", "capsicum"],
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

// Store
// 1 - Store needs to hold application state

const store = createStore(reducer);

// 2 - Holds method to acces to the state
console.log("Initial state:", store.getState());

// 3 -  Register listeners via subscribe(listener)
store.subscribe(() => {
  console.log("Updated state:", store.getState());
});

// 4 - Allow state to be updated via dispatch(action)
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderPizza());
