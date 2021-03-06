import Operation from "./Operation";
import { connect } from "react-redux";
import { setOrder } from "../../../redux/actions";
/**
 * item of food-list page
 *
 */
const Item = (props) => {
  let { id, category, name, description, img, price, countOfOrder } = props;
  let { setOrder } = props;
  let itemOnClick = () => {
    if (countOfOrder <= 0) {
      setOrder(category, id, 1);
    }
  };
  return (
    <div className="food-category-items" onClick={itemOnClick}>
      <div className="item-image">
        <img src={img}></img>
      </div>
      <div className="item-description">
        <p className="item-name">{name}</p>
        <p className="item-instruction">{description}</p>
        <p className="item-price">
          $ <strong>{price.toFixed(2)}</strong>
        </p>
      </div>
      <Operation category={category} foodId={id} countOfOrder={countOfOrder} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  let countOfOrder = state.order.order[ownProps.category]?.[ownProps.id] || 0;
  return { countOfOrder };
};

export default connect(mapStateToProps, { setOrder })(Item);
