import "../scss/spcEditor.scss";
import withPopUp from "../common/widthPopUp";
import Counter from "../common/counter";
const SpcEditor = ({ popUp }) => {
  const cancel = () => {
    popUp.hide();
  };

  return (
    <div className="spcEditor-wrapper">
      <div className="spcEditor-name">Cozze E Vongole</div>
      <div className="spcEditor-img">
        <img src="http://192.168.0.5:5000/images/appetizers/1.jpeg"></img>
      </div>

      <div className="spcEditor-description">
        Mussels and Manila Clams, White Wine Garlic
      </div>
      <div className="spcEditor-operation">
        <label>Quantity</label>
        <Counter min={1} max={99} value={3} height={35} width={125} />
      </div>
      <div className="spcEditor-amount">
        <label>$8.95</label>
        <label>x</label>
        <label>6</label>
        <label>=</label>
        <label className="strong">$53.70</label>
      </div>
      <div className="spcEditor-buttons">
        <button className="save">SAVE CHANGES</button>
        <button className="remove">REMOVE</button>
        <button className="cancel" onClick={cancel}>
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default withPopUp(SpcEditor);
