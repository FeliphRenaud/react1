import './App.css';
import Condicional from './components/Condicional';

function App() {
const nome = 'Maria';
  
  return (
    <div className="App">
      <header className="App-header">
      <h1> Renderização Condicional </h1>
      <Condicional/>
      </header>
    </div>
  );
}

export default App;
