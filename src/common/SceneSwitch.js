import { Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import React from "react";
import "../scss/scene_switch.scss";
import { useEffect, useState } from "react";

const SceneSwitch = withRouter(
  ({ location, history, children, className, config = {} }) => {
    const [key, setKey] = useState();
    const getAnimationClassName = () => {
      return config[location.pathname]?.[history.action];
    };

    let animationClassName = getAnimationClassName();
    if (animationClassName) {
      if (key !== location.pathname) {
        setKey(location.pathname);
      }
    }

    return (
      <TransitionGroup
        className={className}
        childFactory={(child) =>
          React.cloneElement(child, {
            classNames: animationClassName,
          })
        }
      >
        <CSSTransition timeout={500} key={key}>
          <Switch location={location}>{children}</Switch>
        </CSSTransition>
      </TransitionGroup>
    );
  }
);
export default SceneSwitch;
