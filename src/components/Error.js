import "../scss/error.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
import { sysReloadData } from "../redux/actions";
import { connect } from "react-redux";
/*
Error page
Website will relocate to this page when an error occurred in loading data.
parameters
  sysReloadData: redux action function, for fetching data again
  history: withRouter parameter
*/
let Error = ({ sysReloadData, history }) => {
  const onClick = () => {
    sysReloadData();
    history.replace("/loading");
  };
  return (
    <div className="error-wrapper">
      <p className="error-logo">
        <FontAwesomeIcon icon={faExclamationTriangle} />
      </p>
      <p className="error-words">SOME ERRORS WERE OCCURRED</p>
      <p>
        <button className="btn-reload" onClick={onClick}>
          RELOAD
        </button>
      </p>
    </div>
  );
};
Error = withRouter(Error);

export default connect(null, { sysReloadData })(Error);
