import Formulario from "../components/Formularios";
export default {
    title: "Components/Formulario",
    component:Formulario
};
export const Basico = () => <Formulario></Formulario>;
export const ConValorInicial = () => <Formulario initialState='Dario'></Formulario>;