import './App.css';
import Encabezado from './components/Encabezado';
import Pie from './components/Pie';
import { AppContext, valoresDefecto } from './AppContext';
import Saludo from './components/Saludo';
import Formulario from './components/Formularios';
function App() {
  return (
    <div className="App">
      <AppContext.Provider value={valoresDefecto}>
        <Encabezado />
        <div>Esto simplemente es contenido.</div>
        <Pie />
      </AppContext.Provider>
      <Saludo nombre='Dario'></Saludo>
    </div>
  );
}
export default App;