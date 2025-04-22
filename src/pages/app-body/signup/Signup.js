import EpicButton from "@/components/EpicButton";
import EpicDatePicker from "@/components/EpicDatePicker";
import EpicTextField from "@/components/EpicTextField";
import useSignup from "@/hooks/useSignup";
import React from "react";
const { ScrollView, useWindowDimensions, StyleSheet, View, Text } = require("react-native")


const Signup = ({navigation}) => {
    const {control,errors,handleSubmit,onFormSubmit,onBackToLogin} = useSignup(navigation);
    const {width} = useWindowDimensions();
    const styles = getStyles(width);

    return(
        <ScrollView contentContainerStyle={styles.signupContainer}>
            <View style={styles.signupCard}>
                <Text style={styles.title} onPress={onBackToLogin}>sign up</Text>
                <EpicTextField name="workPermitID" control={control} label="work permit ID" placeHolder="enter work permit ID" keyboardType="default" error={errors.workPermitID} />
                <EpicDatePicker name="dob" control={control} label="date of birth" error={errors.dob} />
                <EpicTextField name="name" control={control} label="name" placeHolder="enter name" keyboardType="default" error={errors.name} />
                <EpicTextField name="employer" control={control} label="employer" placeHolder="enter employer" keyboardType="default" error={errors.employer} />
                <EpicTextField name="password" control={control} label="password" placeHolder="enter your password" keyboardType="default" error={errors.password} secureTextEntry={true} autoComplete="password" />
                <EpicButton title="SIGNUP" onPress={handleSubmit(onFormSubmit)} />
                <Text style={styles.backToLoginText} onPress={onBackToLogin}>back to login</Text>
            </View>
        </ScrollView>
    )
}

const getStyles = (width) => StyleSheet.create({
    signupContainer: {
        width: "100%",minHeight: "100%",display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center",padding: 10
    },
    signupCard: {
        width: width > 767 ? 400 : "100%"
    },
    title: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        textTransform: "capitalize"
    },
    backToLoginText: {
        textAlign: "center",
        marginTop: 10,
        textTransform: "capitalize",
        cursor: "pointer",
        color: "#0000EE"
    }
})

export default Signup;