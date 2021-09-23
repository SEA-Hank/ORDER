import FoodItem from "./foodItem";
import { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { setCGActivatedIndex } from "../redux/actions";
const FoodCategory = (props) => {
  const GAP = 100;
  let {
    title,
    itmes,
    index,
    setCGActivatedIndex,
    activatedIndex,
    isActivatedByClick,
    scrollObserver,
  } = props;
  const titleEl = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!scrollObserver.isLock) {
        let top = titleEl.current.getBoundingClientRect().top;
        if (top <= GAP && top > 0) {
          setCGActivatedIndex(index, false);
        }
      }
    });
  }, []);

  useEffect(() => {
    if (activatedIndex === index && isActivatedByClick) {
      let top = titleEl.current.getBoundingClientRect().top;
      scrollObserver.lockScrollEvent();
      window.scrollTo({
        top: document.documentElement.scrollTop + top - GAP,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [activatedIndex, isActivatedByClick]);

  return (
    <div className="food-category">
      <p ref={titleEl} className="food-category-title">
        {title}
      </p>
      {itmes.map((item) => (
        <FoodItem key={item.id} category={title} {...item} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { ...state.category.local };
};

export default connect(mapStateToProps, { setCGActivatedIndex })(FoodCategory);