import EpicTextField from "@/components/EpicTextField";
import useSignup from "@/hooks/useSignup";
import React from "react";
const { ScrollView, useWindowDimensions, StyleSheet, View } = require("react-native")


const Signup = () => {
    const {control,errors,handleSubmit} = useSignup();
    const {width} = useWindowDimensions();
    const styles = getStyles(width);

    return(
        <ScrollView contentContainerStyle={styles.signupContainer}>
            <View style={styles.signupCard}>
                <EpicTextField name="workPermitID" control={control} label="work permit ID" placeHolder="enter work permit ID" keyboardType="default" error={errors.workPermitID} />
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
})

export default Signup;