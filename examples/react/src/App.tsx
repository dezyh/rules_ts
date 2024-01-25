import logo from './logo.svg?react';
import './App.css';

import count from '@/other';

import { LogMessage } from '~/examples/proto_grpc/logger_pb';

function App() {
  console.log('count', count());
  console.log('log', new LogMessage({}));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
