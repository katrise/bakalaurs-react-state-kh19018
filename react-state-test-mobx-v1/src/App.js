import './App.css'
//Izveidoto komponenšu importēšana
import InsideComponent from './InsideComponent'
import OutsideComponent from './OutsideComponent'
//Pamata komponentes 'App' izveide
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Iekšējās un ārējās komponentes izsaukšana */}
        <InsideComponent />
        <OutsideComponent />
      </header>
    </div>
  );
}

export default App;
