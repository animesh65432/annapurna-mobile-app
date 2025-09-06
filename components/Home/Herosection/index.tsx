import React from 'react';
import { useTranslation } from "react-i18next";
import { Image, StyleSheet, Text, View } from 'react-native';

const HeroSection: React.FC = () => {
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title} >{t('Dashboard.Herosection.title.first')}</Text>
                <Text style={styles.secondtitle}>{t("Dashboard.Herosection.title.second")}
                    <Text style={styles.titleSpan}>
                        {t("Dashboard.Herosection.title.third")}
                        <Image
                            source={require('@/assets/svg/dashboard/star.svg')}
                            style={{ width: 20, height: 20, position: "absolute", top: -10, right: -20 }}
                        />
                    </Text>
                </Text>
            </View>
            <View>
                <Text style={styles.description}>
                    {t("Dashboard.Herosection.description")}
                </Text>
            </View>
            <Image
                style={styles.image}
                source={require('@/assets/svg/dashboard/Hero.svg')}
            >
            </Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F5EFD8",
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        height: 350,
        borderColor: "#DEDEDE",
        borderWidth: 0.1,
        borderRadius: 10,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 20,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        justifyContent: "center",
        position: "absolute"
    },
    titleSpan: {
        fontSize: 26,
        color: "#168B5D",
        fontWeight: 600,
        marginLeft: 5,
        position: "relative"
    },
    title: {
        fontSize: 26,
        fontWeight: 500,
        color: "#414141",
        fontFamily: require("@/assets/fonts/Domine-VariableFont_wght.ttf"),
        marginLeft: "auto",
        marginRight: "auto"
    },
    secondtitle: {
        fontSize: 26,
        fontWeight: 500,
        color: "#414141",
        display: "flex",
        marginRight: "auto",
        marginLeft: "auto"
    },
    titleContainer: {
        width: "100%",
        marginTop: 40,
        display: "flex",
        flexDirection: "column",
        gap: 5
    },
    description: {
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        color: "#414141",
        fontSize: 17,
    }
})

export default HeroSection