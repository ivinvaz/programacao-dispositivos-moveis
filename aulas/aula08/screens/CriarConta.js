import { View } from "react-native-web";
import { TextInput, Button, HelperText} from "react-native-paper";
import { useForm, Controller } from "react-hook-form";

function CriarConta() {
    const {control, handleSubmit, formState:{errors}} = useForm();

    return <View style={{flex:1,padding:16}}>
        <Controller control={control} name="nome" rules={{required: "Nome é obrigatório"}}
        render={({field:{value,onChange, onBlur}}) => (
            <TextInput mode="outlined" label="Nome" autoCapitalize="words" value={value} onChangeText={onChange} error={errors.nome} onBlur={onBlur}/>
        )}/>
        <HelperText type="error" visible={errors.nome}>
            {errors.nome?.message}
        </HelperText>

        <Controller control={control} name="email" rules={{required: "E-mail é obrigatório"}}
        render={({field: {value,onChange}}) => (
            <TextInput label="E-mail" keyboardType="email-address" autoCapitalize="none" mode="outlined" onChangeText={onChange} value={value} error={errors.email}/>
        )}/>
        <HelperText type="error" visible={errors.email}>
            {errors.email?.message}
        </HelperText>

        <Controller control={control} name="senha" rules={{required: "Senha é obrigatória"}}
        render={({field: {value,onChange}}) => (
            <TextInput label="Senha" keyboardType="password" secureTextEntry mode="outlined" onChangeText={onChange} value={value} error={errors.senha}/>
        )}/>
        <HelperText type="error" visible={errors.email}>
            {errors.senha?.message}
        </HelperText>

        <Controller control={control} name="confirmaSenha" rules={{required: "Confirmar senha é obrigatória"}}
        render={({field: {value,onChange}}) => (
            <TextInput label="Confirmar Senha" keyboardType="password" secureTextEntry mode="outlined" onChangeText={onChange} value={value} error={errors.confirmaSenha}/>
        )}/>
        <HelperText type="error" visible={errors.email}>
            {errors.confirmaSenha?.message}
        </HelperText>

        <Button mode="contained" onPress={handleSubmit(()=> alert("ok"))}>
            Criar
        </Button>
    </View>;
  }
  
export default CriarConta;