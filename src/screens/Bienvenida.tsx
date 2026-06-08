import { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { useAuth } from '../auth/useAuth';
import { theme } from '../themes';

export default function Bienvenida({ navigation }: any) {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const emailError =
    submitted && !email.trim() ? 'El correo es requerido' : '';
  const passwordError =
    submitted && !password ? 'La contraseña es requerida' : '';

  const handleLogin = () => {
    setSubmitted(true);
    if (email.trim() && password) {
      const name = email.split('@')[0] || 'Lector';
      login(name);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Voces</Text>
        <Text style={styles.subtitle}>Cuentos cortos en español</Text>

        <View style={styles.form}>
          <CustomInput
            label="Correo"
            value={email}
            onChangeText={setEmail}
            placeholder="tucorreo@ejemplo.com"
            type="email"
            error={emailError}
            required
          />

          <View style={styles.spacer} />

          <CustomInput
            label="Contraseña"
            value={password}
            onChangeText={setPassword}
            placeholder="••••••"
            type="password"
            error={passwordError}
            required
          />

          <View style={styles.spacerLg} />

          <CustomButton
            label="Iniciar sesión"
            onPress={handleLogin}
            variant="primary"
          />

          <View style={styles.spacer} />

          <CustomButton
            label="Crear cuenta"
            onPress={() => navigation.navigate('Registro')}
            variant="secondary"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.ink,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: theme.spacing.xl,
  },
  logo: {
    width: 140,
    height: 140,
    alignSelf: 'center',
    marginBottom: theme.spacing.lg,
  },
  title: {
    color: theme.colors.bone,
    fontSize: theme.typography.sizes.xxl,
    textAlign: 'center',
    fontWeight: theme.typography.weights.semibold,
  },
  subtitle: {
    color: theme.colors.dust,
    fontSize: theme.typography.sizes.md,
    textAlign: 'center',
    marginBottom: theme.spacing.xxl,
  },
  form: {
    width: '100%',
  },
  spacer: {
    height: theme.spacing.md,
  },
  spacerLg: {
    height: theme.spacing.lg,
  },
});
