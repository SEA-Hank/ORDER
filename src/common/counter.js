import "../scss/counter.scss";
import { forwardRef, useEffect, useState, useImperativeHandle } from "react";
import PropTypes from "prop-types";

const ActionType = {
  SUB: "subtraction",
  ADD: "addition",
};

const Regex = {
  INT: /^-?[1-9]\d*$/,
  DECIMAL: /^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$/,
};

let Counter = (props, ref) => {
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  useImperativeHandle(ref, () => ({
    getVal: () => {
      return value;
    },
    setVal: (val) => {
      setValue(val);
    },
  }));

  const isValidInput = (val) => {
    let { numberType } = props;

    return val === "" || val === "-" || Regex[numberType].test(val);
  };

  const isInValRange = (val) => {
    let { min, max } = props;
    if ((!isNaN(min) && val < min) || (!isNaN(max) && val > max)) {
      return false;
    }
    return true;
  };

  const btnClick = (action) => {
    let { step, onChange } = props;
    let val = action === ActionType.ADD ? value + step : value - step;
    if (isInValRange(val)) {
      setValue(val);
      onChange && onChange(val);
    }
  };

  const onChange = (val) => {
    let { onChange } = props;
    if (isValidInput(val) && isInValRange(parseFloat(val))) {
      setValue(val);
      onChange && onChange(val);
    }
  };

  let { allowInput, width, height } = props;
  let style = {};
  width && (style.width = width + "px");
  height && (style.height = height + "px");

  return (
    <div style={style} className="counter">
      <button
        className="counter-btn btnleft"
        onClick={() => {
          btnClick(ActionType.SUB);
        }}
      >
        -
      </button>
      <div className="counter-content-wrapper">
        {allowInput ? (
          <input
            type="text"
            className="counter-input"
            value={value}
            onChange={(event) => {
              onChange(event.target.value);
            }}
          ></input>
        ) : (
          <div className="counter-content">{value}</div>
        )}
      </div>
      <button
        className="counter-btn btnright"
        onClick={() => {
          btnClick(ActionType.ADD);
        }}
      >
        +
      </button>
    </div>
  );
};

Counter = forwardRef(Counter);

Counter.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func,
  allowInput: PropTypes.bool,
  numberType: PropTypes.oneOf(["INT", "DECIMAL"]),
  value: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

Counter.defaultProps = {
  step: 1,
  allowInput: false,
  numberType: "INT",
  value: 0,
  onChange: null,
  min: NaN,
  max: NaN,
};

export default Counter;
