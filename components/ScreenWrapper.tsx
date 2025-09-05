import { ImageBackground, StyleSheet } from 'react-native';

type ScreenWrapperProps = {
    children: React.ReactNode;
};

export default function ScreenWrapper({ children }: ScreenWrapperProps) {
    return (
        <ImageBackground
            source={require('@/assets/images/backgroundimage.png')}
            style={styles.background}
        >
            {children}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
});
