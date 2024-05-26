import { Provider } from 'react-redux';
//importējam noliktavu, lai tai var nodrošināt piekļuvi
import store from './app/store';
//importējam attēlojamo komponenti
import ItemList from './TheList';
import './App.css';

function App() {
  return (
      <div className="App App-header">
          <Provider store={store}>  {/* piegādātājs nodrošina piekļuvi 'store' saturam */}
          <h1>The list:</h1>
          <ItemList />  {/*  attēlotā komponente */}
        </Provider>
      </div>
  );
}

export default App;
