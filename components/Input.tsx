import { theme } from "@/constants/theme";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  type TextInputProps,
} from "react-native";

interface InputProps extends TextInputProps {
  label?: string;
}

export function Input({ label, style, ...rest }: InputProps) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={[styles.input, style]} {...rest} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: theme.spacing.sm,
    paddingHorizontal: theme.spacing.xs,
  },
  label: {
    width: "100%",
    color: theme.dark.text.default,
    fontSize: theme.size.lg,
  },
  input: {
    width: "100%",
    height: 65,
    paddingHorizontal: theme.spacing.lg,
    backgroundColor: theme.dark.surface.primary,
    color: theme.dark.text.primary,
    borderWidth: 1,
    borderColor: theme.dark.border.terciary,
    borderRadius: theme.rounded.md,
    fontSize: theme.size.lg,
  },
});
