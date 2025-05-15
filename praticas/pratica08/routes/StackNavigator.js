import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

function StackNavigator() {
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Recuperar Senha" component={ForgotPasswordScreen} />
            <Stack.Screen name="Criar Conta" component={SignUpScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigator;