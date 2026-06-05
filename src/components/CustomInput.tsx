import { StyleSheet, Text, TextInput, View } from "react-native";
import { theme } from "../themes";

type Props = {
  label: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  type?: "text" | "email" | "password" | "phone";
  error?: string; // si tiene valor, se pinta el borde en rojo y se muestra abajo
};

export default function CustomInput(props: Props) {
  const { label, onChangeText, placeholder, type, error } = props;


  const keyboardType =
    type === "email"
      ? "email-address"
      : type === "text" || type === "password"
        ? "default"
        : "phone-pad";

  const hasError: boolean = error === "" ? false : true;

  return (
    <View>
      <Text style={styles.customLabel}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType ? keyboardType : 'default'}
        secureTextEntry={type === "password"}
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
    padding: theme.spacing.md,
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
