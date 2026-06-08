import React, { memo } from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../themes';

type Props = {
  seed: number;
  title: string;
};

const DUOTONES: [string, string][] = [
  ['#C84B31', '#1A1816'],
  ['#3D2B5C', '#0E0D0B'],
  ['#1F4A3F', '#0E0D0B'],
  ['#5C3D29', '#1A1816'],
  ['#2F4858', '#0E0D0B'],
  ['#4A2F4A', '#1A1816'],
];

function AutoGradientCover({ seed, title }: Props) {
  const [colorA, colorB] = DUOTONES[seed % DUOTONES.length];

  return (
    <LinearGradient
      colors={[colorA, colorB]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.7, y: 1 }}
      style={{
        flex: 1,
        padding: theme.spacing.lg,
        justifyContent: 'flex-end',
      }}
    >
      <Text
        style={{
          color: theme.colors.bone,
          fontSize: 22,
        }}
      >
        {title}
      </Text>
    </LinearGradient>
  );
}

export default memo(AutoGradientCover);