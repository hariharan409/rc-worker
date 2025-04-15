import React from "react";
import { Text } from "react-native";

const ShowError = ({errorMessage}) => (
    <Text style={{ marginTop: 3, fontSize: "10px", fontWeight: "600", color: "red" }}>{errorMessage}</Text>
)

export default ShowError;