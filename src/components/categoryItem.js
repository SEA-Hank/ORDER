import { useRef } from "react";
import { connect } from "react-redux";
import { setCGActiveIndex } from "../redux/actions";
const CategoryItem = ({ name, active, index, setCGActiveIndex }) => {
  const liEl = useRef(null);
  return (
    <li
      onClick={() => {
        setCGActiveIndex(index, liEl.current);
      }}
      ref={liEl}
      className={`category-item ${active ? "actived" : ""}`}
    >
      {name}
    </li>
  );
};

export default connect(null, { setCGActiveIndex })(CategoryItem);
