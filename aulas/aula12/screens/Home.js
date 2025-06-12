import { Text, Button } from "react-native-paper";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { View } from "react-native";

function Home({navigation}){
    const {usuario, logout} = useContext(AuthContext);

    return (
    <View style={{flex:1, justifyContent:"space-between", padding:16}}>
        <Text variant="titleMedium">Olá, {usuario.login}</Text>
        <Button mode="contained" onPress={()=> logout()} style={{marginBottom:16}}>
            Sair
        </Button>
    </View>
    )
}

export default Home;