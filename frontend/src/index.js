import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import store from './store';
// import { Provider } from 'react-redux';

// ReactDOM.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>,
//   document.getElementById('root')
// );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);