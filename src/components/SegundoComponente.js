import React from 'react'
import png from '../components/media/Logofenamac.png'

export const SegundoComponente = () => {
  return (   
    <div>          
      <img src={png} alt='png' style={{
        position: 'absolute',
        right: '45%',
        bottom: '60%',
        width: '10%'
      }} />
      <h1 style={{
        color: 'white',
        position: 'absolute',
        right: '37%',
        fontSize: '600%',
        fontFamily: 'Roboto,sans-serif',
        fontWeight: 'bold',
        bottom: '45%',        
      }}>FENAMAC</h1>
      <h2 style={{
        color: 'white',
        position: 'absolute',
        right: '32%',
        fontFamily: 'Roboto,sans-serif',
        bottom: '40%',  
      }}>
        Federación Nacional de Ajedrez de México A.C.
      </h2>
      {/* searchbar */}

          <div>
              <form action="/" method="get" style={{
                position: 'absolute',
                right: '33%',
                bottom: '20%'
          }}>
          <input
              type="text"
              id="header-search"
              placeholder="BUSCAR POR NOMBRE,APELLIDO,NO. DE RATING ETC."
              name="s"
              style={{

                width: '500px',
                borderright: 'none',
                padding: '5px',
                height: '40px',
                outline: 'none',
                margin: '0 50px 0 0'
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
          }}>BUSCAR
          </button>
          </form>
          </div>
          <div>
      </div>
    </div>

  )
}