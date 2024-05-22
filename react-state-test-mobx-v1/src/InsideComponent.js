//'observer' funkcija padara komponentes reaģējošas pret MobX novērotājiem,
//kuri nodrošina stāvokļa izmaiņas un komponenšu datu atjaunošanos
import { observer } from 'mobx-react';
//noliktavas importēšana
import textStore from './store';
//komponentes izveide ar observer funkciju
const InsideComponent = observer(() => (
  <div>
    <h2>{textStore.text}</h2> {/* Stāvokļa vērtības nolasīšana */}
    {/* uz peles klikšķa tiek izsaukta stāvokļa izmaiņu funkcija, 
    kura šajā gadījumā parāda iestatīto tekstu */}
    <button onClick={() => textStore.showText()}>Komponentes iekšpusē</button>
  </div>
));

export default InsideComponent;

