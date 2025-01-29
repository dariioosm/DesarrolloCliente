import logo from './logo.svg';
import './App.css';
import Acercade from './components/Acercade';
import Variables from './components/Variables';
import Variables2 from './components/Variables2';
import { AdiosMundo } from './components/Adiosmundo';
function App() {
    //? comentario JS
  const nombre= 'Dario'
  return (
    <div className="App"> 
                          {/* soy un comentario 
                            de varias lineas en JSX*/}
      <header className="App-header">
        <Variables/>
        <Variables2/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1> Hola {nombre}</h1>
      </header>
      <AdiosMundo/>
      <Acercade/>
    </div>
  );
}

export default App;
