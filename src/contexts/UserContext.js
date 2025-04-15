import React,{ createContext, useState } from "react";


export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return(
        <UserContext.Provider value={{isAuthenticated,setIsAuthenticated}}>
            {children}
        </UserContext.Provider>
    )
}