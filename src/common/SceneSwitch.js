import { Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import React from "react";
import "../scss/scene_switch.scss";
const ANIMATION_MAP = {
  PUSH: "forward",
  POP: "back",
  REPLACE: "bottom",
};

const SceneSwitch = withRouter(({ location, history, children, className }) => {
  return (
    <TransitionGroup
      className={className}
      childFactory={(child) =>
        React.cloneElement(child, {
          classNames: ANIMATION_MAP[history.action],
        })
      }
    >
      <CSSTransition timeout={500} key={location.pathname}>
        <Switch location={location}>{children}</Switch>
      </CSSTransition>
    </TransitionGroup>
  );
});
export default SceneSwitch;
