import { OD_SET_ORDER } from "../actionTypes";
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
  order: {},
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
    default:
      return state;
  }
}
