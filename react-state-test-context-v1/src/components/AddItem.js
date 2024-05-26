//stāvokļa metodes imports no bilbiotēkas
import { useState } from 'react';
//izveidotā konteksta imports
import { useStateContext } from '../ContextBase';
//komponentes, kura pievienos ierakstus sarakstam, izveide
function AddItem () {
  //izveidots stāvoklis, kurš komponentē saņems ierakstīto vērtību un pados
  //to metodei "addItem", kas atbildīga par ieraksta pievienošanu sarakstam
  const [inputValue, setInputValue] = useState('');
  //iegūstam 'dispatch' no konteksta, kas sniedz piekļuvi reducenta funkcijām
  const { dispatch } = useStateContext();
  //funkcija addItem pievieno vienu saraksta ierakstu sarakstam
  const addItem = () => {
    //padodam konteksta reducentam slēdža atslēgaas tipu, pievienojamo vērtību
    //kura tiek pievienota attiecīgi kontekstā izveidotajai loģikai
    dispatch({ type: 'ADD_ITEM', payload: inputValue });
    //pēc pievienošanas notīram peivienošanas lauku
    setInputValue('');
  };
  //funkcija addRandomItems pievieno 2500 jaunus ierakstus ar gadījuma saturu
  const addRandomItems = () => {
    //gadījuma saraksta izveide ar garumu 2500
    const items = Array.from({ length: 2500 }, () => Math.random().toString(36).substring(2, 15));
    //padodam konteksta reducentam slēdža atslēgaas tipu, pievienojamo sarakstu
    //kurš tiek pievienota attiecīgi kontekstā izveidotajai loģikai
    dispatch({ type: 'ADD_ITEMS', payload: items });
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue} //ievades lauka stāvokļa vērtība
        onChange={(e) => setInputValue(e.target.value)} //ievades lauka vērtības ielasīšana stāvoklī
      />
      <button onClick={addItem}>Add Item</button> {/*  viena ieraksta pievienošanas poga */}
      {/*  2500 ierakstu pievienošanas poga */}
      <button onClick={addRandomItems}>Add 2500 Random Items</button>
    </div>
  );
};

export default AddItem;
