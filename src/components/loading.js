import "../scss/loading.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
const Loading = () => {
  return (
    <div className="loading-wrapper">
      <div className="loading-image">
        <FontAwesomeIcon icon={faSpinner} />
      </div>
    </div>
  );
};
export default Loading;
