import "./scss/cssReset.scss";

import Loading from "./components/loading";
import Main from "./components/main";
import { useEffect } from "react";
import { STATUS } from "./redux/actionTypes";
import { connect } from "react-redux";
import Error from "./components/Error";
import { Route, withRouter, Switch } from "react-router-dom";
import SceneSwitch from "./common/SceneSwitch";
import { loading_config } from "./common/scene_switch_config";

let App = ({ status, history }) => {
  useEffect(() => {
    if (status === STATUS.PENDING) {
      history.replace("/loading");
    }
  }, []);

  return (
    <SceneSwitch config={loading_config}>
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
