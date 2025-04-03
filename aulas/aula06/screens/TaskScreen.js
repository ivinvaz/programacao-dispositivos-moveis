import { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import {Appbar, List ,TextInput, FAB, Modal, Button, Divider} from 'react-native-paper';

function TaskScreen(){
    const [exibeModal, setexibeModal] = useState(false);
    const [tarefa, setTarefa] = useState("");
    const [tarefas, setTarefas] = useState([]);
    return <View style={styles.container}>
        <Appbar.Header>
            <Appbar.Content title="Tarefas"/>
        </Appbar.Header>

        <FlatList
            data={tarefas}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
            <>
                <List.Item 
                onPress={() => item.concluida = !item.concluida}
                title={item.nome} 
                right={(props) => <List.Icon 
                    {...props}
                    icon= {item.concluida 
                    ? "check-circle-outline" 
                    : "circle-outline"}/>}
                />
                <Divider/>
            </>)}
        />
        <FAB 
        icon="plus" 
        style={styles.fab}
        onPress={() => setexibeModal(true)}
        />
        <Modal visible={exibeModal}>
            <View style={styles.modal}>
                <TextInput label="Nova Tarefa" onChangeText={(text) => setTarefa(text)}/>
                <Button onPress={() => {
                    if (tarefa){
                        setTarefas([...tarefas, {id: tarefas.length+1, nome: tarefa, concluida: false}])
                        }
                    setTarefas("")
                    setexibeModal(false)
                    }}>Salvar</Button>
            </View>
        </Modal>
        

    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    },
    fab:{
        position: "absolute",
        right: 16,
        bottom: 16,
    },
    modal:{
        padding: 16,
        backgroundColor: "white",
        margin: 16,
        borderRadius: 8,
    },

})

export default TaskScreen;