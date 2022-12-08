import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import ImgSecurity from '../../assets/img/security.png';
import { useAuth } from '../../context/authContext';
import './Login.css';

export const Login = () => {

    const { login } = useAuth();
    const navigate = useNavigate();

    const { 
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    
    const handleLogin = async (data: any) => {
        // console.log(data);
        try {
            // función debe ser asíncrona
            // manejar los estados de error con (error.code)
            await login( data.email, data.password );
            navigate('/account')
        } catch (error) {
            console.log(error)
            // setErrorAuth("Error de autenticación")
        }
    }

    return(
        <section className="login-container">

            <div className="security-img">
                <img src={ ImgSecurity } alt="" />
            </div>

            <div className="form-container">
                <div className="login-title">
                    <h3>¡Hola, Bienvenido de nuevo!👋</h3>
                    <p>
                        Nos alegra tenerte de nuevo por aquí,
                        y juntos ayudar a cambiar el mundo.
                    </p>
                </div>

                <form onSubmit={ handleSubmit( handleLogin ) }>

                    <div className="form-inputs">
                        <label htmlFor="">Correo Electrónico</label>

                        <input 
                            {...register("email", { required: true })}
                            type="text" 
                        />
                    </div>

                    <div className="form-inputs">
                        <label htmlFor="">Contraseña</label>

                        <input 
                            {...register("password", { required: true })}
                            type="password" 
                        />
                    </div>

                    <div className="forward-password">
                        <a href="/recovery-passsword">
                            Olvide mi contraseña
                        </a>
                    </div>


                    <div className='button-container'>
                        <button>
                            Ingresar
                        </button>
                    </div>
                
                </form>
            </div>
        </section>
    );
}