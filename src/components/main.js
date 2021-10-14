import "../scss/main.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home/home";
import Header from "./header";
import ShoppingCar from "./shoppingCar";
import Thanks from "./thanks";
import SceneSwitch from "../common/SceneSwitch";

const Main = () => {
  return (
    <div className="main">
      <Route path="/" component={Header} />
      <SceneSwitch className="scene-switch-wrapper">
        <Route path="/thanks" component={Thanks} />
        <Route path="/checkout" component={ShoppingCar} />
        <Route path="/" component={Home} />
      </SceneSwitch>
    </div>
  );
};
export default Main;
