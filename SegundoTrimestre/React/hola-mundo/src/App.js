import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
import Renderizable from './components/pages/Renderizable';
import RenderizadorSinCambio from './components/pages/renderizableSinProps';
import noRenderizador from './components/pages/renderizableConProps';

function App() {
  return (
    //<Routes>
     // <Route path='/' element={<Home/>}/>
     // <Route path='/producto/:id' element={<Produto/>}/>
    //</Routes>
    <main>
      <h4>Re-renderizado sin cambiar las propiedades</h4>
      <Renderizable/>
      <h4>Re-renderizado cambiando las propiedades</h4>
      <noRenderizador/>
    </main>
  );
}

export default App;
