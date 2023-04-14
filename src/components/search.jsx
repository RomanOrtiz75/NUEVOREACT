import React, { useState, useEffect } from "react";

function Buscador() {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);
  const [filtro, setFiltro] = useState ([]);

  useEffect(() => {
    async function buscar() {
      const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/`);
      const datos = await respuesta.json();
      setResultados(datos);
      console.log(datos);
    }

    buscar();
  }, [busqueda]);

  function handleChange(evento) {
    let datos = resultados.filter((usuario) => {
      return usuario.name.toLowerCase().includes(evento.target.value.toLowerCase());  
    })
    setFiltro(datos);
    setBusqueda(evento.target.value);
  }

  function handleSubmit(evento) {
    evento.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={busqueda} onChange={handleChange} />
      <button type="submit">Buscar</button>
      <ul>
        <>
        { (filtro.length > 0)&&
            <>
            {filtro.map((resultado) => (
                <li key={resultado.id}>{resultado.name}</li>
              ))}
            </>
        }
        </>
      </ul>
    </form>
    );
}

export default Buscador;
