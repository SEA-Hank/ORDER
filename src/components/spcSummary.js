//todo
import SpcSummaryItem from "./SpcSummaryItem";
const SpsSummary = ({ total, subtotal, tax, tips, isShowTips }) => {
  return (
    <table>
      <tbody>
        <SpcSummaryItem key="subtotal" title={"subtotal"} amout={subtotal} />
        <SpcSummaryItem key="tax" title={"tax"} amout={tax} />
        {isShowTips && (
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
export default SpsSummary;
