import { useEffect, useState } from "react";
import "../scss/tipSelector.scss";
import { connect } from "react-redux";
import { setOrderTips } from "../redux/actions";
import { calculateSummaryInfo } from "../common/common";
import { TipCaculateType } from "../redux/actionTypes";
const TipSelector = ({ totalWithoutTips, setOrderTips, onchange }) => {
  let tipsOption = {
    "0%": 0,
    "10%": 0.1,
    "15%": 0.15,
    "18%": 0.18,
    "20%": 0.2,
  };
  let tipReg = /^(\d+)(\.)?\d{0,2}?$/;

  const [value, setValue] = useState();
  const [activatedIndex, setActivatedIndex] = useState(null);
  const [caculateType, setCaculateType] = useState(TipCaculateType.EXACT);
  const [caculateTypeValue, setCaculateTypeValue] = useState(0);

  const inputChange = (event) => {
    let val = event.target.value;
    if (val === "" || tipReg.test(val)) {
      let tips = parseFloat(val) || 0;
      updateState(tips, val, null, TipCaculateType.EXACT, tips);
      onchange(true);
    }
  };

  const optionSelected = (value, index) => {
    let tips = parseFloat((totalWithoutTips * value).toFixed(2));
    updateState(value, tips, index, TipCaculateType.PERCENTAGE, value);
    onchange(true);
  };

  const updateState = (
    tips,
    val,
    activatedIndex,
    caculateType,
    caculateTypeValue
  ) => {
    setOrderTips(tips, caculateType);
    setValue(val);
    setActivatedIndex(activatedIndex);
    setCaculateType(caculateType);
    setCaculateTypeValue(caculateTypeValue);
  };

  const generateLi = () => {
    let temp = 0;
    let options = [];
    for (let key in tipsOption) {
      let index = temp;
      let isActivated =
        activatedIndex === temp ||
        value == parseFloat((totalWithoutTips * tipsOption[key]).toFixed(2));
      options.push(
        <li
          key={index}
          onClick={() => {
            optionSelected(tipsOption[key], index);
          }}
          className={isActivated ? "activated" : ""}
        >
          {key}
        </li>
      );
      temp++;
    }
    return options;
  };

  useEffect(() => {
    return () => {
      setOrderTips(0, TipCaculateType.EXACT, false);
    };
  }, []);

  useEffect(() => {
    if (caculateType === TipCaculateType.PERCENTAGE) {
      let tips = parseFloat((totalWithoutTips * caculateTypeValue).toFixed(2));
      setValue(tips);
    }
  }, [totalWithoutTips]);

  return (
    <div className="payment-tips">
      <p className="payment-tips-p">
        Tip: <span>${value} </span>
      </p>
      <ul className="tipOptions">{generateLi()}</ul>
      <div className="tipsInput">
        <input
          type="text"
          value={value}
          placeholder="tips"
          onChange={inputChange}
        ></input>
      </div>
    </div>
  );
};

export default connect(null, { setOrderTips })(TipSelector);
