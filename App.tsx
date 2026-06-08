import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CustomInput from "./src/components/CustomInput";
import { useState } from "react";
import CustomButton from "./src/components/CustomButton";
import CuentoCard from "./src/components/CuentoCard";

export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitted = () => {
    setSubmitted(true);
  };

  const error = email.trim() === "" && submitted ? "Email is required" : "";
  return (
    <View style={styles.container}>
      <CuentoCard
        title="El Principito"
        author="Antoine de Saint-Exupéry"
        coverSeed={7}
        onPress={() => {
          console.log('Cuento presionado');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#121212',
  },
});
