import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import RecyclingIcon from '../../assets/img/recycling-icon.png';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

import './RecyclingRequestForm.css';

export const RecyclingRequestForm = () => {

    const {
        register,
        control,
        formState: { errors }
    } = useForm();
    
    return(
        <>  
            <section className="container-recycling">
                <div className="wrapper">
                    <h3>¡Solicita tu recogida!.. 👋</h3>
                    <form className="request-form">
                        <div className="formItem">
                            <h4>Nombre</h4>
                            <div className="form">
                                <input
                                    id="name"
                                    className="form__input"
                                    type="text"
                                    placeholder=" "
                                    autoComplete="off"
                                    {...register("name", {
                                        required: true,
                                        pattern: {
                                        value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                                        message: "Ingrese un correo válido",
                                        },
                                    })}
                                />
                            </div>
                        </div>

                        <div className="formItem">
                            <h4>Dirección</h4>
                            <div className="form">
                                <input
                                    id="name"
                                    className="form__input"
                                    type="text"
                                    placeholder=" "
                                    autoComplete="off"
                                    {...register("name", {
                                        required: true,
                                        pattern: {
                                        value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                                        message: "Ingrese un correo válido",
                                        },
                                    })}
                                />
                            </div>
                        </div>

                        <div className="formItem">
                            <h4>Numero de celular</h4>
                            <div className="form">
                                <Controller 
                                    control={control}
                                    name="phone"
                                    rules={{ required: true }}
                                    render={({ field: { ref, ...field } }) => (
                                        <>
                                            <PhoneInput
                                                { ...field }
                                                country={'co'}
                                                value=""
                                            />
                                            <ErrorMessage
                                                errors={errors}
                                                name="phone"
                                                render={
                                                    ({ message }) => <span className="form__error">{message}</span>
                                                }
                                            />
                                        </>
                                    )}
                                />
                            </div>
                        </div>

                        <div className="wrapper-btn">
                            <button className="btn-request">
                                Solicitar recogida
                            </button>
                        </div>                           
                    </form>
                    
                    <div className="recycling-img">
                        <img src={RecyclingIcon} />
                    </div>
                </div>

            </section>

        </>
    );
}