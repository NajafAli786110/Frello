import { createContext, useContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = UserContext.Provider;

export const UseUser = () =>{
    return useContext(UserContext);
}