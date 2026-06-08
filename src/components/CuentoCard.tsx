import { Pressable, View, Text, StyleSheet } from 'react-native';
import AutoGradientCover from './AutoGradientCover';
import { theme } from '../themes';

type Props = {
  title: string;
  author: string;
  coverSeed: number;
  onPress: () => void;
};

export default function CuentoCard({
  title,
  author,
  coverSeed,
  onPress,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={styles.container}
    >
      <View style={styles.coverContainer}>
        <AutoGradientCover
          seed={coverSeed}
          title={title}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.author}>
          {author}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',

    backgroundColor: theme.colors.surface,

    borderRadius: theme.radius.lg,

    overflow: 'hidden',
  },

  coverContainer: {
    aspectRatio: 3 / 4,
  },

  infoContainer: {
    padding: 12,
  },

  title: {
    color: theme.colors.bone,

    fontSize: theme.typography.sizes.md,

    fontWeight: '500',
  },

  author: {
    marginTop: 4,

    color: theme.colors.dust,

    fontSize: theme.typography.sizes.sm,

  },
});