import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import Contato from './components/pages/Contato';
import './App.css';
import Footer from './components/layout/Footer'
import NavBar from './components/layout/NavBar';

function App() {

  return (
    <Router>
     <NavBar/>
      <Routes>
      <Route 
      exact
      path="/" 
      element={<Home />} 
      ></Route>
      <Route 
      path="/empresa" 
      element={<Empresa />} 
      ></Route>
      <Route 
      path="/contato" 
      element={<Contato />} 
      ></Route>
      </Routes>
      <Footer/>
     </Router>
  );
}

export default App;
