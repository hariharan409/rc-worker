import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";
import LottieWorkerAnimation from "@assets/lottie/worker.json";


export const LottieWorker = ({style}) => {

    return(
        <View style={style}>
            <LottieView source={LottieWorkerAnimation} autoPlay loop={true} speed={0.8} />
        </View>
    )
}