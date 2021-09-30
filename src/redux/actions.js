import {
  SYS_AJAX_ERROR,
  HD_BTN_TRIGLE,
  HD_SET_TITLE,
  CG_ACTIVATED_INDEX,
  CG_SET_CATEGORIES,
  FD_SET_FOODLIST,
  OD_SET_ORDER,
  OD_SET_EDITOR,
} from "./actionTypes";
import communication from "../common/communication";

export const ajaxError = (message) => ({
  type: SYS_AJAX_ERROR,
  payload: { message },
});

export const setTitle = (title) => ({
  type: HD_SET_TITLE,
  payload: {
    title,
  },
});

export const asyncGetTitle = () => {
  return (dispatch) => {
    communication({ method: "get", url: "/getTitle", dispatch }).then(
      (data) => {
        setTimeout(() => {
          dispatch(setTitle(data.title));
        }, 1000 * 0);
      }
    );
  };
};

export const hdBtnTrigle = () => ({
  type: HD_BTN_TRIGLE,
});

export const setCGActivatedIndex = (activatedIndex, isActivatedByClick) => ({
  type: CG_ACTIVATED_INDEX,
  payload: {
    activatedIndex,
    isActivatedByClick,
  },
});

const setCategories = (categories) => ({
  type: CG_SET_CATEGORIES,
  payload: {
    categories,
  },
});

export const asyncGetCategory = () => {
  return (dispatch) => {
    communication({ method: "get", url: "/getcategories", dispatch }).then(
      (categories) => {
        setTimeout(() => {
          dispatch(setCategories(categories));
        }, 1000 * 0);
      }
    );
  };
};

export const setFoodList = (foodList) => ({
  type: FD_SET_FOODLIST,
  payload: {
    foodList,
  },
});

export const asyncGetFoodList = () => {
  return (dispatch) => {
    communication({ method: "get", url: "/getfoodlist", dispatch }).then(
      (foodList) => {
        dispatch(setFoodList(foodList));
      }
    );
  };
};

export const setOrder = (category, foodId, count) => ({
  type: OD_SET_ORDER,
  payload: {
    category,
    foodId,
    count,
  },
});

export const setOrderEditor = (foodInfo, quantity, category) => ({
  type: OD_SET_EDITOR,
  payload: { foodInfo, quantity, category },
});
