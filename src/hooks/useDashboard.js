import React from "react";
import { LottieCallCrisisHotline, LottieMonthlySalary, LottieReportSafetyIssues, LottieReportSecurityIssues } from "@/components/lottie-web-animation/LottieWebAnimation";
import { useNavigation } from "@react-navigation/native";


const useDashboard = () => {
    const navigation = useNavigation();

    const cardList = [
        {
            name: "call 24/7 crisis hotline",
            anime: <LottieCallCrisisHotline style={{width: "35%"}} />,
            onPress: () => null
        },
        {
            name: "declare monthly salary",
            anime: <LottieMonthlySalary style={{width: "35%"}} />,
            onPress: () => navigation.navigate("declare-monthly-salary")
        },
        {
            name: "report safety issues",
            anime: <LottieReportSafetyIssues style={{width: "35%"}} />,
            onPress: () => null
        },
        {
            name: "report security issues",
            anime: <LottieReportSecurityIssues style={{width: "35%"}} />,
            onPress: () => null
        }
    ]

    return {
        cardList
    }

}

export default useDashboard;