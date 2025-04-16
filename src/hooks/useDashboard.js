import React from "react";
import { LottieCallCrisisHotline, LottieMonthlySalary, LottieReportSafetyIssues, LottieReportSecurityIssues } from "@/components/lottie-web-animation/LottieWebAnimation";


const useDashboard = () => {
    const cardList = [
        {
            name: "call 24/7 crisis hotline",
            anime: <LottieCallCrisisHotline style={{width: "35%"}} />
        },
        {
            name: "declare monthly salary",
            anime: <LottieMonthlySalary style={{width: "35%"}} />
        },
        {
            name: "report safety issues",
            anime: <LottieReportSafetyIssues style={{width: "35%"}} />
        },
        {
            name: "report security issues",
            anime: <LottieReportSecurityIssues style={{width: "35%"}} />
        }
    ]

    return {
        cardList
    }

}

export default useDashboard;