import "./scss/css_reset.scss";
import Loading from "./components/Loading";
import Main from "./components/Main";
import { useEffect } from "react";
import { STATUS } from "./redux/actionTypes";
import { connect } from "react-redux";
import Error from "./components/Error";
import { Route, withRouter } from "react-router-dom";
import SceneSwitch from "./utils/SceneSwitch";
import { loading_config } from "./utils/scene_switch_config";

let App = ({ status, history }) => {
  useEffect(() => {
    if (status === STATUS.PENDING) {
      history.replace("/loading");
    }
  }, []);

  return (
    <SceneSwitch className={"loading_scene_switch"} config={loading_config}>
      <Route path="/error" component={Error} />
      <Route path="/loading" component={Loading} />
      {status !== STATUS.PENDING && <Route path="/" component={Main} />}
    </SceneSwitch>
  );
};
App = withRouter(App);
const mapStateToProps = (state) => {
  return state.app;
};
export default connect(mapStateToProps, null)(App);
