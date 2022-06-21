import { combineReducers } from "redux";
import productSlice from './productSlice';

const allReducer = combineReducers({
  productSlice
});

export default allReducer;
