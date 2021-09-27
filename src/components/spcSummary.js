//todo
import { connect } from "react-redux";
import SpcSummaryItem from "./SpcSummaryItem";
const SpsSummary = ({ total, subtotal, tax }) => {
  return (
    <table>
      <SpcSummaryItem key="subtotal" title={"subtotal"} amout={subtotal} />
      <SpcSummaryItem key="tax" title={"tax"} amout={tax} />
      <SpcSummaryItem key="Total" title={"Total"} amout={total} strong={true} />
    </table>
  );
};
const mapStateToProps = (state) => {
  let subtotal = 0;
  let total = 0;
  let tax = 0;
  let orders = state.order.order;
  let foodList = state.foodList.foodList;
  for (let category in orders) {
    let ctgList = foodList[category];
    for (let foodId in orders[category]) {
      let foodInfo = ctgList.find((e) => e.id == foodId);
      subtotal += foodInfo.price * orders[category][foodId];
    }
  }
  tax = subtotal * state.order.taxRate;
  total = tax + subtotal;
  return { total, subtotal, tax, ...state.order.order.tips };
};
export default connect(mapStateToProps, null)(SpsSummary);
