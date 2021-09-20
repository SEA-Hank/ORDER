import "../scss/header.scss";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import { hdBtnTrigle, asyncGetTitle } from "../redux/actions";
const Header = ({ title, local, asyncGetTitle }) => {
  useEffect(() => {
    if (!title) {
      asyncGetTitle();
      return;
    }
    document.title = title;
  }, [title]);
  return (
    <div className="appheader">
      <span className={`button ${local.showBtn ? "show" : ""}`}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </span>
      <span className="restaurant-name">{title || "Loading..."}</span>
    </div>
  );
};
const mapStateToProps = (state) => {
  return state.header;
};
export default connect(mapStateToProps, { asyncGetTitle, hdBtnTrigle })(Header);
