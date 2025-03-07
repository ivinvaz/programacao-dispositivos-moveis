import {View, Text} from "react-native";

function App(){
  return(
    //Flex define a área de ocupação, no caso 1 é 100%//Backgorund color define a cor do fundo
    <View style={{flex: 1,flexDirection: "row", backgroundColor: "#fff"}}>
      <View style={{flex: 1, justifyContent:"space-evenly", alignItems:"stretch",backgroundColor: "red"}}>
        <View style={{height: 50, backgroundColor:"black"}}></View>
        <View style={{height: 50, backgroundColor:"blue"}}></View>
        <View style={{height: 50, backgroundColor:"gray"}}></View>
      </View>
      <View style={{flex: 1,backgroundColor: "green"}}></View>
    </View>
  )
}

export default App;