//konteksta metodes imports
import { useStateContext } from '../ContextBase';
//komponente ItemList pārraida vizuālu sarakstu ar tā vērtībām
function ItemList () {
  //izveidojam stāvokļa mainīgā vērtību, kurš pārraidīs stāvokļa vērtības
  const { state } = useStateContext();

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {/* Iterē cauri stāvokļa satura sarakstam ar funkciju map katram ierakstam
        pievienojo identificējošu atslēgu un izveidojot tā saraksta vienību*/}
        {state.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
