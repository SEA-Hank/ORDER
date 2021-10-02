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
  tax = parseFloat((subtotal * taxRate).toFixed(2));
  totalWithoutTips = tax + subtotal;
  tipVal =
    tips.caculateType === "value"
      ? tips.value
      : parseFloat((totalWithoutTips * tips.value).toFixed(2));

  total = totalWithoutTips + tipVal;
  return {
    subtotal,
    totalWithoutTips,
    total,
    tax,
    tips: tips.isShow ? tipVal : null,
  };
};
