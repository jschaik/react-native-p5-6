import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';


export default function App() {

  const pressHandler = () => {
    console.log('pressed');
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} onPress={pressHandler}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" style={styles.bar}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
      fontSize: 20,
  },

  bar: {
    backgroundColor: 'black',
  }
});
