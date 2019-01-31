require('style/main.scss');

const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const store = require('core/store');
const App = require('components/app');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
