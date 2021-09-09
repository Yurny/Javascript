import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Contenedor from './Contenedor';
import Contacto from './Contacto';
import Footer from './Footer';

function App() {
    return (
      <Router>
        <Route path="/" exact component={ Header } />
        <Route path="/estudiantes" exact component={ Contenedor } />
        <Route path="/contacto" exact component={ Contacto } />
        <Route path="/" exact component={ Footer } />
      </Router>
    )
}

export default App
