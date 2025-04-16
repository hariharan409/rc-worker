import React from "react";
import { Image, StyleSheet, Text, View,useWindowDimensions } from "react-native";
import CompanyLogo from "@assets/pages/app-header/company-logo.png";
import HeaderMenu from "@/pages/app-header/HeaderMenu";
import { LottieWorker } from "@/components/lottie-web-animation/LottieWebAnimation";
import { useTranslation } from "react-i18next";

const Header = () => {
    const {width} = useWindowDimensions();
    const styles = getStyles(width);
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            {/* Left-aligned Image */}
            <View style={{ flex: 1 }}>
                    <Image style={styles.logo} source={CompanyLogo} />
            </View>
            {/* Center-aligned Content (Lottie and Text) */}
            <View style={styles.lottieTextContainer}>
                <LottieWorker style={styles.lottieTextContainer.lottieImage} loop={true} />
                <Text style={styles.lottieTextContainer.title}>{t("app-header.app-name")}</Text>
            </View>
            {/* Right-aligned Content (User email and HeaderMenu) */}
            <View style={styles.trailing}>
                <Text style={styles.trailing.userEmail}>harihara.dhamodaran</Text>
                <HeaderMenu />
            </View>
        </View>
    )
}

const getStyles = (width) => StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 5,
        borderBottomWidth: "1px",
        borderBottomColor: "rgba(0,0,0,0.3)"
    },
    logo: {
        display: width < 200 ? "none" : "flex",
        width: 130, 
        resizeMode: "contain",
    },
    lottieTextContainer: {
        flex: 2, justifyContent: "center", alignItems: "center", flexDirection: "row",display: width > 730 ? "flex" : "none",columnGap: 10,
        lottieImage: {
            width: 40
        },
        title: {
            fontWeight: "bold", textTransform: "uppercase", fontSize: 14, color: "#003eff", marginLeft: -10
        }
    },
    trailing: {
        flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "flex-end", columnGap: 10,
        userEmail: {
            fontWeight: "bold", fontSize: 14, color: "rgba(0,0,0,0.8)",display: width > 730 ? "flex" : "none"
        }
    }
});

export default Header;