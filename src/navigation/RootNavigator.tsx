import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuth } from '../auth/useAuth';
import { theme } from '../themes';
import Bienvenida from '../screens/Bienvenida';
import Registro from '../screens/Registro';
import Mercado from '../screens/Mercado';
import CuentoDetail from '../screens/CuentoDetail';
import Yo from '../screens/Yo';

const AuthStack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Bienvenida" component={Bienvenida} />
      <AuthStack.Screen name="Registro" component={Registro} />
    </AuthStack.Navigator>
  );
}

const MercadoStack = createNativeStackNavigator();

function MercadoNavigator() {
  return (
    <MercadoStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.ink },
        headerTintColor: theme.colors.bone,
      }}
    >
      <MercadoStack.Screen name="MercadoList" component={Mercado} options={{ title: 'Mercado' }} />
      <MercadoStack.Screen name="CuentoDetail" component={CuentoDetail} options={{ title: '' }} />
    </MercadoStack.Navigator>
  );
}

const Tabs = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.surface,
        },
        tabBarActiveTintColor: theme.colors.rust,
        tabBarInactiveTintColor: theme.colors.dust,
      }}
    >
      <Tabs.Screen name="Mercado" component={MercadoNavigator} />
      <Tabs.Screen name="Yo" component={Yo} />
    </Tabs.Navigator>
  );
}

export default function RootNavigator() {
  const { user } = useAuth();
  return user ? <MainTabs /> : <AuthNavigator />;
}
