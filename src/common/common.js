import { TipCaculateType } from "../redux/actionTypes";
export const calculateSummaryInfo = (orders, foodList, tips, taxRate) => {
  let subtotal = 0;
  let totalWithoutTips = 0;
  let tax = 0;
  let total = 0;
  let tipVal = 0;
  for (let category in orders) {
    let ctgList = foodList[category];
    for (let foodId in orders[category]) {
      let foodInfo = ctgList.find((e) => e.id == foodId);
      subtotal += foodInfo.price * orders[category][foodId];
    }
  }
  subtotal = toDecimal(subtotal);
  tax = toDecimal(subtotal * taxRate);
  totalWithoutTips = tax + subtotal;
  tipVal =
    tips.caculateType === TipCaculateType.EXACT
      ? tips.value
      : toDecimal(totalWithoutTips * tips.value);

  total = totalWithoutTips + tipVal;
  return {
    subtotal,
    totalWithoutTips,
    total,
    tax,
    tips: tipVal,
    isShowTips: tips.isShow,
  };
};
export const toDecimal = (number, decimal = 2) => {
  return parseFloat(number.toFixed(decimal));
};

export const scrollToBottom = () => {
  setTimeout(() => {
    window.scrollTo({
      top: document.body.clientHeight,
      left: 0,
      behavior: "smooth",
    });
  }, 0);
};
