//Nepieciešamo bilbiotēkas rīku imports
import { createContext, useReducer, useContext } from 'react';
//Tiek izveidots konteksta objekts, kurš pārvietos un uzturēs stāvokli
const StateContext = createContext();
//Iestata noklusējuma stāvokļa vērtības
const initialState = {
  //Masīva veida objekts garumā 2500, kur katrai vērtībai tiek piešķirts
  //ieraksts "Item (index)"
  items: Array.from({ length: 2500 }, (_, index) => `Item ${index + 1}`),
};
//Reducenta funkciju loģikas izveide
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': //viena ieraksta pievienošana
    //izmantojam "...", lai nepārrakstītu stāvoklī esosās vertības
    //iekš items izveidojam jau esošo stāvokļa vērtību sarakstu, papildinam to
    //ar action.payload, kas satur jaunās vērtības, kas iegūtas no darbības izpildes
      return { ...state, items: [...state.items, action.payload] };
    case 'ADD_ITEMS': //2500 ierakstu pievienošana
      return { ...state, items: [...state.items, ...action.payload] };
    default:
      return state;
  }
}
//StateProvider funkcija pārvaldīs stāvokli komponentēm, kuras tiks pievienotas
//kā bērna komponentes <StateProvider /> (iekš App.js)
export const StateProvider = ({ children }) => {
  //izveidojam reducētāju, kurš apstrādās stāvokļa loģiku
  const [state, dispatch] = useReducer(reducer, initialState);
  //funkcionalitāte augstāk minētajam <StateProvider />, kurā nodrošina piekļuvi
  //stāvoklim un tā apstrādes funkcijām
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};
//izveidoto kontekstu eksportē, lai to varētu izmantot ārpus šī faila
export const useStateContext = () => useContext(StateContext);
