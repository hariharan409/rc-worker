import React,{ createContext, useState } from "react";

/**
 * @typedef {Object} UserContextType
 * @property {boolean} isAuthenticated - Whether the user is authenticated.
 * @property {Function} setIsAuthenticated - Function to set the authentication status.
 */

/**
 * Default state for the user context.
 * @type {UserContextType}
 */
const defaultUserState = {
    isAuthenticated: false,
    setIsAuthenticated: () => {},
  };
  
  /**
   * @typedef {Object} UserContextValue
   * @property {boolean} isAuthenticated - The current authentication status.
   * @property {Function} setIsAuthenticated - Function to update the authentication status.
   */
  
export const UserContext = createContext(/** @type {UserContextValue} */ (defaultUserState));

/**
 * UserProvider component that provides user state and helper functions.
 * Wrap your app with this provider.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components.
 * @returns {JSX.Element}
 */
export const UserProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return(
        <UserContext.Provider value={{isAuthenticated,setIsAuthenticated}}>
            {children}
        </UserContext.Provider>
    )
}