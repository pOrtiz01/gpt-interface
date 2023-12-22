import { StyleSheet, Text, View } from 'react-native';
import InputScreen from './App/screens/InputScreen';
import OutputScreen from './App/screens/OutputScreen';
export default function App() {
  return(
    <View style={styles.container}>
      <OutputScreen/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
