//tiek importētas metodes darbībām ar stāvokļiem
import { useSelector, useDispatch } from 'react-redux';
//importētas reducenta funkcijas kā darbības, lai tās var izmantot komponentes loģikā
import { addItem, addMultipleItems} from './slice';

function ItemList() {
  const dispatch = useDispatch(); //'dispatch' tiek izmantots, lai 'aktivizēt' reducenta funkcijas
  //izmanto 'useSelector', lai atlasītu stāvokļa vērtības
  const list = useSelector((state) => state.list.items);
  //funkcija vienas vienības pievienošanai
  const addOne = () => {
    //ar dispatch izsaucam segmenta funkciju, kurai padod vērtību, kuru pievienot sarakstam
    dispatch(addItem(`New Item ${list.length + 1}`));
  };
  //ar dispatch izsaucam 'addMultipleItems', kurai padodam masīvu, kuru pievienot jau esošam sarakstam
  const addMultiple = () => {
    const newItems = Array.from({ length: 2500 }, (_, index) => `New Item ${list.length + index + 1}`);
    dispatch(addMultipleItems(newItems));
  };

  return (
    <div>
      <button onClick={addOne}>Add 1 Item</button>
      <button onClick={addMultiple}>Add 2500 Items</button>
      <h2>Items</h2>
      <ul>
        {/* map funkcija iet cauri saraksta list katrai vērtībai un izveido tai attiecīgi saraksta vienību */}
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
