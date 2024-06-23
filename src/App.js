import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Gerador from "./Gerador";

const App = () => {
  const [tela, setTela] = useState('home');

  return (
    <View style={styles.container}>
      {tela === 'home' ? (
        <>
          <Text style={styles.text}>Gerador de números da Mega-Sena</Text>
          <TouchableOpacity style={styles.button} onPress={() => setTela('gerador')}>
            <Text style={styles.buttonText}>Teste aqui</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Gerador />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3B8C66",
  },
  text: {
    fontSize: 25,
    color: "red",
  },
  button: {
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderColor: "#DAD5D4",
    borderRadius: 6,
    backgroundColor: '#2B93D9',
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
});

export default App;
