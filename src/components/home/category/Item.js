import { connect } from "react-redux";
import { setCGActivatedIndex } from "../../../redux/actions";
/*
item of food category.
parameters
  category name: food name
  activated: item whether activated or not
  index: item index
  setCGActivatedIndex: redux action function, record activated item's index
 */
const Item = ({ name, activated, index, setCGActivatedIndex }) => {
  return (
    <li
      onClick={() => {
        setCGActivatedIndex(index, true);
      }}
      className={`category-item ${activated ? "activated" : ""}`}
    >
      {name}
    </li>
  );
};

export default connect(null, { setCGActivatedIndex })(Item);
