import { View, Text } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";

function LoginScreen({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const onSubmit = (data) => {
    alert("Login realizado com sucesso!");
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Controller
        control={control}
        name="email"
        rules={{ required: "E-mail é obrigatório" }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            style={{ marginBottom: 16 }}
            label="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            mode="outlined"
            value={value}
            onChangeText={onChange}
            error={!!errors.email}
          />
        )}
      ></Controller>
      <HelperText type="error" visible={!!errors.email}>
        {errors.email && <Text>{errors.email.message}</Text>}
      </HelperText>
      <Controller
        control={control}
        name="senha"
        rules={{
          required: "Senha é obrigatório",
          minLength: {
            value: 6,
            message: "Senha deve ter no mínimo 6 caracteres",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={{ marginBottom: 16 }}
            label="Senha"
            autoCapitalize="none"
            mode="outlined"
            secureTextEntry
            value={value}
            onChangeText={onChange}
            error={!!errors.senha}
          />
        )}
      ></Controller>
      <HelperText type="error" visible={!!errors.email}>
        {errors.senha && <Text>{errors.senha.message}</Text>}
      </HelperText>
      <Button
        style={{ marginBottom: 16 }}
        mode="outlined"
        onPress={handleSubmit(onSubmit)}
      >
        Entrar
      </Button>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text>Esqueceu sua senha?</Text>
        <Button
          mode="text"
          onPress={() => navigation.navigate("Recuperar Senha")}
        >
          Recuperar Senha
        </Button>
      </View>
      <Button mode="text" onPress={() => navigation.navigate("Criar Conta")}>
        Criar Conta
      </Button>
    </View>
  );
}

export default LoginScreen;
