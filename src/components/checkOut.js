import "../scss/checkout.scss";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
const CheckOut = ({ count, amount }) => {
  let [flash, setFlash] = useState(false);
  useEffect(() => {
    if (count != 0) {
      setFlash(true);
    }
  }, [count]);
  return (
    <div className="checkout">
      <div className="icon">
        <FontAwesomeIcon icon={faShoppingCart} />
        <div className="foodcount">{count}</div>
      </div>
      <div className="amount">$ {amount}</div>
      <div className="checkout-button">
        <button className={flash ? "flash" : ""}>CHECKOUT</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  let foodList = state.foodList.foodList;
  let order = state.order.order;
  let count = 0;
  let amount = 0;
  for (let category in order) {
    for (let foodId in order[category]) {
      let localCount = order[category][foodId];
      count += localCount;
      console.log("mapStateToProps");
      let price = foodList[category].find((el) => el.id == foodId).price;
      amount += localCount * price;
    }
  }
  return { count, amount };
};

export default connect(mapStateToProps, {})(CheckOut);
