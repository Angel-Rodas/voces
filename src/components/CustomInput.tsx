import { StyleSheet, Text, TextInput, View } from "react-native";
import { theme } from "../themes";

type Props = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  type?: "text" | "email" | "password" | "phone";
  error?: string; // si tiene valor, se pinta el borde en rojo y se muestra abajo
  required?: boolean;
};

export default function CustomInput(props: Props) {
  const { label, value, onChangeText, placeholder, type, error, required } = props;


  const keyboardType =
    type === "email"
      ? "email-address"
      : type === "phone"
        ? "phone-pad"
        : "default";

  const hasError = !!error && error.length > 0;

  return (
    <View>
      <Text style={styles.customLabel}>
        {label}{required ? " *" : ""}
      </Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.dust}
        keyboardType={keyboardType}
        secureTextEntry={type === "password"}
        autoCapitalize={type === "email" ? "none" : "sentences"}
        onChangeText={onChangeText}
        style={[
          styles.customInput,
          hasError ? styles.bgColorErrorInput : styles.bgColorInput,
        ]}
      />

      {hasError && <Text style={styles.errorMessage}>{error}</Text>}

    </View>
  );
}

const styles = StyleSheet.create({
  bgColorInput: {
    borderColor: theme.colors.dust,
  },

  bgColorErrorInput: {
    borderColor: theme.colors.danger,
  },

  customInput: {
    borderWidth: 1,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    color: theme.colors.bone,
  },

  customLabel: {
    color: theme.colors.dust,
    fontSize: theme.typography.sizes.sm,
  },

  errorMessage: {
    color: theme.colors.danger,
    fontSize: theme.typography.sizes.xs,
  },
});
