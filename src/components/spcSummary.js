//todo
import { connect } from "react-redux";
import SpcSummaryItem from "./SpcSummaryItem";
import { calculateSummaryInfo } from "../common/common";
const SpsSummary = ({ total, subtotal, tax, tips }) => {
  return (
    <table>
      <tbody>
        <SpcSummaryItem key="subtotal" title={"subtotal"} amout={subtotal} />
        <SpcSummaryItem key="tax" title={"tax"} amout={tax} />
        {tips !== null && (
          <SpcSummaryItem key="tips" title={"tips"} amout={tips} />
        )}
        <SpcSummaryItem
          key="Total"
          title={"Total"}
          amout={total}
          strong={true}
        />
      </tbody>
    </table>
  );
};
const mapStateToProps = (state) => {
  return calculateSummaryInfo(
    state.order.order,
    state.foodList.foodList,
    state.order.tips,
    state.order.taxRate
  );
};
export default connect(mapStateToProps, null)(SpsSummary);
