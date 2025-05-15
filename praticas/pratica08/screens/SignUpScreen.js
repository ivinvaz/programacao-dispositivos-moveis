import { View, Text } from "react-native-web";
import { TextInput, Button, HelperText } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object().shape({
  nome: Yup.string().required("Nome é obrigatório"),
  email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  senha: Yup.string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .required("Senha é obrigatória"),
  confirmarSenha: Yup.string()
    .oneOf([Yup.ref("senha"), null], "As senhas não coincidem")
    .required("Confirme a senha"),
});

function SignUpScreen({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    alert("Conta criada com sucesso!");
  };
  return (
    <View style={{ padding: 16, flex: 1 }}>
      <View>
        <Controller
          control={control}
          name="nome"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={{ marginBottom: 16 }}
              label="Nome"
              keyboardType="default"
              autoCapitalize="words"
              mode="outlined"
              value={value}
              onChangeText={onChange}
              error={!!errors.nome}
            />
          )}
        ></Controller>
        <HelperText type="error" visible={!!errors.nome}>
          {errors.nome && <Text>{errors.nome.message}</Text>}
        </HelperText>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
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
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={{ marginBottom: 16 }}
              label="Senha"
              autoCapitalize="none"
              mode="outlined"
              secureTextEntry
              value={value}
              error={!!errors.senha}
              onChangeText={onChange}
            />
          )}
        >
          <HelperText type="error" visible={!!errors.senha}>
            {errors.senha && <Text>{errors.senha.message}</Text>}
          </HelperText>
        </Controller>
        <Controller
          control={control}
          name="confirmarSenha"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={{ marginBottom: 16 }}
              label="Confirmar Senha"
              autoCapitalize="none"
              mode="outlined"
              secureTextEntry
              value={value}
              onChangeText={onChange}
              error={!!errors.confirmarSenha}
            />
          )}
        ></Controller>
        <HelperText type="error" visible={!!errors.confirmarSenha}>
          {errors.confirmarSenha && (
            <Text>{errors.confirmarSenha.message}</Text>
          )}
        </HelperText>
        <Button mode="contained" onPress={handleSubmit(onSubmit)}>
          Criar
        </Button>
      </View>
      <Button mode="text" onPress={() => navigation.navigate("Login")}>
        Voltar para Login
      </Button>
    </View>
  );
}

export default SignUpScreen;
