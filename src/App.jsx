import { useState } from "react";
import Formulario from "./components/Formulario";
import PintarDatos from "./components/PintarDatos";

const App = () => {

    const [nombrePersonaje, setNombrePersonaje] = useState("")

    return(
        <div className="container">
            <h1 className="text-center">Rick and Morty</h1>
            <h2 className="text-center lead">Guia de Personajes</h2>
            <Formulario setNombrePersonaje={setNombrePersonaje}/>
            <PintarDatos nombrePersonaje={nombrePersonaje}/>
        </div>
    )
}

export default App;