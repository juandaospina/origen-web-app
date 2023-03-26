import { useState } from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/authContext";
import ImgSecurity from "../../assets/img/security.png";
import "./signup.css";

export const CreateAccount = () => {
  const [errorAuth, setErrorAuth] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    // console.log(data);
    try {
      // función debe ser asíncrona
      // manejar los estados de error con (error.code)
      await signup(data.email, data.password);
      navigate("/account");
    } catch (error) {
      console.log(error);
      setErrorAuth("Error de autenticación");
    }
  };

  return (
    <section className="login-container">
      <div className="security-img">
        <img src={ImgSecurity} alt="" />
      </div>

      <div className="form-container">
        <div className="login-title">
          <h3>¡Hola, Nos alegra verte por acá!👋</h3>
          <p>Únete a nosotros y cambiemos el mundo juntos</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-inputs">
            <label htmlFor="">Nombre completo</label>

            <input {...register("name", { required: true })} type="text" />
          </div>

          <div className="form-inputs">
            <label htmlFor="">Celular</label>

            <input {...register("phone", { required: true })} type="phone" />
          </div>

          <div className="form-inputs">
            <label htmlFor="">Correo Electrónico</label>

            <input {...register("email", { required: true })} type="text" />
          </div>

          <div className="form-inputs">
            <label htmlFor="">Contraseña</label>

            <input
              {...register("password", { required: true })}
              type="password"
            />
          </div>

          <div className="button-container">
            <button>Crear cuenta</button>
          </div>

          {errorAuth && <p>{errorAuth}</p>}
        </form>
      </div>
    </section>
  );
};
