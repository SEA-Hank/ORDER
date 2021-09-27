import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
const SpcItem = ({ info, quantity }) => {
  return (
    <div className="list-item">
      <div className="item-info">
        <p className="item-name">
          {info.name}
          <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
        </p>
        <p className="item-count">
          <span className="qty">Qty: {quantity}</span>
          <span className="formula">
            ${info.price.toFixed(2)} x {quantity}
          </span>
        </p>
      </div>
      <div className="price-info">$ {(quantity * info.price).toFixed(2)}</div>
    </div>
  );
};
const mapStateToProps = (state, ownProp) => {
  let info = state.foodList.foodList?.[ownProp.category].find(
    (el) => el.id == ownProp.foodId
  );
  return { info: info };
};

export default connect(mapStateToProps, {})(SpcItem);
