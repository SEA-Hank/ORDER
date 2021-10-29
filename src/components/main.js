import "../scss/main.scss";
import { Route } from "react-router-dom";
import Home from "./home";
import Header from "./header";
import Checkout from "./checkout";
import OrderComplete from "./order-complete";
import SceneSwitch from "../utils/SceneSwitch";
import { main_config } from "../utils/scene_switch_config";
/*
website's main entrance 
*/
const Main = () => {
  return (
    <div className="main">
      <Route path="/" component={Header} />
      <SceneSwitch className="scene-switch-wrapper" config={main_config}>
        <Route path="/ordercomplete" component={OrderComplete} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/" component={Home} />
      </SceneSwitch>
    </div>
  );
};
export default Main;
