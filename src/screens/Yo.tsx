import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../auth/useAuth';
import { theme } from '../themes';

export default function Yo() {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola, {user?.name ?? 'Invitado'}</Text>
      <Button title="Cerrar sesión" onPress={logout} />
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
