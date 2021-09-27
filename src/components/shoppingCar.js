import "../scss/shoppingCar.scss";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faEdit } from "@fortawesome/free-solid-svg-icons";
import SpcCategory from "./spcCategory";
const ShoppingCar = ({ order }) => {
  var isShowGategory = (items) => {
    for (let key in items) {
      if (items[key] > 0) {
        return true;
      }
    }
    return false;
  };

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
          <table>
            <tr className="summary-item">
              <td className="sum-item-title">subtotal</td>
              <td className="sum-item-amount">29.99</td>
            </tr>
            <tr className="summary-item">
              <td className="sum-item-title strong">Total</td>
              <td className="sum-item-amount">29.99</td>
            </tr>
          </table>
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
