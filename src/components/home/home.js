import "../../scss/home.scss";
import Category from "../category";
import FoodList from "../foodList";
import CheckOut from "../checkOut";
import { setHomeEnterAnimation } from "../../redux/actions";
import { useEffect } from "react";
import { connect } from "react-redux";

const Home = ({ enterAnimation, setHomeEnterAnimation }) => {
  useEffect(() => {
    setTimeout(() => {
      setHomeEnterAnimation(false);
    }, 1000);
  }, []);

  return (
    <div className={`home ${enterAnimation ? "fakeIn" : ""}`}>
      <Category />
      <FoodList />
      <CheckOut />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { enterAnimation: state.app.enterAnimation };
};

export default connect(mapStateToProps, { setHomeEnterAnimation })(Home);
