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

      </div>

  )
}