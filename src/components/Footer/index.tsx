import LogoCompanyGray from  '../../assets/img/logo-origen-gray.png';
import Facebook from '../../assets/icons/facebook.svg';
import Instagram from '../../assets/icons/instagram.svg';
import { useLocation } from 'react-router-dom';
import Linkedin from '../../assets/icons/linkedin.svg';
import './footer.css'

export const Footer = () => {

    const { pathname } = useLocation();
    const location = pathname === '/login' ? "none" : undefined

    return(
        <footer className="footer-container" style={{ display: location }}>
            
            <div className="container-items" >
                
                <div className="footer-items" >
                    <div className="items">
                        <h3>Nosotros</h3>
                        <a href="">Personas</a>
                        <a href="">Empresas</a>
                    </div>

                    <div className="items">
                        <h3>Soluciones</h3>
                        <a href="">Personas</a>
                        <a href="">Empresas</a>
                    </div>

                    <div className="items">
                        <h3>Blog</h3>
                        <a href="">Personas</a>
                        <a href="">Empresas</a>
                    </div>

                    <div className="items">
                        <h3>Blog</h3>
                        <a href="">Personas</a>
                        <a href="">Empresas</a>
                    </div>
                </div>

                <div className="footer-social">
                    <div className="social-items" >
                        <a href="">
                            <img className="icon" src={ Facebook } alt="Facebook" />
                        </a>
                    </div>

                    <div className="social-items">
                        <a href="">
                            <img className="icon" src={ Instagram } alt="Instagram" />
                        </a>
                    </div>

                    <div className="social-items">
                        <a href="">
                            <img className="icon" src={ Linkedin } alt="Linkedin" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="copywriter">
                <h4>Hecho con amor 💚</h4>
                <h4>Todos los derechos reservados 2022</h4>
            </div>

        </footer>
    );
}