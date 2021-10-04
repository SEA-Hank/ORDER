import "../scss/payment.scss";
import TipSelector from "./tipSelector";
import Input from "../common/input";
import { useRef } from "react";
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
  const userNameEl = useRef(null);
  const phoneNumEl = useRef(null);
  const cardNumEl = useRef(null);
  const expirationEl = useRef(null);
  const cvcEl = useRef(null);

  const subBtnClick = () => {
    let formEls = [userNameEl, phoneNumEl, cardNumEl, expirationEl, cvcEl];
    let isReady = true;
    let paymentInfo = {};
    formEls.forEach((ele) => {
      let checkRes = ele.current.check();
      isReady = isReady && checkRes[0];
      paymentInfo[checkRes[2]] = paymentInfo[1];
    });
    if (isReady) {
    }
  };

  return (
    <div className="payment-wrapper">
      <PaymentStepWrapper step="1">
        <TipSelector />
      </PaymentStepWrapper>
      <PaymentStepWrapper step="2">
        <div className="payment-userInfo">
          <Input
            description="Your Name"
            name="name"
            ref={userNameEl}
            errorMsg="please input your name"
          />

          <Input
            description={"Phone Number"}
            inputFormat="(###)###-####"
            textReg={/^\(\d{3}\)\d{3}-\d{4}$/}
            name="phone"
            errorMsg="phone format should be (xxx)xxx-xxxx"
            ref={phoneNumEl}
          />
        </div>
      </PaymentStepWrapper>
      <PaymentStepWrapper step="3">
        <div className="payment-cardInfo">
          <Input
            description="Card Number"
            inputFormat="####-####-####-####"
            textReg={/^\d{4}-\d{4}-\d{4}-\d{4}$/}
            name="cardnumber"
            errorMsg="card number format should be xxxx-xxxx-xxxx-xxxx"
            ref={cardNumEl}
          />
          <div className="payment-cardInfo-expiratioin">
            <Input
              description="Expiratioin"
              inputFormat="##/##"
              errorMsg="expiratioinformat should be xx/xx"
              textReg={/^\d{2}\/\d{2}$/}
              name="expiratioin"
              ref={expirationEl}
            />
            <Input
              description="CVC"
              inputFormat="###"
              textReg={/^\d{3}$/}
              name="cvc"
              errorMsg="expiratioin format should be xxx"
              ref={cvcEl}
            />
          </div>
        </div>
      </PaymentStepWrapper>
      <div>
        <button className="payment-submit-btn" onClick={subBtnClick}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};
export default Payment;
