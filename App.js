import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.taskWrapper}>
          <Text style={styles.sectionTitle}>Today's Teks</Text>
          
          <View style={styles.items}>
            {/* <Task /> */}
            {/* <Task/> */}
            {/* <Task/> */}
            {/* <Task/> */}

            {/* ini adalah item yang akan tampil */}
          </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EAED',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {},
});
