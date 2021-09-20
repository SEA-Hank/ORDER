import { HD_BTN_TRIGLE, HD_SET_TITLE } from "../actionTypes";
const initialState = {
  title: null,
  local: { showBtn: false },
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case HD_BTN_TRIGLE:
      return {
        ...state,
        local: { showBtn: !state.local.showBtn },
      };
    case HD_SET_TITLE:
      return {
        ...state,
        title: actions.payload.title,
      };
    default:
      return state;
  }
}
