import { useContext } from 'react';
import { ContextBase } from './ContextBase';

function ComponentBase() {
  const { text, setText } = useContext(ContextBase);

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText('Iekšējā komponente sūta sveicienus!')}>
        Komponentes iekšpusē
      </button>
    </div>
  );
}

export default ComponentBase;