import React from "react";
import { Image, StyleSheet, View } from "react-native";

export const Header: React.FC = () => {
    return (
        <View style={styles.container}>

            <Image source={require("@/assets/svg/Icon.svg")} style={styles.icon} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "85%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: 20,
    },
    icon: {
        width: 190,
        height: 40
    },
});

export default Header;
