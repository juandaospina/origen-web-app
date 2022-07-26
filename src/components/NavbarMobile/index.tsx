import IconMenu from '../../assets/icons/menu-hamburguesa.svg';
import { ButtonGeneral } from '../ButtonGeneral';
import IconHome from '../../assets/icons/home.svg'
import IconWhy from '../../assets/icons/apps.svg';
import IconSolutions from '../../assets/icons/solutions.svg';
import IconGifts from '../../assets/icons/gift.svg';
import IconUser from '../../assets/icons/user.svg';
import IconSignUp from '../../assets/icons/signup.svg';
import IconRocket from '../../assets/icons/rocket.svg';
import './NavbarMobile.css';

export const NavbarMobile = () => {
    return(
        <>
            <div className="menu-mobile__container">
                <div className="navigation-mobile">
                    <nav>
                        <ul>
                            <li>
                                <img src={ IconHome } alt="Home" />
                                <a href="/">Home</a>
                            </li>

                            <li>
                                <img src={ IconWhy } alt="Nosotros" />
                                <a href="">Nosotros</a>
                            </li>

                            <li>
                                <img src={ IconSolutions } alt="Soluciones" />
                                <a href="">Soluciones</a>
                            </li>

                            <li>
                                <img src={ IconGifts } alt="Novedades" />
                                <a href="">Novedades</a>
                            </li>
                            
                            <li>
                                <img src={ IconUser } alt="User" />
                                <a href="/login">Ingresar</a>
                            </li>

                            <li>
                                <img src={ IconSignUp } alt="Sign Up" />
                                <a href="/create-account">Registrarme</a>
                            </li>

                            <li>
                                <img src={ IconRocket } alt="Rpcket" />
                                <a href="">¡Gana refiriendo!</a>
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}