import PropTypes from "prop-types";
import { useRef, useState, forwardRef, useImperativeHandle } from "react";
import "../scss/input.scss";
let Input = (props, ref) => {
  let {
    initVal,
    description,
    width,
    height,
    allowInput,
    onChange,
    textReg,
    errorMsg,
    inputFormat,
    placeholder,
    name,
  } = props;

  useImperativeHandle(ref, () => ({
    setVal: (val) => {
      inputOnChange(val);
    },
    getVal: () => {
      return value;
    },
    check: () => {
      let res = value !== "" && (textReg !== null ? textReg.test(value) : true);
      if (!res) {
        setError(!res);
      }
      return [res, value, name];
    },
  }));

  const [value, setValue] = useState(initVal);
  const [activated, setActivated] = useState(value.length !== 0);
  const [error, setError] = useState(false);
  const inputEl = useRef(null);

  let isDel = false;
  const inputOnChange = (val) => {
    val = formatInputValue(val);
    onChange && onChange(val);
    setValue(val);
  };

  const inputKeyDown = (keyCode) => {
    isDel = keyCode === 8;
  };

  const inputOnFocus = () => {
    setActivated(true);
  };
  const inputOnBlur = () => {
    let error = false;
    if (value === "") {
      setActivated(false);
    } else {
      error = textReg && !textReg.test(value);
    }
    setError(error);
  };

  const formatInputValue = (strVal) => {
    if (inputFormat) {
      let f_index = 0;
      let i_index = 0;
      let formattedVal = "";
      while (f_index < inputFormat.length && i_index < strVal.length) {
        let f_val = inputFormat[f_index];
        let i_val = strVal[i_index];
        if (f_val === i_val || f_val === "#") {
          formattedVal += i_val;
          i_index++;
        } else {
          formattedVal += f_val;
        }
        f_index++;
      }
      if (!isDel) {
        while (f_index < inputFormat.length) {
          if (inputFormat[f_index] !== "#") {
            formattedVal += inputFormat[f_index];
            f_index++;
            continue;
          }
          break;
        }
      }
      return formattedVal;
    }
    return strVal;
  };

  let style = {};
  width && (style.width = width);
  height && (style.height = height);
  return (
    <div
      style={style}
      className="input-wrapper"
      tabIndex="-1"
      onFocus={() => {
        inputOnFocus();
        inputEl.current?.focus();
      }}
      onBlur={() => {
        inputOnBlur();
      }}
    >
      <div className={`input-content ${error ? "error" : ""}`}>
        <span className={`input-description ${activated ? "activated" : ""}`}>
          {description}
        </span>
        {allowInput ? (
          <input
            ref={inputEl}
            className="input-input"
            type="text"
            placeholder={activated ? placeholder : ""}
            onChange={(event) => {
              inputOnChange(event.target.value);
            }}
            onKeyDown={(event) => {
              inputKeyDown(event.keyCode);
            }}
            value={value}
            name={name}
          ></input>
        ) : (
          <div>{value}</div>
        )}
      </div>
      {error && <p className="input-error">{errorMsg}</p>}
    </div>
  );
};
Input = forwardRef(Input);
Input.propTypes = {
  initVal: PropTypes.string,
  description: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  allowInput: PropTypes.bool,
  onChange: PropTypes.func,
  textReg: PropTypes.object,
  errorMsg: PropTypes.string,
  inputFormat: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
};
Input.defaultProps = {
  initVal: "",
  description: "",
  allowInput: true,
  width: null,
  height: null,
  textReg: null,
  onChange: null,
  errorMsg: "",
  inputFormat: "",
  placeholder: "",
  name: "",
};
export default Input;
