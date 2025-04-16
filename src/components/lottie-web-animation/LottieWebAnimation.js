import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import LottieWorkerAnimation from "@assets/lottie/worker.json";
import LottieCallCrisisHotlineAnimation from "@assets/lottie/call-crisis-hotline.json";
import LottieMonthlySalaryAnimation from "@assets/lottie/monthly-salary.json";
import LottieReportSafetyIssuesAnimation from "@assets/lottie/report-safety-issues.json";
import LottieReportSecurityIssuesAnimation from "@assets/lottie/report-security-issues.json";



export const LottieWorker = ({style}) => {

    return(
        <View style={style}>
            <LottieView source={LottieWorkerAnimation} autoPlay loop={true} speed={0.8} />
        </View>
    )
}

export const LottieCallCrisisHotline = ({style}) => {

    return(
        <View style={style}>
            <LottieView source={LottieCallCrisisHotlineAnimation} autoPlay loop={true} speed={1} />
        </View>
    )
}

export const LottieMonthlySalary = ({style}) => {

    return(
        <View style={style}>
            <LottieView source={LottieMonthlySalaryAnimation} autoPlay loop={true} speed={1} />
        </View>
    )
}

export const LottieReportSafetyIssues = ({style}) => {

    return(
        <View style={style}>
            <LottieView source={LottieReportSafetyIssuesAnimation} autoPlay loop={true} speed={1} />
        </View>
    )
}

export const LottieReportSecurityIssues = ({style}) => {

    return(
        <View style={style}>
            <LottieView source={LottieReportSecurityIssuesAnimation} autoPlay loop={true} speed={1} />
        </View>
    )
}