import { createContext, useContext, useState } from "react"
import axios from "axios"

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

    const signup = async (data) => {
        const res = await axios.post("http://localhost:3000/api/signup", data, {
            withCredentials: true,
        });
            console.log(res);
            setUser(res.data);
    }

    
    return <AuthContext.Provider value={{
        user,
        isAuth,
        errors,
        signup,
        setUser,
    }}>
        {children}
    </AuthContext.Provider>
}