import { useState } from 'react';
import Component from 'module-template';
import CodeHighlighter from './components/CodeHighlighter';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Component />

      <CodeHighlighter>{`<Component />`}</CodeHighlighter>
    </div>
  );
}

export default App;
