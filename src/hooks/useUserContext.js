import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";

/**
 * Custom hook to access the user context.
 *
 * @returns {import('@/contexts/UserContext').UserContextValue} An object containing the user state and functions.
 */
const useUserContext = () => {
    return useContext(UserContext);
}

export default useUserContext;