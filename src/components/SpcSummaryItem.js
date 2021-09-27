const SpcSummaryItem = ({ title, amout, strong = false }) => {
  return (
    <tr className="summary-item">
      <td className={`sum-item-title ${strong ? "strong" : ""}`}>{title}</td>
      <td className="sum-item-amount">{amout.toFixed(2)}</td>
    </tr>
  );
};
export default SpcSummaryItem;
