const { createStore,
        applyMiddleware,
        compose } = require('redux');
const thunk = require('redux-thunk').default;
const reducer = require('core/reducer');

const middlewares = [thunk];
const enhancers = compose(
    applyMiddleware.apply(null, middlewares)
);

const store = createStore(
  reducer,
  enhancers
);

module.exports = store;

/*

const enhancers = compose(
    applyMiddleware.apply(null, middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

*/
