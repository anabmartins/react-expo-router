import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>login</Text>
      <Image style={styles.image} source={require('../assets/icon.png')} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        autoCapitalize="none"
      />
      <Link href="/User" style={styles.entrar}>ENTRAR</Link>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebeff2',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'montserrat',
  },
  titulo: {
    fontSize: 45,
    fontWeight: 'bold',
    margin: 40,
    color: '#62b8e3',
  },
  image:{
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  input: {
    width: '50%',
    height: 40,
    margin: 20,
    borderWidth: 1,
    borderColor: '#1b1b1b',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  entrar: {
    margin: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cee8f5',
    color: '#62b8e3',
    fontWeight: 'bold',
    width: 90,
    height: 40,
    borderRadius: 5,
  }
});
