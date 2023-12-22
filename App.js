import { StyleSheet, Text, View } from 'react-native';
import InputScreen from './App/screens/InputScreen';
export default function App() {
  return(
    <View style={styles.container}>
      <InputScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
