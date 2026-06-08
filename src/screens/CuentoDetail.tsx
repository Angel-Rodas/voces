import { ScrollView, View, Text, StyleSheet } from 'react-native';
import AutoGradientCover from '../components/AutoGradientCover';
import { theme } from '../themes';

const CUERPO_PLACEHOLDER = `Cuentan los abuelos que en las montañas de Honduras, mucho antes de que llegaran los caminos y la luz eléctrica, había sombras que solo se mostraban cuando uno se atrevía a salir tarde.

Esta es una de esas historias. Una de las que tu abuela contaba para que aprendieras a respetar la noche.

(Próximamente: cuerpo real del cuento.)`;

export default function CuentoDetail({ route }: any) {
  const params = route.params ?? { title: 'Cuento', author: '', seed: 0 };
  const { title, author, seed } = params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <AutoGradientCover seed={seed} title={title} />
      </View>

      <View style={styles.body}>
        {author ? <Text style={styles.author}>por {author}</Text> : null}
        <Text style={styles.cuerpo}>{CUERPO_PLACEHOLDER}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.ink,
  },
  hero: {
    height: 280,
  },
  body: {
    padding: theme.spacing.xl,
  },
  author: {
    color: theme.colors.dust,
    fontSize: theme.typography.sizes.sm,
    marginBottom: theme.spacing.lg,
  },
  cuerpo: {
    color: theme.colors.bone,
    fontSize: theme.typography.sizes.md,
    lineHeight: 24,
  },
});
