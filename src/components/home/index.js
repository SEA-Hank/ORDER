import "../../scss/home.scss";
import Category from "./category";
import FoodList from "./food-list";
import Buttom from "./buttom";
import { setHomeEnterAnimation } from "../../redux/actions";
import { connect } from "react-redux";
import { useRef } from "react";

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
