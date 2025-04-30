import EpicButton from "@/components/EpicButton";
import EpicCheckBox from "@/components/EpicCheckBox";
import EpicDatePicker from "@/components/EpicDatePicker";
import EpicTextField from "@/components/EpicTextField";
import useDeclareMonthlySalary from "@/hooks/useDeclareMonthlySalary";
import React from "react";
const { ScrollView, useWindowDimensions, StyleSheet, View, Text } = require("react-native");


const DeclareMonthlySalary = () => {
    const {control,errors,handleSubmit,onFormSubmit,watch} = useDeclareMonthlySalary();
    const {width} = useWindowDimensions();
    const styles = getStyles(width);

    return(
        <ScrollView contentContainerStyle={styles.declarationContainer}>
            <View style={styles.declarationCard}>
                <Text style={styles.title}>declare monthly salary</Text>
                <EpicTextField name="companyName" control={control} label="company name" placeHolder="enter company name" keyboardType="default" error={errors.companyName} />
                <EpicDatePicker name="salaryMonth" control={control} label="salary month" error={errors.salaryMonth} />
                <EpicCheckBox name="salaryCredited" control={control} label="salary credited"/>
                {watch("salaryCredited") && <EpicDatePicker name="salaryCreditedOn" control={control} label="salary credited on" error={errors.salaryCreditedOn} />}
                <EpicTextField name="remarks" control={control} label="remarks" placeHolder="enter remarks" keyboardType="default" error={errors.remarks} required={false}/>
                <EpicButton title="SUBMIT" onPress={handleSubmit(onFormSubmit)} />
            </View>
        </ScrollView>
    )
}

const getStyles = (width) => StyleSheet.create({
    declarationContainer: {
        width: "100%",minHeight: "100%",display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center",padding: 10
    },
    declarationCard: {
        width: width > 767 ? 400 : "100%",
        minHeight: 500
    },
    title: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        textTransform: "capitalize"
    },
})

export default DeclareMonthlySalary;