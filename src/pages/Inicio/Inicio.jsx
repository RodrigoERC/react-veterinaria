import React from 'react'

import './Inicio.css'

import RoyalBernethLogo from '../../assets/RoyalBerneth.png'

const Inicio = () => {
  return (
    <div id='main-div'>

      <img src={RoyalBernethLogo} alt="Royal Berneth Logo" />

      <div id='marca'>
        <h1 className='royal-berneth-title'>Royal Berneth</h1>
      </div>

      <div id='giro'>
        <h2 className='royal-berneth-giro'>renta de inmuebles</h2>
      </div>

      <div id='slogan'>
        <h3 className='royal-berneth-slogan'>Tu hogar, tu lugar</h3>
      </div>

      <div id='info'>
        <p className='royal-berneth-info'>¿Buscas un lugar para tus vacaciones? ¿Quieres poner un lugar en renta?
          <br />
          <br />
          Con nosotros, puedes hacer eso y más de forma fácil y segura.
        </p>
      </div>
      
    </div>
  )
}

export default Inicio