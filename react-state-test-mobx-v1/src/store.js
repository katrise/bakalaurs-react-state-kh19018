//importējam novērotāju un darbību metodes no mobx, lai varētu izveidot stāvokļa pārvaldību
import { observable, action } from 'mobx';

class ListStore { //tiek izveidots objekts - noliktava, kurš saturēs stāvokļu informmāciju un metodes
  constructor() {
    //konstruktors, kurš izveido noklusējuma vērtību - sarakstu ar 2500 ierakstiem
    this.items = observable(Array.from({ length: 2500 }, (_, index) => `Item ${index + 1}`));
  }
  //addOneItem metode tiek izveidota par noliktavas darbību, kas glabā loģiku viena ieraksta pievienošanai
  //sarakstā - tiek izmantota push funkcija priekš masīva
  addOneItem = action(() => {
    this.items.push(`Item ${this.items.length + 1}`);
  });
  //addOneItem metode tiek izveidota par noliktavas darbību, kas glabā loģiku 2500 ierakstu pievienošanai
  //sarakstā - tiek izmantota push funkcija priekš masīva
  addMultipleItems = action(() => {
    //tiek izveidots jauno vērtību masīvs
    const newItems = Array.from({ length: 2500 }, (_, index) => `Item ${this.items.length + index + 1}`)
    //jaunais masīvs tiek pievienots vecā saraksta galā
    this.items.push(...newItems)
  });
}
//tiek izveidota klases instance un eksportēta, lai to varētu izmantot ārpus šīs klases
const listStore = new ListStore()
export default listStore;
