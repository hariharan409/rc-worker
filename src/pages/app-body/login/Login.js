import React from "react";
import { Button, StyleSheet, Text, TextInput, useWindowDimensions, View } from "react-native";
import { LottieWorker } from "../../../components/lottie-web-animation/LottieWebAnimation";
import { Controller, useForm } from "react-hook-form";
import { FailureToast } from "../../../components/Toast";


const Login = () => {
    const {width} = useWindowDimensions();
    const styles = getStyles(width);
    const {control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            workPermitID: "",
            password: ""
        }
    });

    const ShowError = ({ errorMessage }) => {
        return (
            <Text style={{ marginTop: 3, fontSize: "10px", fontWeight: "600", color: "red" }}>{errorMessage}</Text>
        );
    }

    const onFormSubmit = (data) => {
        try {
            console.log(data)
        } catch (error) {
            FailureToast(error.message);
        }
    }

    return(
        <View style={styles.loginContainer}>
            <Text style={styles.loginDescription}>
                This app helps ensure smooth and transparent salary tracking for contract workers. Every month, contract workers can log in and confirm whether they have received their salary from their respective contract companies. {"\n"}
                Our HR team uses this acknowledgment to coordinate and verify salary disbursements with the contract companies' HR departments, ensuring accountability and timely payments. {"\n"}
                🔐 Please log in to confirm your salary status for the current month.
            </Text>
            <View style={styles.loginCard}>
                <LottieWorker style={styles.lottieWorkerAnime} />
                <Controller
                    name="workPermitID"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: "600", textTransform: "capitalize" }}>work permit ID</Text>
                            <TextInput keyboardType="default" style={{ width: "100%", height: 30, marginTop: 8, borderColor: "rgba(0,0,0,0.2)", borderWidth: 2, borderRadius: 5, paddingHorizontal: 10, fontSize: 16,textTransform: "capitalize" }} placeholderTextColor="rgba(0, 0, 0, 0.2)" placeholder="enter work permit ID" onBlur={onBlur} onChangeText={onChange} value={value} />
                        </View>
                    )}
                />
                {errors.workPermitID && <ShowError errorMessage="This is required" />}
                <Controller
                    name="password"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: "600", textTransform: "capitalize" }}>password</Text>
                            <TextInput keyboardType="visible-password" style={{ width: "100%", height: 30, marginTop: 8, borderColor: "rgba(0,0,0,0.2)", borderWidth: 2, borderRadius: 5, paddingHorizontal: 10, fontSize: 16,textTransform: "capitalize" }} placeholderTextColor="rgba(0, 0, 0, 0.2)" placeholder="enter your password" onBlur={onBlur} onChangeText={onChange} value={value} />
                        </View>
                    )}
                />
                {errors.password && <ShowError errorMessage="This is required" />}
                <View style={{marginTop: 20,width: 200,alignSelf: "center"}}>
                    <Button style={{ borderRadius: 25 }} onPress={handleSubmit(onFormSubmit)} title="SUBMIT" />
                </View>
            </View>
        </View>
    )
}

const getStyles = () => StyleSheet.create({
    loginContainer: {
        width: "100%",height: "100%",display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center"
    },
    loginCard: {
        maxWidth: 400
    },
    lottieWorkerAnime: {
        width: "100%",
        marginBottom: 20
    },
    loginDescription: {
        color: "rgba(0,0,0,0.5)",
        fontSize: 12,
        textAlign: "center",
        fontWeight: "bold"
    }
});


export default Login;