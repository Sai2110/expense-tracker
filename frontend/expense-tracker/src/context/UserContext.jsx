/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";

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


//from GPT
      // 🔁 Fetch user on first load (if token exists)
  //   useEffect(() => {
  //   const fetchUser = async () => {
  //     const token = localStorage.getItem("token");
  //     if (!token) return;

  //     try {
  //       const response = await axiosInstance.get(API_PATHS.AUTH.GET_USER_INFO);
  //       if (response.data) {
  //         setUser(response.data);
  //       }
  //     } catch (err) {
  //       console.error("Error fetching user info:", err);
  //       setUser(null); // optional: clear user on error
  //     }
  //   };

  //   fetchUser();
  // }, []);
//From GPT^



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
