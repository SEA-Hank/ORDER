import "../../../scss/payment.scss";
import TipsSelector from "./TipsSelector";
import Input from "../../../utils/Input";
import { useEffect, useRef, useState } from "react";
import { scrollToBottom } from "../../../utils/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { asyncOrderSubmit } from "../../../redux/actions";
import { STATUS } from "../../../redux/actionTypes";
import SetpWrapper from "./SetpWrapper";

const Payment = ({ SummaryInfo, asyncOrderSubmit, status }) => {
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
      history.replace("/ordercomplete");
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
    scrollToBottom();
  };

  return (
    <div className="payment-wrapper">
      <SetpWrapper step="1" customClass="fadeIn">
        <TipsSelector {...SummaryInfo} onchange={tipsOnChange} />
      </SetpWrapper>
      {showPaymentInfo && (
        <div className="payment-info fadeIn">
          <SetpWrapper step="2">
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
          </SetpWrapper>
          <SetpWrapper step="3">
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
          </SetpWrapper>
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
