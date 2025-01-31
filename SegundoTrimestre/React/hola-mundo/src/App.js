import logo from './logo.svg';
import './App.css';
import Acercade from './components/Acercade';
import Variables from './components/Variables';
import Variables2 from './components/Variables2';
import { AdiosMundo } from './components/Adiosmundo';
import Bucles from './components/Bucles.';
import Saludar from './components/Saludar';
import EjemploEstado from './components/EjemploEstado';
function App() {
    //? comentario JS
  const nombre= 'Dario'
  return (
    <div className="App"> 
                          {/* soy un comentario 
                            de varias lineas en JSX*/}
      <header className="App-header">
        <EjemploEstado/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Saludar nombre="Juan Alberto" edad="30"/>
        <h1> Hola {nombre}</h1>
      </header>
      <AdiosMundo style="Barroco" idioma="Español"/>
      <Acercade/>
    </div>
  );
}

export default App;
