import "../scss/spcEditor.scss";
import { connect } from "react-redux";
import withPopUp from "../common/widthPopUp";
import Counter from "../common/counter";
import { useState } from "react";
import { setOrder } from "../redux/actions";
let SpcEditor = ({ popUp, foodInfo, quantity, category, setOrder }) => {
  const [qty, setQty] = useState(quantity);

  const counterOnChange = (val) => {
    setQty(parseInt(val));
  };

  const save = () => {
    setOrder(category, foodInfo.id, qty);
    cancel();
  };

  const remove = () => {
    setOrder(category, foodInfo.id, 0);
    cancel();
  };

  const cancel = () => {
    popUp.hide();
  };

  return (
    <div className="spcEditor-wrapper">
      <div className="spcEditor-name">{foodInfo.name}</div>
      <div className="spcEditor-img">
        <img src={foodInfo.img}></img>
      </div>

      <div className="spcEditor-description">{foodInfo.description}</div>
      <div className="spcEditor-operation">
        <label>Quantity</label>
        <Counter
          min={1}
          max={99}
          value={qty}
          height={35}
          width={125}
          onChange={counterOnChange}
        />
      </div>
      <div className="spcEditor-amount">
        <label>${foodInfo.price.toFixed(2)}</label>
        <label>x</label>
        <label>{qty}</label>
        <label>=</label>
        <label className="strong">${(foodInfo.price * qty).toFixed(2)}</label>
      </div>
      <div className="spcEditor-buttons">
        <button className="save" onClick={save}>
          SAVE CHANGES
        </button>
        <button className="remove" onClick={remove}>
          REMOVE
        </button>
        <button className="cancel" onClick={cancel}>
          CANCEL
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProp) => {
  return { ...state.order.editor };
};

SpcEditor = connect(mapStateToProps, { setOrder })(SpcEditor);

export default withPopUp(SpcEditor);
