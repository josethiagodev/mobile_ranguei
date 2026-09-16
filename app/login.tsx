import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { theme } from "@/constants/theme";

import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined} // padding no IOS
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* LOGOTIPO */}
        <View style={styles.content}>
          <Text style={styles.logotipo}>RANGUEI</Text>
        </View>

        {/* FORM > Inputs */}
        <View style={styles.form}>
          <Input
            label="Email"
            placeholder="Digite seu email..."
            placeholderTextColor={theme.dark.text.terciary}
          />
          <Input
            label="Senha"
            placeholder="Digite sua senha..."
            placeholderTextColor={theme.dark.text.terciary}
            secureTextEntry={true}
          />
          <Button title="Entrar agora" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: theme.spacing.xl,
    width: "100%",
    backgroundColor: theme.dark.background,
  },
  scrollContent: {
    justifyContent: "center",
    flexGrow: 1,
    paddingHorizontal: theme.spacing.xl,
  },
  content: {
    alignItems: "center",
    marginBottom: theme.spacing.xl,
  },
  logotipo: {
    color: theme.dark.text.default,
  },
  form: {
    width: "100%",
    height: "auto",
    gap: theme.spacing.md,
  },
});
