import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
import Renderizable from './components/pages/Renderizable';
import RenderizadorSinCambio from './components/pages/renderizableSinProps';
import noRenderizador from './components/pages/renderizableConProps';
import MiComponente from './components/micomponente';
import AlternaMensaje from './components/AlternaMensaje';
function App() {
  return (
    //<Routes>
     // <Route path='/' element={<Home/>}/>
     // <Route path='/producto/:id' element={<Produto/>}/>
    //</Routes>
    <>
    <MiComponente></MiComponente>
    <AlternaMensaje></AlternaMensaje>
    </>
  );
}

export default App;
