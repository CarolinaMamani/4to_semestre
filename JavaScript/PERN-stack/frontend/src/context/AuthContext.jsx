import { createContext, useContext, useState, useEffect } from "react"
import Cookie from 'js-cookie'
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
        try {
            const res = await axios.post("http://localhost:3000/api/signup", data, {
                withCredentials: true,
            });                
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

    useEffect(() => {
        if(Cookie.get('token')){
            axios.get("http://localhost:3000/api/profile", {
                withCredentials: true,
            }).then((res) => {
                setUser(res.data);
                setIsAuth(true);
            }).catch((error) => {
                console.log(error);
            })

        }
    }, []);
    
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