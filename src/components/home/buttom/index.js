import "../../../scss/buttom.scss";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { hdBtnTrigle } from "../../../redux/actions";
const Buttom = ({ count, amount, hdBtnTrigle }) => {
  let [flash, setFlash] = useState(false);
  let history = useHistory();
  useEffect(() => {
    if (count != 0) {
      setFlash(true);
    }
  }, [count]);
  const checkOutClick = () => {
    hdBtnTrigle();
    history.push("/checkout");
  };
  return (
    <div className="checkout">
      <div className="icon">
        <FontAwesomeIcon icon={faShoppingCart} />
        <div className="foodcount">{count}</div>
      </div>
      <div className="amount">$ {amount.toFixed(2)}</div>
      <div className="checkout-button">
        <button onClick={checkOutClick} className={flash ? "flash" : ""}>
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  let count = 0;
  let amount = 0;

  let foodList = state.foodList.foodList;
  let order = state.order.order;

  for (let category in order) {
    for (let foodId in order[category]) {
      let localCount = order[category][foodId];
      count += localCount;
      let price = foodList[category].find((el) => el.id == foodId).price;
      amount += localCount * price;
    }
  }
  return { count, amount };
};

export default connect(mapStateToProps, { hdBtnTrigle })(Buttom);
