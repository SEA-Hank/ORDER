import { CG_ACTIVATED_INDEX, CG_SET_CATEGORIES } from "../actionTypes";
/*
 schema:
categories: [{id:int
              name:string
            },
            ...]
local.activatedIndex : int
local.isActivatedByClick : bool
*/
const initialState = {
  categories: [],
  local: {
    activatedIndex: NaN,
    isActivatedByClick: false,
  },
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case CG_ACTIVATED_INDEX:
      return {
        ...state,
        local: {
          ...state.local,
          ...actions.payload,
        },
      };
    case CG_SET_CATEGORIES:
      return {
        ...state,
        categories: actions.payload.categories,
        local: { ...state.local, activatedIndex: 0 },
      };
    default:
      return state;
  }
}
