//Komponentes 'ComponentBase' kopija, kuras funkcionalitāte ir tāda pati, taču atšķiras tās izvietojums failā 'App.js'
import { useContext } from 'react';
import { ContextBase } from './ContextBase';

function RogueComponent() {
  const { text, setText } = useContext(ContextBase);

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText('Ārējā komponente sūta sveicienus!')}>
        Komponentes ārpusē
      </button>
    </div>
  );
}

export default RogueComponent;