import "../../scss/checkout.scss";
import { useRef, useState } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Category, { ItemEditor } from "./category";
import Summary from "./summary";
import { calculateSummaryInfo, scrollToBottom } from "../../utils/common";
import Payment from "./payment";
const Checkout = ({ order, SummaryInfo }) => {
  let popUpEL = useRef(null);
  let shoppingCarEle = useRef();
  const [showPayment, setShowPayment] = useState(false);
  let isEmpty = true;
  var isShowGategory = (items) => {
    for (let key in items) {
      if (items[key] > 0) {
        isEmpty = false;
        return true;
      }
    }
    return false;
  };
  //TODO: sort category
  var generateCtg = () => {
    let categories = [];
    for (let categoryName in order) {
      if (isShowGategory(order[categoryName])) {
        categories.push(
          <Category
            key={categoryName}
            category={categoryName}
            items={order[categoryName]}
            popUp={popUpEL}
          />
        );
      }
    }
    return categories;
  };

  const checkOutClick = () => {
    setShowPayment(true);
    scrollToBottom(shoppingCarEle.current);
  };
  return (
    <div ref={shoppingCarEle} className="shoppingcar-wrapper">
      <div className="shoppingcar-detail">
        <div className="spc-detail-title">
          <p className="words">Your Order</p>
          <p className="info">
            <FontAwesomeIcon icon={faInfoCircle} /> Click an item to edit
          </p>
        </div>
        <div className="spc-list">{generateCtg()}</div>
        {!isEmpty && (
          <>
            <div className="spc-summary">
              <Summary {...SummaryInfo} />
            </div>
            <div className="spc-comfirm">
              <button onClick={checkOutClick}>checkout</button>
            </div>
          </>
        )}
        {isEmpty && <div className="spc-empty">EMPTY</div>}
      </div>
      {!isEmpty && (
        <>
          {showPayment && (
            <Payment
              SummaryInfo={SummaryInfo}
              shoppingCarEle={shoppingCarEle}
            ></Payment>
          )}
          <ItemEditor ref={popUpEL}></ItemEditor>
        </>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  let SummaryInfo = calculateSummaryInfo(
    state.order.order,
    state.foodList.foodList,
    state.order.tips,
    state.order.taxRate
  );
  return { order: state.order.order, SummaryInfo };
};

export default connect(mapStateToProps, null)(Checkout);
