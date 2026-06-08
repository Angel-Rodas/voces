import { View, Text, Button, StyleSheet } from 'react-native';
import { theme } from '../themes';

export default function Mercado({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mercado</Text>
      <Button
        title="Abrir un cuento"
        onPress={() => navigation.navigate('CuentoDetail')}
      />
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
