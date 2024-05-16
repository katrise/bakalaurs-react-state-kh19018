//Tiek veikta nepiecciešamo failu importācija (iepriekš izveidotie faili) kā arī
//nepieciešamie rīki kā useState,
import './App.css';
import { useState } from "react";
import { ContextBase } from "./ContextBase";
import ComponentBase from "./ComponentBase";
import RogueComponent from './RogueComponent';

function App() {
  //Tiek izveidots stāvoklis, kurš veiks stāvokļa informācijas uzglabāšanu
  const [text, setText] = useState("");

  return (
    <div className="App App-header">
      {/* Tiek ievietots konteksta sniedzējs un tā vērtības, kurām iespējams piekļūt iekšējām komponentēm*/}
      <ContextBase.Provider value={{ text, setText}}>
        {/* Šeit atrodas bāes komponente - iekšā konteksta sniedzēja birkā */}
        <ComponentBase />
      </ContextBase.Provider>
      {/* Šeit atrodas ārējā komponente */}
      <RogueComponent />
    </div>
  );
}

export default App;
