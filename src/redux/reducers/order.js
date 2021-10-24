import {
  OD_SET_ORDER,
  OD_SET_EDITOR,
  OD_SET_TIPS,
  OD_RESET,
  OD_SUBMIT,
  OD_FROM_COOKIES,
  TIPS_CACULATE_TYPE,
  STATUS,
} from "../actionTypes";
import Cookies from "js-cookie";
const initialState = {
  /*
order schema
{
    categoryName:{
        foodId: orderCount,
        ....
    },
    ...
}
*/
  order: {
    //   Appetizers: {
    //     1: 2,
    //   },
    //   "Salads And Soup": {
    //     4: 2,
    //     5: 1,
    //   },
    //   "Veal Dishes": {
    //     10: 2,
    //   },
  },
  taxRate: 0.1,
  tips: {
    isShow: false,
    caculateType: TIPS_CACULATE_TYPE.EXACT,
    value: 0,
  },
  editor: {
    foodInfo: {},
    quantity: 0,
    category: null,
  },
  status: STATUS.PENDING,
  orderNumber: null,
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case OD_SET_ORDER:
      let { category, foodId, count } = actions.payload;
      let newOrder = {
        ...state,
        order: {
          ...state.order,
          [category]: { ...state.order[category], [foodId]: count },
        },
      };
      Cookies.set("order", JSON.stringify(newOrder.order), { expires: 1 });
      return newOrder;
    case OD_SET_EDITOR:
      return {
        ...state,
        editor: {
          ...actions.payload,
        },
      };
    case OD_SET_TIPS:
      return {
        ...state,
        tips: { ...actions.payload },
      };
    case OD_RESET:
      Cookies.remove("order");
      return initialState;
    case OD_SUBMIT:
      return {
        ...state,
        status: actions.payload.status,
        orderNumber: actions.payload.orderNumber,
      };
    case OD_FROM_COOKIES:
      return { ...state, order: actions.payload };
    default:
      return state;
  }
}
