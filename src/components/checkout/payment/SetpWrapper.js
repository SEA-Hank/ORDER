/*
payment page step wrapper
 */
const SetpWrapper = (props) => {
  return (
    <div className={`paymentStep-wrapper ${props.customClass || ""}`}>
      <div className="payment-step">
        <div className="vertical-line"></div>
        <span>{props.step}</span>
      </div>
      <div className="payment-content">{props.children}</div>
    </div>
  );
};
export default SetpWrapper;
