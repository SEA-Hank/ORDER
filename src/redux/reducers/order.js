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
      return { ...state, [category]: { ...state[category], [foodId]: count } };
    default:
      return state;
  }
}
