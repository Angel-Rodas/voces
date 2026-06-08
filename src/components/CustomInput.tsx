import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
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

  const [revealed, setRevealed] = useState(false);

  const isPassword = type === "password";
  const masked = isPassword && !revealed;

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

      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.dust}
          keyboardType={keyboardType}
          secureTextEntry={masked}
          autoCapitalize={
            type === "email" || isPassword ? "none" : "sentences"
          }
          autoCorrect={!isPassword}
          onChangeText={onChangeText}
          style={[
            styles.customInput,
            isPassword && styles.customInputWithIcon,
            hasError ? styles.bgColorErrorInput : styles.bgColorInput,
          ]}
        />

        {isPassword && (
          <Pressable
            onPress={() => setRevealed(!revealed)}
            style={styles.eyeButton}
            hitSlop={8}
          >
            <Ionicons
              name={revealed ? "eye-off-outline" : "eye-outline"}
              color={theme.colors.dust}
              size={20}
            />
          </Pressable>
        )}
      </View>

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

  inputContainer: {
    position: "relative",
    justifyContent: "center",
  },

  customInput: {
    borderWidth: 1,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    color: theme.colors.bone,
  },

  customInputWithIcon: {
    paddingRight: 44,
  },

  eyeButton: {
    position: "absolute",
    right: theme.spacing.md,
    top: 0,
    bottom: 0,
    justifyContent: "center",
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
