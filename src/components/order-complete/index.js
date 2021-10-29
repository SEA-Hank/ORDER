import "../../scss/order_complete.scss";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { orderReset } from "../../redux/actions";
import { useEffect } from "react";
import { useState } from "react";

/*
OrderComplete page
This page for at the end of order
parameters
  orderNumber: redux data, the order number
  orderReset: redux action function, empty user's order.
*/
const OrderComplete = ({ orderNumber, orderReset }) => {
  let history = useHistory();
  const [height, setHeight] = useState(window.innerHeight + "px");
  const btnClick = () => {
    history.goBack();
  };
  const onResize = () => {
    setHeight(window.innerHeight + "px");
  };
  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      orderReset();
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <div className="order-complete" style={{ height: height }}>
      <p className="ordernum">{orderNumber}</p>
      <p className="words">Thank You</p>
      <p className="time">Your order will be ready in 30 minutes</p>
      <p>
        <button className="btnOA" onClick={btnClick}>
          ORDER AGAIN
        </button>
      </p>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { orderNumber: state.order.orderNumber };
};
export default connect(mapStateToProps, { orderReset })(OrderComplete);
