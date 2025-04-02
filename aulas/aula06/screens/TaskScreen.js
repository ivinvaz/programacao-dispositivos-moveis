import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {Appbar, List ,TextInput, FAB, Modal, Button} from 'react-native-paper';

function TaskScreen(){
    const [exibeModal, setexibeModal] = useState(false);
    const [concluida, setConcluida] = useState(false);
    return <View style={styles.container}>
        <Appbar.Header>
            <Appbar.Content title="Tarefas"/>
        </Appbar.Header>

        <List.Item 
        title="Estudar para a prova" 
        right={(props) => <List.Icon icon= {concluida 
            ? "check-circle-outline" 
            : "circle-outline"}/>}
        onPress={() => setConcluida(!concluida)}
        />
        <FAB 
        icon="plus" 
        style={styles.fab}
        onPress={() => setexibeModal(true)}
        />
        <Modal visible={exibeModal}>
            <TextInput label="Nova Tarefa"/>
            <Button onPress={() => setexibeModal(false)}>Salvar</Button>
        </Modal>
        

    </View>
}

const styles = StyleSheet.create=({
    container:{
        flex:1,
        padding:16,
    },
    fab:{
        position: "absolute",
        right: 16,
        bottom: 16,
    },

})

export default TaskScreen;