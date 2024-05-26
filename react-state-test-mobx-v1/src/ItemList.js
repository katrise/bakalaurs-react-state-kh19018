//importējam novērotāju, lai izmantotu komponenšu stāvokļu vērošanai
import { observer } from 'mobx-react';
//importē noliktavas saturu
import listStore from './store';
//inicializē komponenti ar novērotāju, lai padarītu komponenti reaģējošu
const ItemList = observer(() => {
    //izveidojam mainīgo, kas norādīs uz noliktavā glabāto funkciju viena
    //ieraksta pievienošanai
  const handleAddOneItem = () => {
    listStore.addOneItem();
  };
    //izveidojam mainīgo, kas norādīs uz noliktavā glabāto funkciju 2500
    //ierakstu pievienošanai
  const handleAddMultipleItems = () => {
    listStore.addMultipleItems();
  };

  //atgriežam lietotāju saskarnes saturu, kurā tiek iterēts stāvokļa saraksts
  //ar map funkciju un katram tiek izveidots saraksta ieraksts
  return (
    <div className='App App-header'>
      <button onClick={handleAddOneItem}>Add One Item</button>
      <button onClick={handleAddMultipleItems}>Add 2500 Items</button>
      <ul>
        {listStore.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
});

export default ItemList;
