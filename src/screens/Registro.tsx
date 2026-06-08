import { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { useAuth } from '../auth/useAuth';
import { theme } from '../themes';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Registro({ navigation }: any) {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const phoneDigits = phone.replace(/\D/g, '');

  const emailError = submitted
    ? !email.trim()
      ? 'El correo es requerido'
      : !EMAIL_REGEX.test(email.trim())
        ? 'Correo no válido'
        : ''
    : '';

  const passwordError = submitted
    ? !password
      ? 'La contraseña es requerida'
      : password.length < 6
        ? 'Mínimo 6 caracteres'
        : ''
    : '';

  const confirmError = submitted
    ? !confirm
      ? 'Confirma la contraseña'
      : confirm !== password
        ? 'Las contraseñas no coinciden'
        : ''
    : '';

  const phoneError = submitted
    ? !phone
      ? 'El teléfono es requerido'
      : phoneDigits.length < 8
        ? 'Mínimo 8 dígitos'
        : ''
    : '';

  const handleSubmit = () => {
    setSubmitted(true);
    const valid =
      EMAIL_REGEX.test(email.trim()) &&
      password.length >= 6 &&
      confirm === password &&
      phoneDigits.length >= 8;
    if (valid) {
      const name = email.split('@')[0] || 'Lector';
      login(name);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Crear cuenta</Text>
        <Text style={styles.subtitle}>Únete a Voces</Text>

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
            placeholder="al menos 6 caracteres"
            type="password"
            error={passwordError}
            required
          />
          <View style={styles.spacer} />

          <CustomInput
            label="Confirmar contraseña"
            value={confirm}
            onChangeText={setConfirm}
            placeholder="repite la contraseña"
            type="password"
            error={confirmError}
            required
          />
          <View style={styles.spacer} />

          <CustomInput
            label="Teléfono"
            value={phone}
            onChangeText={setPhone}
            placeholder="9999-9999"
            type="phone"
            error={phoneError}
            required
          />

          <View style={styles.spacerLg} />

          <CustomButton
            label="Registrarme"
            onPress={handleSubmit}
            variant="primary"
          />

          <View style={styles.spacer} />

          <CustomButton
            label="Ya tengo cuenta"
            onPress={() => navigation.goBack()}
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
  title: {
    color: theme.colors.bone,
    fontSize: theme.typography.sizes.xl,
    textAlign: 'center',
    fontWeight: theme.typography.weights.semibold,
  },
  subtitle: {
    color: theme.colors.dust,
    fontSize: theme.typography.sizes.md,
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
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
