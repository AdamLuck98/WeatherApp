import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WeatherContextProvider from './context/WeatherContext';
import Home from './screen/Home';
import { Colors } from './constants/colors';
import { RootSiblingParent } from 'react-native-root-siblings';

export default function App() {
  // Handle Errors and Loading
  // Make Search Works
  // Add Gif and ReadME in Documentation
  return (
    <View style={styles.container}>
      <RootSiblingParent>
        <WeatherContextProvider>
          <Home />
        </WeatherContextProvider>
      </RootSiblingParent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
});
