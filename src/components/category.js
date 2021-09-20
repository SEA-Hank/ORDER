import "../scss/category.scss";
import { connect } from "react-redux";
import { asyncGetCategory } from "../redux/actions";
import CategoryItem from "./categoryItem";
import { useEffect, useState, useRef } from "react";
const Category = ({ local, categories, asyncGetCategory }) => {
  const wrapperEl = useRef(null);
  const ulEl = useRef(null);
  const [markerPst, setMarkerPst] = useState("0px");

  useEffect(() => {
    if (isNaN(local.activeIndex)) {
      asyncGetCategory();
      return;
    }
    let activeItem = local.activeItem;
    if (!activeItem) {
      activeItem = ulEl.current.firstElementChild;
    }
    let offsetLeft = activeItem.offsetLeft;
    let offsetWidth = activeItem.offsetWidth;
    let scrollLeft = wrapperEl.current.scrollLeft;
    let availWidth = window.screen.availWidth;
    let plus = 30;
    let sccrollObj = {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
    if (scrollLeft > offsetLeft) {
      sccrollObj.left = offsetLeft - plus;
    }
    if (offsetLeft + offsetWidth > scrollLeft + availWidth) {
      sccrollObj.left = offsetLeft + offsetWidth - availWidth + plus;
    }
    if (sccrollObj.left !== 0) {
      wrapperEl.current.scrollTo(sccrollObj);
    }
    setMarkerPst(offsetLeft + offsetWidth / 2 + "px");
  }, [local]);

  let items = categories.map((item, index) => {
    return (
      <CategoryItem
        key={item.id}
        name={item.name}
        active={index === local.activeIndex}
        index={index}
      />
    );
  });

  return (
    <div ref={wrapperEl} className="category">
      <div className="content-wrapper">
        {!isNaN(local.activeIndex) ? (
          <>
            <ul ref={ulEl} className="category-wrapper">
              {items}
            </ul>
            <span
              className="category-actived-marker"
              style={{ left: markerPst }}
            ></span>
          </>
        ) : (
          <div className="loading">Loading...</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.category;
};

export default connect(mapStateToProps, { asyncGetCategory })(Category);
