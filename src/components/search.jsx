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
    <form style={{
      position: 'absolute',
      right: '27%',
      top: '70%'}} onSubmit={handleSubmit}>
      <input type="text" value={busqueda} onChange={handleChange} id="header-search"
                    placeholder="BUSCAR POR NOMBRE,APELLIDO,NO. DE RATING ETC."
                    name="s"
                    style={{
                      width: '500px',
                      borderright: 'none',
                      padding: '5px',
                      height: '40px',
                      outline: 'none',
                      margin: '0 50px 0 0',
                    }}/>
      <button type="submit" style={{
  width: '100px',
  height: '40px',
  background: 'rgba(172, 54, 61,1)',
  textalign: 'center',
  color: '#fff',
  border: 'solid 1px rgba(172, 54, 61,1)',
  cursor: 'pointer',
  fontsize: '20px',

      }}>Buscar</button>
      <ul>
        <>
        { (filtro.length > 0)&&
            <>
            {filtro.map((resultado) => (
                <li key={resultado.id}  style={{ color: 'white' }}>{resultado.name}</li>
              ))}
            </>
        }
        </>
      </ul>
    </form>
    );
}

export default Buscador;
