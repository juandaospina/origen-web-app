import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext"

export const ProtectedRoute = ({children} : any) => {
    const { user, loading } = useAuth();

    if (loading) return <h3>Cargando...</h3>
    
    if(!user) return <Navigate to={'/'} />

    return <>{children}</>
    
}