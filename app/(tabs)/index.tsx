import ScreenWrapper from '@/components/ScreenWrapper';
import { StyleSheet, Text } from 'react-native';


export default function HomeScreen() {
  return (
    <ScreenWrapper>
      <Text style={{ color: "white" }}>Home Screen</Text>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
