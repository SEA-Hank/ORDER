import "../scss/shoppingCar.scss";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faEdit } from "@fortawesome/free-solid-svg-icons";
import SpcCategory from "./spcCategory";
import SpcSummary from "./spcSummary";
const ShoppingCar = ({ order }) => {
  var isShowGategory = (items) => {
    for (let key in items) {
      if (items[key] > 0) {
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
          />
        );
      }
    }
    return categories;
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
        <div className="spc-summary">
          <SpcSummary />
        </div>
        <div className="spc-comfirm">
          <button>checkout</button>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { order: state.order.order };
};

export default connect(mapStateToProps, {})(ShoppingCar);
