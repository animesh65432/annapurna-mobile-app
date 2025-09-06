import React from 'react';
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from 'react-native';

const HeroSection: React.FC = () => {
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <Text>{t('welcome_message')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F5EFD8",
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto"
    }
})

export default HeroSection