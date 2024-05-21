import { useSelector, useDispatch } from "react-redux";
import { showText } from "./slice";

function OutsideComponent() {

    const text = useSelector((state) => state.texts.value)
    const dispatch = useDispatch()
  
    return (
      <div>
        <h1>{text}</h1>
        <button onClick={() => dispatch(showText())}>
          Komponentes Ārpusē
        </button>
      </div>
    );
  }
  
  export default OutsideComponent;