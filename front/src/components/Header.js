import React from 'react'
import logo from '../assets/logo.webp';
import '../sass/layout/_header.scss';

const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt='website logo' />
        </header>
    )
}

export default Header