import {
  SYS_AJAX_ERROR,
  SYS_FETCH_DATA,
  SYS_RELOAD_DATA,
  SYS_HOME_ENTER_ANIMATION,
  STATUS,
  HD_BTN_TRIGLE,
  HD_SET_TITLE,
  CG_ACTIVATED_INDEX,
  CG_SET_CATEGORIES,
  FD_SET_FOODLIST,
  OD_SET_ORDER,
  OD_SET_EDITOR,
  OD_SET_TIPS,
  OD_SUBMIT,
  OD_RESET,
} from "./actionTypes";
import fetchData from "../utils/fetch_data";

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

// export const asyncGetTitle = () => {
//   return (dispatch) => {
//     fetchData({ method: "get", url: "/getTitle", dispatch }).then((data) => {
//       setTimeout(() => {
//         dispatch(setTitle(data.title));
//       }, 1000 * 0);
//     });
//   };
// };

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

// export const asyncGetCategory = () => {
//   return (dispatch) => {
//     fetchData({ method: "get", url: "/getcategories", dispatch }).then(
//       (categories) => {
//         setTimeout(() => {
//           dispatch(setCategories(categories));
//         }, 1000 * 0);
//       }
//     );
//   };
// };

export const setFoodList = (foodList) => ({
  type: FD_SET_FOODLIST,
  payload: {
    foodList,
  },
});

// export const asyncGetFoodList = () => {
//   return (dispatch) => {
//     fetchData({ method: "get", url: "/getfoodlist", dispatch }).then(
//       (foodList) => {
//         dispatch(setFoodList(foodList));
//       }
//     );
//   };
// };

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

export const setOrderTips = (value, caculateType, isShow = true) => ({
  type: OD_SET_TIPS,
  payload: {
    isShow,
    caculateType,
    value,
  },
});

export const orderSubmit = (status, orderNumber) => ({
  type: OD_SUBMIT,
  payload: { status, orderNumber },
});

export const orderReset = () => ({
  type: OD_RESET,
});

export const asyncOrderSubmit = (paymentInfo, summaryInfo) => {
  return (dispatch, getState) => {
    let { order } = getState();
    fetchData({
      method: "post",
      url: "/ordersubmit",
      data: { paymentInfo, summaryInfo, order: order.order },
      dispatch,
    }).then((data) => {
      dispatch(orderSubmit(STATUS.SUCCESS, data.orderNumber));
    });
  };
};

export const setFetchDataStatus = (status) => ({
  type: SYS_FETCH_DATA,
  payload: status,
});

export const asyncFetchSysData = () => {
  return (dispatch) => {
    let promiseTitle = fetchData({
      method: "get",
      url: "/getTitle",
      dispatch,
    });
    let promiseCategories = fetchData({
      method: "get",
      url: "/getcategories",
      dispatch,
    });
    let promiseFoodlist = fetchData({
      method: "get",
      url: "/getfoodlist",
      dispatch,
    });
    Promise.all([promiseTitle, promiseCategories, promiseFoodlist])
      .then((values) => {
        dispatch(setTitle(values[0].title));
        dispatch(setCategories(values[1]));
        dispatch(setFoodList(values[2]));
        dispatch(setFetchDataStatus(STATUS.SUCCESS));
      })
      .catch(() => {
        dispatch(setFetchDataStatus(STATUS.FAILURE));
      });
  };
};

export const sysReloadData = () => ({
  type: SYS_RELOAD_DATA,
});

export const setHomeEnterAnimation = (status) => ({
  type: SYS_HOME_ENTER_ANIMATION,
  payload: status,
});
