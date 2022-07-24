import './HomeSolutions.css';

export const HomeSteps = () => {
    return(
        <section className="solutions-container">

            <div className="title">
                <h4>CÓMO FUNCIONA</h4>
                {/* <h6>
                    Creamos consciencia en cada hogar, brindando 
                    las herramientas necesarias para dar un ciclo más de vida a la basura
                </h6> */}
            </div>

            <div className="solutions-wrapper">
                <div className=" card card1">
                    <h2>🛡️ Te damos un kit de recolección</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="card card2">
                    <h2>🚀 Recogemos en tu hogar</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>

                <div className="card card3">
                    <h2>💚 Te recompensamos por reciclar</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </section>
    );
}