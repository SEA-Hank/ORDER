import { connect } from "react-redux";
import { setCGActivatedIndex } from "../redux/actions";
const CategoryItem = ({ name, activated, index, setCGActivatedIndex }) => {
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

export default connect(null, { setCGActivatedIndex })(CategoryItem);
