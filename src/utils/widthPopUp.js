import "../scss/popUp.scss";
import { forwardRef, useEffect, useState, useImperativeHandle } from "react";
import ReactDOM from "react-dom";

let withPopUp = (Component) => {
  let PopUp = (props, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const [popUpIn, setPopUpIn] = useState(false);

    const [rootEl, setRootEl] = useState(document.createElement("div"));

    useEffect(() => {
      document.body.appendChild(rootEl);
      return () => {
        document.body.removeChild(rootEl);
      };
    }, []);

    const hide = () => {
      setPopUpIn(false);
    };
    const show = () => {
      setIsVisible(true);
      setPopUpIn(true);
    };
    const onAnimationEnd = () => {
      if (!popUpIn) {
        setIsVisible(false);
      }
    };
    useImperativeHandle(ref, () => ({
      show,
      hide,
    }));

    return (
      isVisible &&
      ReactDOM.createPortal(
        <div
          onAnimationEnd={onAnimationEnd}
          className={`popup-wrapper ${popUpIn ? "popUpIn" : "popUpOut"}`}
        >
          <div className="popup-container">
            <Component {...props} popUp={ref.current} />
          </div>
        </div>,
        rootEl
      )
    );
  };
  return forwardRef(PopUp);
};
export default withPopUp;
//REF 转发必须 HTML 元素 挂载到 页面 除非REF不是页面元素
//REF 赋值顺序 useImperativeHandle -> html 元素
//react 只会渲染 返回值为 HTML,forwardRef,createPortal 的函数
//函数返回一个函数是不会渲染的
