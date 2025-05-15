import { View, Text } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";
import { useState } from "react";

function ForgotPasswordScreen({navigation}) {
  const [email, setEmail] = useState("")
  const [erro, setErro] = useState("")
  const validarEmail = () => {
    if (!email) {
      setErro("E-mail é obrigatório.");
    } else if (!email.includes("@")) {
      setErro("E-mail inválido.");
    } else {
      setErro("");
      alert("Instruções enviadas para o e-mail!");
    }
  }

  return (
    <View style={{ padding: 16, flex: 1 }}>
      <View>
        <TextInput
          style={{ marginTop: 16 }}
          label="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          mode="outlined"
          value={email}
          onChangeText={setEmail}
          error={!!erro}
        />
        <HelperText>
          {erro && <Text>{erro}</Text>}
        </HelperText>
        <TextInput
          style={{ marginTop: 16, marginBottom:16}}
          label="Senha"
          autoCapitalize="none"
          mode="outlined"
          secureTextEntry
        />
        <Button mode="contained" onPress={validarEmail}>Enviar</Button>
      </View>
      <Button mode="text" onPress={() => navigation.navigate("Login")}>Voltar para Login</Button>
    </View>
  );
}

export default ForgotPasswordScreen;
