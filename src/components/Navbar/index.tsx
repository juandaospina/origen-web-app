import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ButtonGeneral } from '../ButtonGeneral';
import IconMenu from '../../assets/icons/menu-hamburguesa.svg'
import logo from '../../assets/img/origen-logotipe.png'
import './navbar.css'
import { NavbarMobile } from '../NavbarMobile';

export const Navbar = () => {

    const [ toggleMobile, setToggleMobile ] = useState(false);
    const { pathname } = useLocation();
    const location = pathname === '/account' ? "none" : undefined

    const handleMenuMobile = () => {
        setToggleMobile(!toggleMobile);
    }

    return(
        <>
            <header className="navbar">
                <div className="navigation-container">
                    <div className="logotipe-container">
                        <a href="/">
                            <img src={ logo } alt="origen logotipe" />
                        </a>
                        <span> | Economía circular </span>
                    </div>

                    <nav className="nav-left">
                    </nav>

                    <nav className="nav-right">
                        <ul>
                            <li>
                                <a href="">Nosotros</a>
                            </li>

                            <li>
                                <a href="">Soluciones</a>
                            </li>

                            <li>
                                <a href="">Circular</a>
                            </li>
                        </ul>

                        <div>                        
                            <ButtonGeneral 
                                text="Ingresar"
                                route="/login"
                                background="#FFFFFF"
                                border="#000000"
                                textColor="#000000"
                            />

                            <ButtonGeneral 
                                text="Registrarme"
                                route="/create-account"
                                background="#00ffcb"
                                border="#00ffcb"
                                textColor="#FFFFFF"
                            />
                        </div>
                    </nav>

                    <div className="menu__mobile">
                        <img 
                            src={ IconMenu } 
                            alt="menu-hamburguesa" 
                            onClick={ handleMenuMobile }
                        />
                        <span>| Somos vida, </span>
                        <span>somos origen</span>
                    </div>
                </div>

                { toggleMobile && <NavbarMobile /> }
            </header>
        </>
    );
}