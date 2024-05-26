import './App.css';
//komponentes importēšana
import ItemList from './ItemList';

function App() {

  return (
    <div className='App App-header'>
      <h1>List of Items</h1>
      <ItemList /> {/* komponentes atrašānās vieta */}
    </div>
  )
}

export default App;
