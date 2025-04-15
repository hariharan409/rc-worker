import React,{ useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { FullScreenLoader } from "../Loader";


const AuthWrapper = ({navigation,children}) => {
    const { isLoading, isAuthenticated } = useContext(UserContext);

    if(isLoading) {
        return <FullScreenLoader />
    };

    useEffect(() => {
      if (!isLoading && !isAuthenticated) {
        // If the user is not authenticated, redirect to the welcome screen
        navigation.navigate('welcome-screen');
      }
    }, [isLoading]);

    return children; // Render children if user is authenticated
}

export default AuthWrapper;