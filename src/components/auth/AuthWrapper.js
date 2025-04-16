import React,{ useContext, useEffect } from "react";
import { UserContext } from "@/contexts/UserContext";
import { FullScreenLoader } from "@/components/Loader";
import useUserContext from "@/hooks/useUserContext";


const AuthWrapper = ({navigation,children}) => {
    const { isLoading, isAuthenticated } = useUserContext();

    if(isLoading) {
        return <FullScreenLoader />
    };

    useEffect(() => {
      if (!isLoading && !isAuthenticated) {
        // If the user is not authenticated, redirect to the welcome screen
        navigation.navigate('login');
      }
    }, [isLoading]);

    return children; // Render children if user is authenticated
}

export default AuthWrapper;