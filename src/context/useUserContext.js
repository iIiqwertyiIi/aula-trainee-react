import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
import Cookie from "js-cookie"

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
                Cookie.set('sigaav2.user', JSON.stringify(response.data), {expires: 1})
                alert("Usuário logado!")
            }
        } catch(e){
            alert(e);
        }
    }

    const logout = async () => {
        if(window.confirm("Deseja realmente sair de sua conta?")){
            setUser(undefined);
            Cookie.remove('sigaav2.user')
        }
    }

    useEffect(() => {
        const retrievedUser = Cookie.get('sigaav2.user');
        if(retrievedUser){
            setUser(JSON.parse(retrievedUser))
        }
    }, [])

    return (
        <UserContext.Provider value={{login, user, logout}}>
            {children}
        </UserContext.Provider>
    )
}

const useUserContext = () => {
    const context = useContext(UserContext);
    return context;
}

export {useUserContext, UserProvider}