import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/icon-user.png';

import '../assets/styles/components/Header.scss';

const Header = () => (
  <header className='header'>
    <Link to='/'>
      <img className='header__img' src={logo} alt='Platzi Video' />
    </Link>

    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={userIcon} alt='Ícono de usuario' />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a href='/'>Cuenta</a>
        </li>
        <li>
          <Link to='/login'>Iniciar sesión</Link>
        </li>
        {/* <li>
          <a href='/'>Cerrar Sesión</a>
        </li> */}
      </ul>
    </div>
  </header>
);

export default Header;
