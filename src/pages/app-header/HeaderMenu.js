import React, { useContext, useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Divider, Menu } from "react-native-paper";
import { SuccessToast } from "@/components/Toast";

const HeaderMenu = () => {
    const navigation = useNavigation(); // Access the navigation prop
    const [showMenu, setShowMenu] = useState(false);

    const MenuButton = () => <Entypo name="log-out" size={30} color="#000" style={{ paddingRight: "10px", cursor: "pointer" }} onPress={() => setShowMenu(true)} />;

    const onLogout = async () => {
        navigation.navigate("login");
        SuccessToast(`You have been successfully logged out!`)
    }

    return (
        <View>
            <Menu visible={showMenu} onDismiss={() => setShowMenu(false)} anchor={<MenuButton />}>
                <View style={{margin: "15px",width: "290px"}}>
                    <Menu.Item title="Logout" onPress={() => onLogout()} />
                    <Divider />
                </View>
            </Menu>
        </View>
    )
}

export default HeaderMenu;