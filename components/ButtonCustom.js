import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const ButtonCustom = ({ onPress, title, size, backgroundColor, orientation }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.button,
                size === "sm" && {
                paddingHorizontal: 8,
                paddingVertical: 6,
                elevation: 10,
                width: 160,
                },
                size === "med" && {
                    width: 160,
                },
                orientation === "row" && {
                    marginRight: 12,
                },
                backgroundColor && { backgroundColor }
            ]}
        >
            <Text style={[styles.buttonText, size === "sm" && { fontSize: 14 }]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      justifyContent: "center",
      padding: 16
    },
    button: {
      elevation: 12,
      borderRadius: 10,
      paddingVertical: 12,
      paddingHorizontal: 12,
      width: 250,
    },
    buttonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
    }
  });  

export default ButtonCustom;