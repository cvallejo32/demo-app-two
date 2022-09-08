import React, { createContext } from "react";

export const AuthContext = createContext({});

const initialState = {
    id: null,
    email: null,
    username: null,
    password: null,
};

export const AuthContext = ({children}) => {
    const [auth, setAuth] = useState (initialState);

    const login = () => {
        console.log("Iniciando Secxion")
    };

  return (
    <AuthContext.Provider value=({ auth, login })>
        {children}
    </AuthContext.Provider>
    )
}
