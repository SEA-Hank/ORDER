import { FD_SET_FOODLIST } from "../actionTypes";
/*
foodList schema
{
    category : [{
        id,
        name,
        imgscr
        price,
        description
    },...],
    ...
}
*/
const initialState = {
  foodList: null,
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case FD_SET_FOODLIST:
      return { ...state, foodList: actions.payload.foodList };
    default:
      return state;
  }
}
