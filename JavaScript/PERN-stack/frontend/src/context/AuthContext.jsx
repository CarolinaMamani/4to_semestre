import { createContext, useContext, useState } from "react"

export const AuthContext = createContext();
export const useAuth = () => {
    const context =  useContext(AuthContext);
    if (!context){
        throw new Error("useAuth deber ser usado con AuthProvider ");
        
    }
    return context;
}

export function AuthProvider ({children}){
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [errors, setErrors] = useState(null);

    
    return <AuthContext.Provider value={{
        user,
        isAuth,
        errors,
    }}>
        {children}
    </AuthContext.Provider>
}