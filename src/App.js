import logo from './logo.svg';
import './App.css';
import { CountClick } from './CountClick';

console.log(<CountClick/>)

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CountClick startCounter={10} />
        <CountClick startCounter={15} />
   
      </header>
    </div>
  );
}

