import React from 'react'
import fondo from '../components/media/fondo.jpg'

export const SegundoComponente = () => {
  return (
    <div style={{
      position: 'relative'
    }}>
      <img 
      src={fondo} 
      alt='fondo'
      style={{
        width: '100%',
        height: '0.1%',
        opacity: '0.7',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
   
      }}/>
    </div>

  )
}
