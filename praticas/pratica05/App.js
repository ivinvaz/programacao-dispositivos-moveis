import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen";
import ChatScreen from "./screens/ChatScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingScreen from "./screens/SettingScreen";

function App() {
  return <SafeAreaProvider>
    <SettingScreen/>
  </SafeAreaProvider>
}

export default App;
