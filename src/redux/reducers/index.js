import { combineReducers } from "redux";
import header from "./header";
import category from "./category";
import foodList from "./foodlist";
import order from "./order";
import app from "./app";
export default combineReducers({ header, category, foodList, order, app });
