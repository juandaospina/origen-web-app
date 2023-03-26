import ImgBanner from '../../../assets/img/banner.png';
import { ButtonGeneral } from '../../ButtonGeneral';
import './HomeHero.css'

export const HomeHero = () => {
    return(
        <section className="hero-container">
            <div className="informative-title">

                <div className="container-text">
                    <h1>Devolvemos vida a la tierra</h1>

                    <p>
                        Stop wrestling with UI libraries, hacking together data sources, 
                        and figuring out access controls. Start shipping apps that move your business forward
                    </p>
                </div>

                <div>
                    <ButtonGeneral
                        text="Solicitar recogida →"
                        route="/recoleccion"
                        background="#76D7C4"
                        border="#76D7C4"
                        textColor="#FFFFFF"
                    />
                </div>
            </div>

            <div className="img-section"> 
                <img src={ ImgBanner } alt="banner" />
            </div>
        </section>
    );
}