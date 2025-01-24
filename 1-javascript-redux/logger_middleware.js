const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const reduxLoger = require("redux-logger");
const logger = reduxLoger.createLogger();
const applyMiddleware = redux.applyMiddleware;

const ORDER_PIZZA = "ORDER_PIZZA";
const ORDER_BURGUER = "ORDER_BURGUER";

// Action creators
function orderPizza() {
  return {
    type: "ORDER_PIZZA",
  };
}

function orderBurguer() {
  return {
    type: "ORDER_BURGUER",
  };
}

// Reducer
const pizzaInitialState = {
  pizzaBase: 100,
};

const burguerInitialState = {
  burguerBun: 200,
};

const pizzaReducer = (state = pizzaInitialState, action) => {
  switch (action.type) {
    case ORDER_PIZZA:
      return {
        ...state,
        pizzaBase: state.pizzaBase - 1,
      };

    default:
      return state;
  }
};

const burguerReducer = (state = burguerInitialState, action) => {
  switch (action.type) {
    case ORDER_BURGUER:
      return {
        ...state,
        burguerBun: state.burguerBun - 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  burguer: burguerReducer,
});

// Store

const store = createStore(rootReducer, applyMiddleware(logger));
const unsuscribe = store.subscribe(() => {});
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderBurguer());
store.dispatch(orderBurguer());
unsuscribe();
