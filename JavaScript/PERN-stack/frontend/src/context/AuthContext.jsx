import { createContext, useState } from "react"

export const AuthContext = createContext();

export function AuthProvider ({children}){
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [errors, setErrors] = useState(null);
    return <AuthContext.Provider>
        {children}
    </AuthContext.Provider>
}