import {
  SYS_AJAX_ERROR,
  HD_BTN_TRIGLE,
  HD_SET_TITLE,
  CG_ACTIVE_INDEX,
  CG_SET_CATEGORIES,
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
        }, 1000 * 5);
      }
    );
  };
};

export const hdBtnTrigle = () => ({
  type: HD_BTN_TRIGLE,
});

export const setCGActiveIndex = (activeIndex, activeItem) => ({
  type: CG_ACTIVE_INDEX,
  payload: {
    activeIndex,
    activeItem,
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
        }, 1000 * 5);
      }
    );
  };
};
