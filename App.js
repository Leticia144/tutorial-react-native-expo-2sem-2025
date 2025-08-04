import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <Text style={styles.tituloPrincipal}>Título principal</Text>
      <Text style={styles.subTitulo}>Subtítulo</Text>
      <Text>Este é um paragrafo</Text>
      <Text style={styles.saibaMais}>Saiba mais</Text>
       <View style={styles.box2}></View>
       <View style={styles.box3}></View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloPrincipal: {
    fontSize: '20px',
    fontWeight: 'bold'
  },
  subTitulo: {
    fontSize:'18px',
    fontWeight: 'bold',
    marginVertical: 20
  },
  saibaMais: {
    fontSize: '14px',
    color: "#464646"

  },
  box1: {
    display: "flex",
    width: "100%",
    height: 100,
    backgroundColor: "456478",
    justifyContent: "space-between"
  },
  box2: {
    width: "100%",
    height: 80,
    backgroundColor: "456478"
  },
    box3: {
    width: 50,
    height: 50,
    backgroundColor: "456478"
  }
});
