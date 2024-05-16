//Veicam rīku importāciju no react bibliotēkas, kā arī izveidotā konteksta faila
import { useContext } from 'react';
import { ContextBase } from './ContextBase';

function ComponentBase() {
  //izsaucam useContext āķi, lai uzsāktu stāvokļa uzglabāšanu 'text' un iegūtu iestatīšanas funckiju 'setText'
  const { text, setText } = useContext(ContextBase);

  return (
    <div>
      {/* Ievietojam stāvokļa vērtību informācijas pārraidei*/}
      <h1>{text}</h1>
      {/* Izveidojam pogu, kuras piespiešana izsauks 'setText', lai iestatītu stāvokli*/}
      <button onClick={() => setText('Iekšējā komponente sūta sveicienus!')}>
        Komponentes iekšpusē
      </button>
    </div>
  );
}

export default ComponentBase;