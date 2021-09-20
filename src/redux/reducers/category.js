import { CG_ACTIVE_INDEX, CG_SET_CATEGORIES } from "../actionTypes";
const initialState = {
  categories: [],
  local: {
    activeIndex: NaN,
    activeItem: null,
  },
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case CG_ACTIVE_INDEX:
      let { activeIndex, activeItem } = actions.payload;
      return {
        ...state,
        local: {
          ...state.local,
          activeIndex: activeIndex,
          activeItem,
        },
      };
    case CG_SET_CATEGORIES:
      return {
        ...state,
        categories: actions.payload.categories,
        local: { ...state.local, activeIndex: 0 },
      };
    default:
      return state;
  }
}
