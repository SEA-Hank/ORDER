import "../scss/thanks.scss";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { orderReset } from "../redux/actions";
import { useEffect } from "react";
const Thanks = ({ orderNumber, orderReset }) => {
  let history = useHistory();
  const btnClick = () => {
    history.goBack();
  };
  useEffect(() => {
    return () => {
      orderReset();
    };
  }, []);
  return (
    <div className="thanks">
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
export default connect(mapStateToProps, { orderReset })(Thanks);
