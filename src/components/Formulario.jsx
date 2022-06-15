import {useFormulario} from "../hooks/useFormulario"
import Swal from 'sweetalert2'

const Formulario = ({setNombrePersonaje}) => {

    const [inputs, handleChange, reset] = useFormulario({
        nombre: ""
    });

    const {nombre}  = inputs

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(nombre);

        if(!nombre.trim()){
            return Swal.fire({
                title: 'Error!',
                text: 'Escribe primero el nombre del personaje...',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        }

        setNombrePersonaje(nombre.trim().toLowerCase())
        
        reset();
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
                   placeholder="Busca un personaje..."
                   className="form-control mb-2"
                   value={nombre}
                   onChange={handleChange}
                   name="nombre"
            />
            <button className="btn btn-success mb-2 w-100">Buscar</button>
        </form>
    )
}

export default Formulario;