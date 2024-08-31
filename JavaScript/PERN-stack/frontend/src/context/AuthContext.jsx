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

    const signin = async(data) => {
        try {
            const res = await axios.post("http://localhost:3000/api/signin", data, {
                withCredentials: true,
            });
                console.log(res.data);
                setUser(res.data);
                setIsAuth(true);
            return res.data;

        } catch (error) {
            console.log(error)
            if(Array.isArray(error.response.data)){
                return setErrors(error.response.data)
            }
            setErrors([error.response.data.message])
        }
    };

    const signup = async (data) => {
        const res = await axios.post("http://localhost:3000/api/signup", data, {
            withCredentials: true,
        });
            console.log(res.data);
            setUser(res.data);
    };

    
    return <AuthContext.Provider value={{
        user,
        isAuth,
        errors,
        signup,
        setUser,
        signin,
        
    }}>
        {children}
    </AuthContext.Provider>
}