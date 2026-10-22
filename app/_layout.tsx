import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { AuthProvider } from "@/context-api/AuthContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }} initialRouteName="login">
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="(authenticated)" />
      </Stack>
    </AuthProvider>
  );
}
