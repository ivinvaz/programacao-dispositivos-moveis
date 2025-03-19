import {View, Text, StyleSheet, TextInput, Button, ScrollView} from 'react-native'

function RegistrarConta(){
    return <View style={{flex:1, paddingTop: 40, padding: 16}}> 

        <View style={styles.appBar}>
            <Text style={styles.appTitle}>RegistrarConta</Text>
        </View>
        <ScrollView>
        <View style={styles.container}>
            <Text>Nome</Text>
            <TextInput style={styles.Input} multiline placeholder="Nome Aqui" autoCapitalize="words"/>
            <Text>Email</Text>
            <TextInput style={styles.Input} keyboardType="email-address" placeholder="Email Aqui"/>
            <Text>Senha</Text>
            <TextInput style={styles.Input} secureTextEntry placeholder="Senha Aqui"/>
            <Text>Confirma Senha</Text>
            <TextInput style={styles.Input} keyboardType="numeric" secureTextEntry placeholder="Confirmar Senha"/>
            <Button title="Registrar"/>
        </View>
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    appBar: {
        height: 64,
        backgroundColor: "blue",
        padding: 16,
        justifyContent: "center",
        marginBottom: 8,
        elevation: 3, 
    },
    appTitle: {
        color: "white",
        fontSize: 24,
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    Input:{
        backgroundColor: "lightblue",
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "blue",
        marginBottom: 16,
    },
});

export default RegistrarConta;