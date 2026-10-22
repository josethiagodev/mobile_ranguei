import { createContext, useContext, useState } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextData {
  signed: boolean; // true (logado) / false (deslogado)
  loading: boolean; // true (carregando) / false (não carregando)
  signIn: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(false);

  async function signIn(email: string, password: string) {
    alert("TESTANDO");
  }

  return (
    <AuthContext value={{ signed, loading, signIn }}>{children}</AuthContext>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("O contexto não foi encontrado!");
  }

  return context;
}
