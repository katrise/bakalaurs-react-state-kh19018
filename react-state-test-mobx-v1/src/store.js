//importējam 'makeAutoObservable', kura padara stāvokļu izmaiņu novērošanu
//automātisku, padarot klašu īpašības novērojamas ar novērotāju
import { makeAutoObservable } from 'mobx';

class TextStore {
  //sākuma vērtības iestatīšana
  text = '';

  //funkcijas izsaukšana konstruktorā aktivizē automātisko reaģēšanu
  //uz stāvokļa izmaiņām
  constructor() {
    makeAutoObservable(this);
  }

  //darbība, kura atjaunina novērojamā stāvokļa vērtību
  showText() {
    this.text = 'Iekšējā komponente sūta sveicienus!';
  }
}
//tiek veikta klases instances izveide, lai to varētu izmantot komponentēs
const textStore = new TextStore();
export default textStore;
