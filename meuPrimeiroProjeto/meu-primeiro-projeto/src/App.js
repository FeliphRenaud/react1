import { useState } from 'react';
import './App.css';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';

function App() {
const [nome, setnome] = useState()

  return (
    <div className="App">
      <header className="App-header">
      <h1>State Lift</h1>
      <SeuNome setnome={setnome}/>
      <Saudacao nome={nome}/>
      </header>
    </div>
  );
}

export default App;
