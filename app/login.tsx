import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { theme } from "@/constants/theme";
import { useState } from "react";

import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function handleBtnLogin() {
    console.log({ email, password });
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined} // padding no IOS
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.section}>
          {/* LOGOTIPO */}
          <Text style={styles.logotipo}>RANGUEI</Text>

          {/* FORM > Inputs */}
          <View style={styles.form}>
            <Input
              label="Email"
              placeholder="Digite seu email..."
              placeholderTextColor={theme.dark.text.terciary}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <Input
              label="Senha"
              placeholder="Digite sua senha..."
              placeholderTextColor={theme.dark.text.terciary}
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
              keyboardType="visible-password"
            />
          </View>
          {/* BUTTON */}
          <Button
            title="Entrar agora"
            variant="gradient"
            loading={false}
            onPress={handleBtnLogin}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "auto",
    backgroundColor: theme.dark.background,
  },
  scrollContent: {
    justifyContent: "center",
    flexGrow: 1,
    paddingHorizontal: theme.spacing.xl,
  },
  section: {
    flexDirection: "column",
    gap: theme.spacing.xl,
    alignItems: "center",
    marginBottom: theme.spacing.xl,
  },
  logotipo: {
    color: theme.dark.text.default,
    fontSize: 40,
  },
  form: {
    width: "100%",
    height: "auto",
    gap: theme.spacing.md,
  },
});
