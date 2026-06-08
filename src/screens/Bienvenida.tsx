import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../auth/useAuth';
import { theme } from '../themes';

export default function Bienvenida({ navigation }: any) {
  const { login } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenida</Text>
      <Button title="Entrar (mock)" onPress={() => login('Angel')} />
      <Button title="Ir a Registro" onPress={() => navigation.navigate('Registro')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.ink,
  },
  title: {
    color: theme.colors.bone,
    fontSize: theme.typography.sizes.xl,
    marginBottom: theme.spacing.lg,
  },
});
