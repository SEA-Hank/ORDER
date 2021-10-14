import {
  SYS_FETCH_DATA,
  STATUS,
  HOME_ENTER_ANIMATION,
  SYS_RELOAD_DATA,
} from "../actionTypes";

const initialState = {
  status: STATUS.PENDING,
  enterAnimation: true,
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case SYS_FETCH_DATA:
      return {
        ...state,
        status: actions.payload,
      };
    case HOME_ENTER_ANIMATION:
      return {
        ...state,
        enterAnimation: actions.payload,
      };
    case SYS_RELOAD_DATA:
      return {
        ...state,
        status: STATUS.PENDING,
      };
    default:
      return state;
  }
}
