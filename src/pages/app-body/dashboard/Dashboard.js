import useDashboard from "@/hooks/useDashboard";
import React from "react";
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";


const Dashboard = () => {
    const {cardList} = useDashboard();
    const {width} = useWindowDimensions();
    const styles = getStyles(width);

    return(
        <ScrollView contentContainerStyle={styles.dashboardContainer}>
            {
                cardList.map((card) => (
                    <View key={card.name} style={styles.dashboardCard}>
                        <Text style={styles.dashboardCard.name}>
                            {card.name}
                        </Text>
                        {card.anime}
                    </View>
                ))
            }
        </ScrollView>
    )
}

const getStyles = (width) => StyleSheet.create({
    dashboardContainer: {
        width: "100%",
        minHeight: "100%",
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit,${width > 767 ? "49.7%" : "100%"})`,
        gridGap: 10,
        padding: 10
    },
    dashboardCard: {
        width: "100%",
        backgroundColor: "#B0E0E6",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        padding: 10,
        name: {
            fontSize:width > 767 ? 25 : 15,
            textTransform: "uppercase",
            color: "#000",
            fontWeight: "bold"
        }
    }
});

export default Dashboard;