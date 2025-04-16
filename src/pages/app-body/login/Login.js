import React from "react";
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { LottieWorker } from "@/components/lottie-web-animation/LottieWebAnimation";
import EpicTextField from "@/components/EpicTextField";
import EpicButton from "@/components/EpicButton";
import useLogin from "@/hooks/useLogin";


const Login = ({navigation}) => {
    const {control,handleSubmit,errors,onFormSubmit,onSignup} = useLogin(navigation);
    const {width} = useWindowDimensions();
    const styles = getStyles(width);

    return(
        <ScrollView contentContainerStyle={styles.loginContainer}>
            <Text style={styles.loginDescription}>
                This app helps ensure smooth and transparent salary tracking for contract workers. Every month, contract workers can log in and confirm whether they have received their salary from their respective contract companies. {"\n"}
                Our HR team uses this acknowledgment to coordinate and verify salary disbursements with the contract companies' HR departments, ensuring accountability and timely payments. {"\n"}
                🔐 Please log in to confirm your salary status for the current month.
            </Text>
            <View style={styles.loginCard}>
                <LottieWorker style={styles.lottieWorkerAnime} />
                <EpicTextField name="workPermitID" control={control} label="work permit ID" placeHolder="enter work permit ID" keyboardType="default" error={errors.workPermitID} />
                <EpicTextField name="password" control={control} label="password" placeHolder="enter your password" keyboardType="default" error={errors.password} secureTextEntry={true} autoComplete="password" />
                <EpicButton title="LOGIN" onPress={handleSubmit(onFormSubmit)} />
                <Text style={styles.signupText} onPress={onSignup}>signup</Text>
            </View>
        </ScrollView>
    )
}

const getStyles = (width) => StyleSheet.create({
    loginContainer: {
        width: "100%",minHeight: "100%",display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center",padding: 10
    },
    loginCard: {
        maxWidth: 400
    },
    lottieWorkerAnime: {
        width: "100%",
        marginBottom: 20,
    },
    loginDescription: {
        color: "rgba(0,0,0,0.5)",
        fontSize: 12,
        textAlign: "center",
        fontWeight: "bold",
        display: width > 767 ? "flex" : "none"
    },
    signupText: {
        textAlign: "center",
        marginTop: 10,
        textTransform: "capitalize",
        cursor: "pointer",
        color: "#0000EE"
    }
});


export default Login;