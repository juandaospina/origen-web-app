import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/authContext";
import "./HomeAccount.css";

export const HomeAccount = () => {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();
  // console.log("Data User home Account", user);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="account">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <h4>Welcome Back! 👋</h4>
          <p>{user.email}</p>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </>
      )}
    </div>
  );
};
