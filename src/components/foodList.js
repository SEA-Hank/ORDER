import "../scss/foodlist.scss";
import FoodCategory from "./foodCategory";
import { connect } from "react-redux";
import { asyncGetFoodList } from "../redux/actions";
import { useEffect, useCallback } from "react";

const FoodList = ({ foodList, asyncGetFoodList }) => {
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
  useEffect(() => {
    if (!foodList) {
      asyncGetFoodList();
    }
  }, [foodList]);

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
          />
        );
        index++;
      }
    }
    return categories;
  }, [foodList]);

  return <div className="foodlist">{generateCategories()}</div>;
};

const mapStateToProps = (state) => {
  return state.foodList;
};

export default connect(mapStateToProps, { asyncGetFoodList })(FoodList);
