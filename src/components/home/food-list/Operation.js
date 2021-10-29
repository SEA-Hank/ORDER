import { useEffect, useState } from "react";
import { setOrder } from "../../../redux/actions";
import { connect } from "react-redux";
/**
 Food item operation
 */
const Operation = ({ category, foodId, countOfOrder, setOrder }) => {
  const Position = {
    UP: "-100px",
    DOWN: "0px",
    ORIGIN: "-50px",
  };
  const [counterPst, setCounterPst] = useState(Position.ORIGIN);

  const [diplayNum, setDisplayNum] = useState(0);

  const [animation, setAnimation] = useState(true);

  const onClick = (step, position) => {
    setAnimation(true);
    setOrder(category, foodId, countOfOrder + step);
    setCounterPst(position);
  };

  const onTransitionEnd = () => {
    setAnimation(false);
    setDisplayNum(countOfOrder);
    setCounterPst(Position.ORIGIN);
  };
  useEffect(() => {
    if (diplayNum <= 0) {
      setDisplayNum(countOfOrder);
    }
  }, [countOfOrder]);

  return (
    <div className={`item-operation ${countOfOrder <= 0 ? "" : "show"}`}>
      <div
        className="button"
        onClick={() => {
          onClick(-1, Position.DOWN);
        }}
      >
        -
      </div>
      <div className="count">
        <div className="number-wrapper">
          <div
            onTransitionEnd={onTransitionEnd}
            className={`numbers ${animation ? "animation" : ""}`}
            style={{ top: counterPst }}
          >
            <div>{diplayNum - 1}</div>
            <div>{diplayNum}</div>
            <div>{diplayNum + 1}</div>
          </div>
        </div>
      </div>
      <div
        className="button"
        onClick={() => {
          onClick(1, Position.UP);
        }}
      >
        +
      </div>
    </div>
  );
};

export default connect(null, { setOrder })(Operation);
