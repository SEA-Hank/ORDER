import "./scss/cssReset.scss";

import Loading from "./components/loading";
import Main from "./components/main";
import { useEffect } from "react";
import { asyncFetchSysData } from "./redux/actions";
import { STATUS } from "./redux/actionTypes";
import { connect } from "react-redux";

function App({ asyncFetchSysData, status }) {
  useEffect(() => {
    if (status === STATUS.PENDING) {
      asyncFetchSysData();
    }
  }, []);

  return (
    //<Thanks />
    <>
      {status === STATUS.PENDING && <Loading />}
      {status === STATUS.SUCCESS && <Main />}
    </>
  );
}
const mapStateToProps = (state) => {
  return state.app;
};
export default connect(mapStateToProps, { asyncFetchSysData })(App);
