import { View, Text, Image, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import { useAuth } from '../auth/useAuth';
import { theme } from '../themes';

export default function Yo() {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.greeting}>
          Hola, {user?.name ?? 'Invitado'}
        </Text>
        <Text style={styles.subtitle}>Bienvenido a Voces</Text>
      </View>

      <View style={styles.actions}>
        <CustomButton
          label="Cerrar sesión"
          onPress={logout}
          variant="secondary"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.ink,
    padding: theme.spacing.xl,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginTop: theme.spacing.xxl,
  },
  logo: {
    width: 96,
    height: 96,
    marginBottom: theme.spacing.lg,
  },
  greeting: {
    color: theme.colors.bone,
    fontSize: theme.typography.sizes.xxl,
    fontWeight: theme.typography.weights.semibold,
  },
  subtitle: {
    color: theme.colors.dust,
    fontSize: theme.typography.sizes.md,
    marginTop: theme.spacing.xs,
  },
  actions: {
    marginBottom: theme.spacing.xl,
  },
});
