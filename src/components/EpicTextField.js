import React from "react"
import { Controller } from "react-hook-form"
import ShowError from "./ShowError"
import { Text, TextInput, View } from "react-native"


const EpicTextField = ({name,control,label,placeHolder,keyboardType="default",error}) => {

    return(
        <>
            <Controller
                name={name}
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: "600", textTransform: "capitalize",overflow: "hidden" }} numberOfLines={1}>{label}</Text>
                        <TextInput keyboardType={keyboardType} style={{ width: "100%", height: 30, marginTop: 8, borderColor: "rgba(0,0,0,0.2)", borderWidth: 2, borderRadius: 5, paddingHorizontal: 10, fontSize: 16,textTransform: "capitalize" }} placeholderTextColor="rgba(0, 0, 0, 0.2)" placeholder={placeHolder} onBlur={onBlur} onChangeText={onChange} value={value} />
                    </View>
                )}
            />
            {error && <ShowError errorMessage="This is required" />}
        </>
    )
}

export default EpicTextField;