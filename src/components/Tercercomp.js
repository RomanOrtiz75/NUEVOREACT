import React from 'react'
import fondo from '../components/media/fondo.jpg'

export const Tercercomp = () => {
  return (
    <div>
      {/* imagenfondo */}
      <img 
        src={fondo} 
        alt='fondo'
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          filter: 'brightness(0.4)',
        }}
      />
      <style>
        {`
          @media only screen and (max-width: 768px) {
            img {
              height: 50%;
              filter: brightness(0.6);
            }
          }

          @media only screen and (max-width: 480px) {
            img {
              height: 30%;
              filter: brightness(0.8);
            }
          }
        `}
      </style>
    </div>
  )
}
