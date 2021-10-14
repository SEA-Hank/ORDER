import "../scss/payment.scss";
import TipSelector from "./tipSelector";
import Input from "../common/input";
import { useEffect, useRef, useState } from "react";
import { scrollToBottom } from "../common/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { asyncOrderSubmit } from "../redux/actions";
import { STATUS } from "../redux/actionTypes";
const PaymentStepWrapper = (props) => {
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

const Payment = ({ SummaryInfo, asyncOrderSubmit, status, shoppingCarEle }) => {
  let history = useHistory();
  const userNameEl = useRef(null);
  const phoneNumEl = useRef(null);
  const cardNumEl = useRef(null);
  const expirationEl = useRef(null);
  const cvcEl = useRef(null);
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (status === STATUS.SUCCESS) {
      history.replace("/thanks");
    }
  }, [status]);

  const subBtnClick = () => {
    if (!isProcessing) {
      let formEls = [userNameEl, phoneNumEl, cardNumEl, expirationEl, cvcEl];
      let isReady = true;
      let paymentInfo = {};
      formEls.forEach((ele) => {
        let checkRes = ele.current.check();
        isReady = isReady && checkRes[0];
        paymentInfo[checkRes[2]] = paymentInfo[1];
      });
      if (isReady) {
        setIsProcessing(true);
        asyncOrderSubmit();
      }
    }
  };

  const tipsOnChange = (val) => {
    setShowPaymentInfo(val);
    scrollToBottom(shoppingCarEle.current);
  };

  return (
    <div className="payment-wrapper">
      <PaymentStepWrapper step="1" customClass="fadeIn">
        <TipSelector {...SummaryInfo} onchange={tipsOnChange} />
      </PaymentStepWrapper>
      {showPaymentInfo && (
        <div className="payment-info fadeIn">
          <PaymentStepWrapper step="2">
            <div className="payment-userInfo">
              <Input
                description="Your Name"
                name="name"
                ref={userNameEl}
                errorMsg="please input your name"
                allowInput={!isProcessing}
              />

              <Input
                description={"Phone Number"}
                inputFormat="(###)###-####"
                textReg={/^\(\d{3}\)\d{3}-\d{4}$/}
                name="phone"
                errorMsg="phone format should be (xxx)xxx-xxxx"
                ref={phoneNumEl}
                allowInput={!isProcessing}
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
                  allowInput={!isProcessing}
                />
                <Input
                  description="CVC"
                  inputFormat="###"
                  textReg={/^\d{3}$/}
                  name="cvc"
                  errorMsg="expiratioin format should be xxx"
                  ref={cvcEl}
                  allowInput={!isProcessing}
                />
              </div>
            </div>
          </PaymentStepWrapper>
          <p className="payment-total">
            Total: ${SummaryInfo.total.toFixed(2)}
          </p>
          <div>
            <button className="payment-submit-btn" onClick={subBtnClick}>
              {isProcessing ? (
                <span>
                  <FontAwesomeIcon icon={faSpinner} />
                  <i>PROCESSING...</i>
                </span>
              ) : (
                "SUBMIT"
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  let { order } = state;
  return { status: order.status };
};

export default connect(mapStateToProps, { asyncOrderSubmit })(Payment);
