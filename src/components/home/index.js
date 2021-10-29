import "../../scss/home.scss";
import Category from "./category";
import FoodList from "./food-list";
import Buttom from "./buttom";
import { setHomeEnterAnimation } from "../../redux/actions";
import { connect } from "react-redux";
import { useRef } from "react";
/*
Home page
This page consist of Category, FoodList, Buttom pages
parameters
  enterAnimation: redux data, Whether to perform animation
  setHomeEnterAnimation: redux action function, Whether to perform animation
*/
const Home = ({ enterAnimation, setHomeEnterAnimation }) => {
  const onTransitionEnd = () => {
    setHomeEnterAnimation(false);
  };

  return (
    <div
      onTransitionEnd={onTransitionEnd}
      className={`home ${enterAnimation ? "fakeIn" : ""}`}
    >
      <Category />
      <FoodList />
      <Buttom />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { enterAnimation: state.app.enterAnimation };
};

export default connect(mapStateToProps, { setHomeEnterAnimation })(Home);
