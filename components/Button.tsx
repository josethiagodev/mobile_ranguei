import { gradient, theme } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  icon?: boolean;
  loading?: boolean;
  variant: "gradient" | "default" | "outline";
}

export function Button({
  variant = "gradient",
  title,
  icon = false,
  loading = false,
  disabled,
  style,
  ...rest
}: ButtonProps) {
  const bgGradient =
    variant === "gradient" ? gradient.brand.left : gradient.brand.right;

  return (
    <LinearGradient
      colors={bgGradient}
      style={styles.btnGradient}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
    >
      <TouchableOpacity
        style={
          styles.btn || [(disabled || loading) && styles.btnDisabled, style]
        }
        {...rest}
      >
        {loading ? (
          <ActivityIndicator color={theme.light.background} />
        ) : (
          <Text style={styles.title}>{title.toUpperCase()}</Text>
        )}
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  btnGradient: {
    width: "100%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.rounded.xxl,
  },
  btn: {
    width: "100%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.rounded.xxl,
  },
  btnDisabled: {
    opacity: 0.7,
  },
  title: {
    color: theme.dark.text.inverse,
    fontSize: theme.font.size.lg,
    fontWeight: 600,
  },
});
