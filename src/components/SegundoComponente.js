import React from 'react'
import png from '../components/media/fenamac PNG.png'
export const SegundoComponente = () => {
  return (   
    <div>          
      <img src={png} alt='png' style={{
        position: 'absolute',
        right: '30%',
        width: '40%'
      }} />

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
    </div>
  )
}