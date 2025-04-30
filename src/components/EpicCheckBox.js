import React from "react";
import Checkbox from 'expo-checkbox';
import { Controller } from "react-hook-form";
import { Text, View } from "react-native";


const EpicCheckBox = ({name,control,label}) => {

    return(
        <>
            <Controller 
                name={name}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <View style={{ marginTop: 20,flexDirection: "row",alignItems: "center",gap: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: "600", textTransform: "capitalize",overflow: "hidden" }} numberOfLines={1}>{label}</Text>
                        <Checkbox value={value} onValueChange={onChange} style={{width: 20,height: 20}}/>
                    </View>
                )}
            />
        </>
    )
}

export default EpicCheckBox;