import "../scss/shoppingCar.scss";
import { useRef, useState } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import SpcCategory from "./spcCategory";
import SpcSummary from "./spcSummary";
import SpcEditor from "./SpcEditor";
import { calculateSummaryInfo, scrollToBottom } from "../common/common";
import Payment from "./payment";
const ShoppingCar = ({ order, SummaryInfo }) => {
  let popUpEL = useRef(null);
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
          <SpcCategory
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
    scrollToBottom();
  };
  return (
    <div className="shoppingcar-wrapper">
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
              <SpcSummary {...SummaryInfo} />
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
          {showPayment && <Payment SummaryInfo={SummaryInfo}></Payment>}
          <SpcEditor ref={popUpEL}></SpcEditor>
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

export default connect(mapStateToProps, {})(ShoppingCar);
