import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import Cargando from "./Cargando"
import Personaje from "./Personaje"

const PintarDatos = ({ nombrePersonaje }) => {

  const [personajes, setPersonaje] = useState([])
  const [cargando, setCargando] = useState(false)


  useEffect(() => {
    consumirApi(nombrePersonaje)
  }, [nombrePersonaje])

  const consumirApi = async (nombre) => {
    setCargando(true)
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`)

      console.log(res)

      if(!res.ok){
        return Swal.fire({
          title: "Error!",
          text: "Personaje NO encontrado",
          icon: "error"
        });
      }

      const datos = await res.json()

      // console.log(datos.results)
      setPersonaje(datos.results)

    } catch (error) {
      console.log(error)
    } finally {
      setCargando(false)
    }

  }

  if(cargando){
    return <Cargando/>
  }

  return (
    <div className="row">
      {
        personajes.map(item => (
          <Personaje key={item.id} personaje={item}/>
        ))
      }
    </div>
  )
}

export default PintarDatos
