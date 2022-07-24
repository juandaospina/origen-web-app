import LogoAlcaldia from '../../../assets/img/alcaldia.jpg';
import LogoJardin from '../../../assets/img/jardin-botanico.png';
import LogoSena from '../../../assets/img/sena.jpg';
import './HomeAllies.css';

export const HomeAllies = () => {
    return(
        <section className="allies-container">

            <div className="title">
                <h4>ALIADOS</h4>
            </div>

            <div className="allies-wrapper">
                <div className="allies">
                    <img src={ LogoAlcaldia } alt="Logo alcaldía medellín" />
                </div>

                <div className="allies">
                    <img src={ LogoJardin } alt="Logo alcaldía medellín" />
                </div>

                <div className="allies">
                    <img src={ LogoSena } alt="Logo alcaldía medellín" />
                </div>
            </div>
        </section>
    );
}