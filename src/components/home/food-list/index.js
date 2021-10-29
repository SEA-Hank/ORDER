import "../../../scss/food_list.scss";
import Category from "./Category";
import { connect } from "react-redux";
import { useCallback } from "react";
import { useRef } from "react";

/**
 food-list page
 parameters
  foodList: redux data
 */
const FoodList = ({ foodList }) => {
  const flEle = useRef();
  /*
   isLock will be true when scroll event by user click the categories item
  */
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
          <Category
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
