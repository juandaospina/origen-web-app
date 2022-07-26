import { useForm } from 'react-hook-form';

import ImgSecurity from '../../assets/img/security.png';
import { useAuth } from '../../context/authContext';
import './signup.css';

export const CreateAccount = () => {

    const { signup } = useAuth();
    
    const { 
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data: any) => {
        // console.log(data);
        signup( data.email, data.password );
    }

    return(
        <section className="login-container">

            <div className="security-img">
                <img src={ ImgSecurity } alt="" />
            </div>

            <div className="form-container">
                <div className="login-title">
                    <h3>¡Hola, Nos alegra verte por acá!👋</h3>
                    <p>
                        Únete a nosotros y cambiemos el mundo juntos
                    </p>
                </div>

                <form onSubmit={ handleSubmit( onSubmit ) }>

                    <div className="form-inputs">
                        <label htmlFor="">Nombre completo</label>

                        <input 
                            {...register("name", { required: true })}
                            type="text" 
                        />
                    </div>

                    <div className="form-inputs">
                        <label htmlFor="">Celular</label>

                        <input 
                            {...register("phone", { required: true })}
                            type="phone" 
                        />
                    </div>

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

                    <div className='button-container'>
                        <button>
                            Crear cuenta
                        </button>
                    </div>
                
                </form>
            </div>
        </section>
    );
}