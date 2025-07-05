/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    //Funtion to update user data
    const updateUser = (userData) => {
        setUser(userData);
    };

    //function to clear user data(eg, on logout)
    const clearUser = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider
            value={{
                user,
                updateUser,
                clearUser,
            }}
            >
            {children}
            </UserContext.Provider>
    );
}

export default UserProvider;