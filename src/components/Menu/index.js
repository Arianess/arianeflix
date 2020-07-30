import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import { LogoImage, MenuWrapper } from './style.js';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <MenuWrapper className="Menu">
            <Link to="/">
                <LogoImage src={Logo} alt="ArianeFlix logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </MenuWrapper>
    );
}

export default Menu;