import './App.css'
//Stāvokļa piegādes komponentes imports
import { StateProvider } from "./ContextBase"
//satura komponenšu imports
import  AddItem   from './components/AddItem'
import ItemList from "./components/ItemList"

function App() {

  return (
    <div className="App App-header">
      {/* piegaādes komponente */}
      <StateProvider>
        <h1>Heavy state app</h1>
        {/* satura komponentes */}
        <AddItem />
        <ItemList />
      </StateProvider>

    </div>
  );
}

export default App;
