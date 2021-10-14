import "../scss/foodlist.scss";
import FoodCategory from "./foodCategory";
import { connect } from "react-redux";
import { asyncGetFoodList } from "../redux/actions";
import { useEffect, useCallback } from "react";
import { useRef } from "react";

const FoodList = ({ foodList, homeEl }) => {
  const flEle = useRef();

  const scrollObserver = {
    isLock: false,
    unLockTime: 500,
    lockScrollEvent: function () {
      this.isLock = true;
      setTimeout(() => {
        this.isLock = false;
      }, this.unLockTime);
    },
  };

  let generateCategories = useCallback(() => {
    let index = 0;
    let categories = [];
    if (foodList) {
      for (let key in foodList) {
        categories.push(
          <FoodCategory
            scrollObserver={scrollObserver}
            index={index}
            key={key}
            title={key}
            itmes={foodList[key]}
            homeEl={homeEl}
          />
        );
        index++;
      }
    }
    return categories;
  }, [foodList]);

  return (
    <div ref={flEle} className="foodlist">
      {generateCategories()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.foodList;
};

export default connect(mapStateToProps, null)(FoodList);
