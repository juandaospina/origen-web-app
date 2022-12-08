import { createContext, useContext, useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';

import { auth } from "../firebase/config.js";

type UserObject = object | null 

interface Props {
    signup: (
        email: string, 
        password: string
    ) => void,

    login: (
        email: string, 
        password: string
    ) => void,

    logout: () => void

    user: any

    loading: boolean
}


const defaultState = {
    signup: () => {},
    login: () => {},
    logout: () => {},
    user: Object,
    loading: true
}

export const authContext = createContext<Props>(defaultState);

export const useAuth = () => {
    const context = useContext(authContext);
    return context;
}

export const AuthProvider = ({children}: any) => {

    const [ user, setUser ] = useState<UserObject>();
    const [ loading, setLoading ] = useState(true);

    const signup = (email: string, password: string) => 
        createUserWithEmailAndPassword( auth, email, password );

    const login = (email: string, passsword: string) => 
        signInWithEmailAndPassword( auth, email, passsword )

    const logout = () => 
        signOut(auth);
    

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
    }, [])
    

    return(
        <authContext.Provider value={{ signup, login, user, logout, loading }}>
            {children}
        </authContext.Provider>
    )
}