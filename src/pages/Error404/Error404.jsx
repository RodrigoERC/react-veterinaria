import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import './Error404.css'

import RoyalBernethLogo from '../../assets/RoyalBerneth.png'

const Error404 = () => {
  return (
    <div id='main-div'>
        <section className='logo-section'>
            <NavLink className='nav-link' to="/">
                <img src={RoyalBernethLogo} alt="Logo de Royal Berneth" />
            </NavLink>
        </section>

        <section className='content-section'>
            <h1>ERROR 404</h1>
            
            <h2>Esta página no existe, da click en el logo para volver al inico o usa el menú</h2>
        </section>
    </div>
  )
}

export default Error404