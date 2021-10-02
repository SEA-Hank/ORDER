import { useEffect, useState } from "react";
import "../scss/tipSelector.scss";
import { connect } from "react-redux";
import { setOrderTips } from "../redux/actions";
import { calculateSummaryInfo } from "../common/common";
const TipSelector = ({ totalWithoutTips, setOrderTips }) => {
  let tipsOption = {
    "0%": 0,
    "10%": 0.1,
    "15%": 0.15,
    "18%": 0.18,
    "20%": 0.2,
  };
  let tipReg = /^(\d+)(\.)?\d{0,2}?$/;

  const [value, setValue] = useState("0");
  const [activatedIndex, setActivatedIndex] = useState(null);

  const inputChange = (event) => {
    let val = event.target.value;
    if (val === "" || tipReg.test(val)) {
      setValue(val);
      let tips = val === "" ? 0 : parseFloat(val);
      setOrderTips(tips, "value");
      setActivatedIndex(null);
    }
  };

  const optionSelected = (value, index) => {
    let tips = parseFloat((totalWithoutTips * value).toFixed(2));
    setOrderTips(value, "percentage");
    setValue(tips);
    setActivatedIndex(index);
  };

  const generateLi = () => {
    let temp = 0;
    let options = [];
    console.log(11111);
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
      setOrderTips(0, "value", false);
    };
  }, []);

  return (
    <div className="payment-tips">
      <p className="payment-tips-p">
        Tip: <span>${value} </span>
      </p>
      <ul className="tipOptions">{generateLi()}</ul>
      <div className="tipsInput">
        <input type="text" value={value} onChange={inputChange}></input>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  let { totalWithoutTips } = calculateSummaryInfo(
    state.order.order,
    state.foodList.foodList,
    state.order.tips,
    state.order.taxRate
  );
  return { totalWithoutTips };
};

export default connect(mapStateToProps, { setOrderTips })(TipSelector);
