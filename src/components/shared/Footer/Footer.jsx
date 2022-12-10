import React from 'react'

import { NavLink } from 'react-router-dom'

import RoyalBernethLogo from '../../../assets/RoyalBerneth.png'

import Facebook from '../../../assets/facebook.png'
import Instagram from '../../../assets/instagram.png'
import Twitter from '../../../assets/twitter.png'

import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-div'>

      <footer className='footer-content '>

        <section className='content-section'>

          <NavLink to='/conocenos'>
            <p>Conocenos</p>
          </NavLink>

          <NavLink to='/reservar'>
            <p>Reservar</p>
          </NavLink>

          <NavLink to='/'>
            <img src={RoyalBernethLogo} alt="Logo de Royal Berneth" />
          </NavLink>

          <NavLink to='/arrienda'>
            <p>Arrienda</p>
          </NavLink>

          <NavLink to='/contacto'>
            <p>Contacto</p>
          </NavLink>

        </section>

        <section className='social-media-section'>

          <a href='#' target='_blank' rel=''>
            <img src={Facebook} alt="Facebook Logo" />
            <i className="">Facebook</i>
          </a>

          <a href='#' target='_blank' rel=''>
            <img src={Instagram} alt="Instagram Logo" />
            <i className="">Instagram</i>
          </a>

          <a href='#' target='_blank' rel=''>
            <img src={Twitter} alt="Twitter Logo" />
            <i className="">Twitter</i>
          </a>

        </section>

        <section className='FAQ-section'>
          <NavLink to='/faq'>
            <p>FAQ</p>
          </NavLink>
        </section>

        <section className='copyright-section'>          
          <p>
            &copy; 2022 Royal Berneth
          </p>
        </section>

      </footer>
      
    </div>
  )
}

export default Footer