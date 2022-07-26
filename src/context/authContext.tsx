import { createContext, useContext } from "react";
import { auth } from "../firebase/config.js";
import { createUserWithEmailAndPassword } from 'firebase/auth';

interface Props {
    signup: (
        email: string, 
        password: string
    ) => void
}

const defaultState = {
    signup: () => {}
}

export const authContext = createContext<Props>(defaultState);

export const useAuth = () => {
    const context = useContext(authContext);
    return context;
}

export const AuthProvider = ({children}: any) => {

    const signup = (email: string, password: string) => {
        console.log({ email, password });
        // createUserWithEmailAndPassword();
    }

    return(
        <authContext.Provider value={{signup}}>
            {children}
        </authContext.Provider>
    )
}