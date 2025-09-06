import React from 'react'
import { StyleSheet, View } from 'react-native'
import Header from './Header'
import HeroSection from './Herosection'

const HomeLayout = () => {
    return (
        <View style={style.container}>
            <Header />
            <HeroSection />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        gap: 20
    }
})

export default HomeLayout
