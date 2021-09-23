import { combineReducers } from "redux";
import header from "./header";
import category from "./category";
import foodList from "./foodlist";
import order from "./order";
export default combineReducers({ header, category, foodList, order });
