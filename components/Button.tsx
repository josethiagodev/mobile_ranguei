import { theme } from "@/constants/theme";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  icon?: boolean;
  loading?: boolean;
  variant: "default" | "outline" | "gradient";
}

export function Button({
  title,
  icon = false,
  loading = false,
  variant = "default",
  disabled,
  style,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    gap: theme.spacing.sm,
    paddingHorizontal: theme.spacing.xs,
  },
  title: {
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
