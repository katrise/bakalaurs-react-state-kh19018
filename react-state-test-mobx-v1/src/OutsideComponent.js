//'observer' funkcija padara komponentes reaģējošas pret MobX novērotājiem,
//kuri nodrošina stāvokļa izmaiņas un komponenšu datu atjaunošanos
import { observer } from 'mobx-react';
//noliktavas importēšana
import textStore from './store';
//komponentes izveide ar observer funkciju
const OutsideComponent = observer(() => (
  <div>
    <h2>{textStore.text}</h2> {/* Stāvokļa vērtības attēlošana*/}
    {/* uz peles klikšķa tiek izsaukta stāvokļa izmaiņu funkcija, 
    kura šajā gadījumā parāda iestatīto tekstu */}
    <button onClick={() => textStore.showText()}>Komponentes ārpusē</button>
  </div>
));

export default OutsideComponent;

