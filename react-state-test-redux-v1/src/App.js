import logo from './logo.svg';
import './App.css';
import store from './app/store';
import { Provider } from 'react-redux';
import InsideComponent from './InsideComponent';
import OutsideComponent from './OutsideComponent';

function App() {
  return (
    <div className="App App-header">
      <Provider store={store}>
       <InsideComponent /> 
      </Provider>
      {/* <OutsideComponent /> */}
    </div>
  );
}

export default App;
