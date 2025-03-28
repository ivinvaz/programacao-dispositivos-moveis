import {View, StyleSheet} from "react-native"
import {Text, TextInput , Button, IconButton} from "react-native-paper";

function LoginScreen(){
    return <View style={styles.container}>
        <Text style={[styles.space, styles.center]} variant="headlineLarge">Login</Text>
        <TextInput style={styles.space} mode="outlined" label="email" keyboardType="email-address" autoCapitalize="none" right={<TextInput.Icon icon="email"/>}/>
        <TextInput style={styles.space} mode="outlined" label="senha" secureTextEntry right={<TextInput.Icon icon="eye"/>}/>
        <Button style={styles.space} mode="contained">Entrar</Button>
        <Text style={styles.center}>Ou entre com:</Text>
        <View style={styles.buttons}>
            <IconButton icon="google"/>
            <IconButton icon="facebook"/>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        padding: 16,
    },
    space: {
        marginBottom: 16,
    },
    center: {
        alignSelf:"center",
    },
    buttons: {
        alignItems:"center",
        justifyContent: "center",
        flexDirection: "row"
    }
})

export default LoginScreen;