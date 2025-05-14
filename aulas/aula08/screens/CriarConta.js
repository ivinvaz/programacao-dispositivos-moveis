import { View, ScrollView } from "react-native-web";
import { TextInput, Button, HelperText } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function CriarConta() {
  const schema = Yup.object().shape({
    nome: Yup.string().required("Nome é obrigatório"),
    email: Yup.string()
      .required("E-mail é obrigatório")
      .email("E=mail é inválido"),
    senha: Yup.string()
      .required("Senha é obrigatória")
      .min(8, "Deve ter 8 catacteres"),
    confirmaSenha: Yup.string()
      .oneOf([Yup.ref("senha"), null], "Senha distintas")
      .required("Confirme a senha"),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return <ScrollView>
    <View style={{ flex: 1, padding: 16 }}>
      <Controller
        control={control}
        name="nome" //
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            mode="outlined"
            label="Nome"
            autoCapitalize="words"
            value={value}
            onChangeText={onChange}
            error={errors.nome}
            onBlur={onBlur}
          />
        )}
      />
      <HelperText type="error" visible={errors.nome}>
        {errors.nome?.message}
      </HelperText>
      <Controller
        control={control}
        name="email" //
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            mode="outlined"
            onChangeText={onChange}
            value={value}
            error={errors.email}
          />
        )}
      />
      <HelperText type="error" visible={errors.email}>
        {errors.email?.message}
      </HelperText>
      <Controller
        control={control}
        name="senha" //
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="Senha"
            keyboardType="password"
            secureTextEntry
            mode="outlined"
            onChangeText={onChange}
            value={value}
            error={errors.senha}
          />
        )}
      />
      <HelperText type="error" visible={errors.email}>
        {errors.senha?.message}
      </HelperText>
      <Controller
        control={control}
        name="confirmaSenha" //
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="Confirmar Senha"
            keyboardType="password"
            secureTextEntry
            mode="outlined"
            onChangeText={onChange}
            value={value}
            error={errors.confirmaSenha}
          />
        )}
      />
      <HelperText type="error" visible={errors.email}>
        {errors.confirmaSenha?.message}
      </HelperText>
      <Button mode="contained" onPress={handleSubmit(() => alert("ok"))}>
        Criar
      </Button>
      =
    </View>
  </ScrollView>;
}

export default CriarConta;
