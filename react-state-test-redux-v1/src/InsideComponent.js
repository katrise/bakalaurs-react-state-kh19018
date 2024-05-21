//Nepieciešamo rīku importācija no redux bibliotēkas
import { useSelector, useDispatch } from "react-redux"
//Reducenta funkcijas importācija
import { showText } from "./slice"
//Bāzes komponentes izveide
function InsideComponent() {
  //"useSelector" rīks palīdz komponentēm dabūt informāciju no noliktavas
    const text = useSelector((state) => state.texts.value)
    //"useDispatch" ļauj reducentam veikt darbību, kas izmaina noliktavā
    //glabāto stāvokli
    const dispatch = useDispatch()
  
    return (
      <div>
        <h1>{text}</h1> {/* Stāvokļa informācijas vizuālais attēlojums */}
        {/* uz peles pogas veicam reducenta funkcionalitātes izpildi */}
        <button onClick={() => dispatch(showText())}>
          Komponentes iekšpusē
        </button>
      </div>
    );
  }
  
  export default InsideComponent
