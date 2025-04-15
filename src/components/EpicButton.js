import React from "react";
import { Button, StyleSheet, View,useWindowDimensions } from "react-native"


const EpicButton = ({title, onPress, style}) => {
    const {width} = useWindowDimensions();
    const styles = getStyles(width);

    return(
        <View style={{...styles.buttonContainer,style}}>
            <Button style={{ borderRadius: 25 }} onPress={onPress} title={title} />
        </View>
    )
}

const getStyles = (width) => StyleSheet.create({
    buttonContainer: {
        marginTop: 20,
        width: width > 200 ? 200 : "auto",
        alignSelf: "center"
    }
});

export default EpicButton;