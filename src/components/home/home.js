import "../../scss/home.scss";
import Category from "../category";
import FoodList from "../foodList";
import CheckOut from "../checkOut";
import { setHomeEnterAnimation } from "../../redux/actions";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useRef } from "react";

const Home = ({ enterAnimation, setHomeEnterAnimation }) => {
  const homeEl = useRef();

  const onTransitionEnd = () => {
    setHomeEnterAnimation(false);
  };

  return (
    <div
      ref={homeEl}
      onTransitionEnd={onTransitionEnd}
      className={`home ${enterAnimation ? "fakeIn" : ""}`}
    >
      <Category />
      <FoodList homeEl={homeEl} />
      <CheckOut />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { enterAnimation: state.app.enterAnimation };
};

export default connect(mapStateToProps, { setHomeEnterAnimation })(Home);
