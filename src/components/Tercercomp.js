import React from 'react'
import fondo from '../components/media/fondo.jpg'

export const Tercercomp = () => {
  return (
    <div>
                 {/* imanenfondo */}
      <img 
              src={fondo} 
              alt='fondo'
              style={{
                position: 'absolute',
                width: '100%',
                height: '100',
                opacity: '0.8',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}/>
    </div>
  )
}
