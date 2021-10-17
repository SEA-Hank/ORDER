//todo
import Item from "./Item";
const Summary = ({ total, subtotal, tax, tips, isShowTips }) => {
  return (
    <table>
      <tbody>
        <Item key="subtotal" title={"subtotal"} amout={subtotal} />
        <Item key="tax" title={"tax"} amout={tax} />
        {isShowTips && <Item key="tips" title={"tips"} amout={tips} />}
        <Item key="Total" title={"Total"} amout={total} strong={true} />
      </tbody>
    </table>
  );
};
export default Summary;
