import "../../../scss/category.scss";
import { connect } from "react-redux";
import Item from "./Item";
import { useEffect, useState, useRef } from "react";
/*
Food category section in home page
parameters
  local: redux data, infos about activated item index
  categories: redux data, food categories
 */
const Category = ({ local, categories }) => {
  const wrapperEl = useRef(null);
  const ulEl = useRef(null);
  const [markerPst, setMarkerPst] = useState("0px");
  /*
  compute the ulEl's scroll bar positon based on activated item.
   */
  let ComputePst = function () {
    let activeItem = ulEl.current.children[local.activatedIndex];

    let offsetLeft = activeItem.offsetLeft;
    let offsetWidth = activeItem.offsetWidth;
    let scrollLeft = wrapperEl.current.scrollLeft;
    let availWidth =
      window.screen.availWidth > 420 ? 420 : window.screen.availWidth;

    let plus = 30;
    this.getScrollLeft = function () {
      if (scrollLeft > offsetLeft) {
        return offsetLeft - plus;
      }
      if (offsetLeft + offsetWidth > scrollLeft + availWidth) {
        return offsetLeft + offsetWidth - availWidth + plus;
      }
      return 0;
    };
    this.getMarkerPst = function () {
      return offsetLeft + offsetWidth / 2 + "px";
    };
  };

  useEffect(() => {
    var pstObj = new ComputePst();

    let sccrollObj = {
      top: 0,
      left: pstObj.getScrollLeft(),
      behavior: "smooth",
    };

    if (sccrollObj.left !== 0) {
      wrapperEl.current.scrollTo(sccrollObj);
    }
    setMarkerPst(pstObj.getMarkerPst());
  }, [local]);

  let items = categories.map((item, index) => {
    return (
      <Item
        key={item.id}
        name={item.name}
        activated={index === local.activatedIndex}
        index={index}
      />
    );
  });

  return (
    <div ref={wrapperEl} className="category">
      <div className="content-wrapper">
        {!isNaN(local.activatedIndex) ? (
          <>
            <ul ref={ulEl} className="category-wrapper">
              {items}
            </ul>
            <span
              className="category-activated-marker"
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

export default connect(mapStateToProps, null)(Category);
