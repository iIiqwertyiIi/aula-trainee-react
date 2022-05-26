import { createContext, useContext, useState } from "react";
import { api } from "../services/api";

const UserContext = createContext({}); 

const UserProvider = ({children}) => {
    const [user, setUser] = useState(undefined);

    const login = async (email, password) => {
        try{
            const response = await api.get('/admins/login', {params: {email, password}})
            
            if(response.data){
                setUser(response.data)
                api.defaults.headers.common['X-Admin-Email'] = response.data.email
                api.defaults.headers.common['X-Admin-Token'] = response.data.authentication_token
                alert("Usuário logado!")
            }
        } catch(e){
            alert(e);
        }
    }

    return (
        <UserContext.Provider value={{login, user}}>
            {children}
        </UserContext.Provider>
    )
}

const useUserContext = () => {
    const context = useContext(UserContext);
    return context;
}

export {useUserContext, UserProvider}