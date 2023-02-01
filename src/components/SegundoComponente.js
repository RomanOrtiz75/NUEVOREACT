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
      <div style={{
              width: '100%',
              position: 'absolute',
              display: 'flex'
            }}>
                <form action="/" method="get" style={{
                  position: 'absolute'
                }
                }>
                    <label htmlFor="header-search">
                        <span className="visually-hidden">BUSCADOR DE RATING</span>
                    </label>
                <input
                    type="text"
                    id="header-search"
                    placeholder="BUSCAR POR NOMBRE,APELLIDO,NO. DE RATING ETC."
                    name="s" 
                    style={{
                      width: '100%',
                      border: '3px solid #00B4CC',
                      borderright: 'none',
                      padding: '5px',
                      height: '20px',
                      outline: 'none',
                      color: '#9DBFAF',
                    }}
                />
                <button type="submit" style={{
                  width: '40px',
                  height: '36px',
                  border: '1px solid #00B4CC',
                  background: '#00B4CC',
                  textalign: 'center',
                  color: '#fff',
                  borderradius: '0 5px 5px 0',
                  cursor: 'pointer',
                  fontsize: '20px',
                }}>BUSCAR
                </button>
                </form>
            </div>
      </div>

  )
}
