import { OD_SET_ORDER, OD_SET_EDITOR, OD_SET_TIPS } from "../actionTypes";
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
    caculateType: "value", //value or percentage
    value: 0,
  },
  editor: {
    foodInfo: {},
    quantity: 0,
    category: null,
  },
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case OD_SET_ORDER:
      let { category, foodId, count } = actions.payload;
      return {
        ...state,
        order: {
          ...state.order,
          [category]: { ...state.order[category], [foodId]: count },
        },
      };
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
    default:
      return state;
  }
}
