import "../../scss/header.scss";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { hdBtnTrigle } from "../../redux/actions";
import { useLocation, useHistory } from "react-router-dom";
const Header = ({ title }) => {
  let location = useLocation();
  let history = useHistory();

  let [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    setShowBtn(location.pathname != "/");
  }, [location]);

  useEffect(() => {
    document.title = title;
  }, [title]);

  const goBack = () => {
    if (location.pathname != "/") {
      history.goBack();
    }
  };

  return (
    <div className="appheader">
      <span onClick={goBack} className={`button ${showBtn ? "show" : ""}`}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </span>
      <span className="restaurant-name">{title || "Loading..."}</span>
    </div>
  );
};
const mapStateToProps = (state) => {
  return state.header;
};
export default connect(mapStateToProps, { hdBtnTrigle })(Header);
