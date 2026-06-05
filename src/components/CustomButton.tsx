import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { theme } from "../themes";

type Props = {
  label: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
};

export default function CustomButton(props: Props) {
  const { label, onPress, variant, disabled } = props;

  return (
    <View>
      <TouchableOpacity
        onPress={disabled ? undefined : onPress}
        style={
          disabled
            ? styles.disabled
            : variant === "primary"
              ? styles.customButtonPrimary
              : ""
        }
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
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  customButtonPrimary: {
    backgroundColor: theme.colors.rust,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
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
