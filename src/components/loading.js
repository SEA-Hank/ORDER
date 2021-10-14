import "../scss/loading.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { asyncFetchSysData } from "../redux/actions";
import { STATUS } from "../redux/actionTypes";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
let Loading = ({ asyncFetchSysData, status, history }) => {
  useEffect(() => {
    switch (status) {
      case STATUS.PENDING:
        asyncFetchSysData();
        history.replace("/loading");
        break;
      case STATUS.SUCCESS:
        history.replace("/");
        break;
      case STATUS.FAILURE:
        history.replace("/error");
        break;
    }
  }, [status]);

  return (
    <div className="loading-wrapper">
      <div className="loading-image">
        <FontAwesomeIcon icon={faSpinner} />
      </div>
    </div>
  );
};

Loading = withRouter(Loading);
const mapStateToProps = (state) => {
  return state.app;
};
export default connect(mapStateToProps, { asyncFetchSysData })(Loading);
