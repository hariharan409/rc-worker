import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import useUserContext from "@/hooks/useUserContext";
import { SuccessToast } from "@/components/Toast";


const useHeader = () => {
    const navigation = useNavigation(); // Access the navigation prop
    const {setIsAuthenticated} = useUserContext();
    const [showMenu, setShowMenu] = useState(false);

    const onLogout = async () => {
        setShowMenu(false);
        setIsAuthenticated(false);
        navigation.navigate("login");
        SuccessToast(`You have been successfully logged out!`);
    }

    return {
        setIsAuthenticated,
        showMenu,
        setShowMenu,
        onLogout
    }
}

export default useHeader;