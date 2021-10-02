import "../scss/payment.scss";
import TipSelector from "./tipSelector";
const PaymentStepWrapper = (props) => {
  return (
    <div className="paymentStep-wrapper">
      <div className="payment-step">
        <div className="vertical-line"></div>
        <span>{props.step}</span>
      </div>
      <div className="payment-content">{props.children}</div>
    </div>
  );
};

const Payment = () => {
  return (
    <div className="payment-wrapper">
      <PaymentStepWrapper step="1">
        <TipSelector />
      </PaymentStepWrapper>
      <PaymentStepWrapper step="2" />
      <PaymentStepWrapper step="3" />
    </div>
  );
};
export default Payment;
