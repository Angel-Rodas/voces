import { Pressable, Text, StyleSheet, View } from "react-native";
import { theme } from "../themes";

type Props = {
  label: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
};

export default function CustomButton(props: Props) {
  const { label, onPress, variant, disabled } = props;

  const buttonStyle =
    variant === "primary"
      ? styles.customButtonPrimary
      : styles.customButtonSecondary;

  return (
    <View>
      <Pressable
        onPress={disabled ? undefined : onPress}
        style={[buttonStyle, disabled && styles.disabled]}
      >
        <Text
          style={
            variant === "primary"
              ? styles.customLabelPrimary
              : styles.customLabelSecondary
          }
        >
          {label}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  customButtonPrimary: {
    backgroundColor: theme.colors.rust,
    borderRadius: theme.radius.md,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    alignItems: "center",
  },

  customButtonSecondary: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    alignItems: "center",
  },

  customLabelPrimary: {
    color: theme.colors.bone,
  },

  customLabelSecondary: {
    color: theme.colors.rust,
  },

  disabled: {
    opacity: 0.5,
  },
});
