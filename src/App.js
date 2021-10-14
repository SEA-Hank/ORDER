import "./scss/cssReset.scss";

import Loading from "./components/loading";
import Main from "./components/main";
import { useEffect } from "react";
import { asyncFetchSysData } from "./redux/actions";
import { STATUS } from "./redux/actionTypes";
import { connect } from "react-redux";
import Error from "./components/Error";
import { Route, withRouter, Switch } from "react-router-dom";
import SceneSwitch from "./common/SceneSwitch";

let App = ({ asyncFetchSysData, status, history }) => {
  useEffect(() => {
    if (status === STATUS.PENDING) {
      history.replace("/loading");
    }
  }, []);

  return (
    <Switch>
      <Route path="/error" component={Error} />
      <Route path="/loading" component={Loading} />
      <Route path="/" component={Main} />
    </Switch>
  );
};
App = withRouter(App);
const mapStateToProps = (state) => {
  return state.app;
};
export default connect(mapStateToProps, { asyncFetchSysData })(App);

{
  /* </Router><Error />
    // <>
    //   {status === STATUS.PENDING && <Loading />}
    //   {status === STATUS.SUCCESS && <Main />}
    // </> */
}
