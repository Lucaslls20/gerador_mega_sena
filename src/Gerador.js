import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Gerador = () => {
  const [numeros, setNumeros] = useState(Array(6).fill(0));

  const gerarNumero = () => {
    let novoNumero;
    do {
      novoNumero = Math.floor(Math.random() * 60) + 1;
    } while (numeros.includes(novoNumero));
    return novoNumero;
  };

  const gerarNumeros = () => {
    const novosNumeros = [];
    while (novosNumeros.length < 6) {
      novosNumeros.push(gerarNumero());
    }
    setNumeros(novosNumeros);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gerar números</Text>
      <View style={styles.numbersContainer}>
        {numeros.map((numero, index) => (
          <TouchableOpacity key={index} style={styles.numberButton}>
            <Text style={styles.numberText}>{numero}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.generateButton} onPress={gerarNumeros}>
        <Text style={styles.generateButtonText}>Gerar Números</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#707E84",
  },
  text: {
    fontSize: 30,
    color: "#7BD6CF",
    marginBottom: 20,
  },
  numbersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  numberButton: {
    width: 50,
    height: 50,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 25,
    backgroundColor: "#FFF",
  },
  numberText: {
    fontSize: 18,
    color: "#000",
  },
  generateButton: {
    padding: 10,
    backgroundColor: "#2B93D9",
    borderRadius: 6,
  },
  generateButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
});

export default Gerador;
