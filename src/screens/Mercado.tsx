import { ScrollView, View, StyleSheet } from 'react-native';
import CuentoCard from '../components/CuentoCard';
import { theme } from '../themes';

const CUENTOS = [
  { id: '1', title: 'El Sisimite', author: 'Tradición oral hondureña', seed: 0 },
  { id: '2', title: 'La Sucia', author: 'Tradición oral hondureña', seed: 1 },
  { id: '3', title: 'El Cadejo', author: 'Tradición oral hondureña', seed: 2 },
];

export default function Mercado({ navigation }: any) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {CUENTOS.map((c) => (
        <View key={c.id} style={styles.cardWrapper}>
          <CuentoCard
            title={c.title}
            author={c.author}
            coverSeed={c.seed}
            onPress={() =>
              navigation.navigate('CuentoDetail', {
                title: c.title,
                author: c.author,
                seed: c.seed,
              })
            }
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.ink,
  },
  content: {
    padding: theme.spacing.lg,
  },
  cardWrapper: {
    marginBottom: theme.spacing.lg,
  },
});
