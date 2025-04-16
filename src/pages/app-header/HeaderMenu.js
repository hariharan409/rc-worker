import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { View } from "react-native";
import { Divider, Menu } from "react-native-paper";
import useHeader from "@/hooks/useHeader";

const HeaderMenu = () => {
    const {showMenu,setShowMenu,onLogout} = useHeader();

    const MenuButton = () => <Entypo name="log-out" size={30} color="#000" style={{ paddingRight: "10px", cursor: "pointer" }} onPress={() => setShowMenu(true)} />;

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