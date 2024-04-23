import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productReducer from './productReducer'; // Import your product reducer
import filterReducer from './filterReducer'; // Import your filter reducer
import cartReducer from './cartReducer'; // Import your cart reducer

// Combine your reducers
const rootReducer = combineReducers({
  product: productReducer,
  filter: filterReducer,
  cart: cartReducer, // Add cart reducer to rootReducer
});

// Create the store with combined reducers and applyMiddleware for thunk
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;