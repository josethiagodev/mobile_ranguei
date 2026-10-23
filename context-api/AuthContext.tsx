import api from "@/services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

import { LoginResponse, User } from "@/types/index";
interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextData {
  user: User | null;
  signed: boolean; // true (logado) / false (deslogado)
  loading: boolean; // true (carregando) / false (não carregado)
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function loadData() {
      await loadStorageData();
    }
    loadData();
  }, []);

  async function loadStorageData() {
    try {
      setLoading(true);

      const storedToken = await AsyncStorage.getItem("@token:ranguei");
      const storedUser = await AsyncStorage.getItem("@user:ranguei");

      if (storedToken && storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  // LOGAR USUÁRIO
  async function signIn(email: string, password: string) {
    try {
      const response = await api.post<LoginResponse>("/session", {
        email: email,
        password: password,
      });

      // Pegando detalhes do usuário
      const { token, ...userData } = response.data;

      // Salvando 'token' e restante dos dados do usuário 'userData'
      await AsyncStorage.setItem("@token:ranguei", token);
      await AsyncStorage.setItem("@user:ranguei", JSON.stringify(userData));

      // Passando dados do usuário para o novo valor do estado (setUser)
      setUser(userData);
    } catch (error: any) {
      throw new error();
    }
  }

  // DESLOGAR USUÁRIO
  async function signOut() {
    await AsyncStorage.multiRemove(["@token:ranguei", "@user:ranguei"]);
    setUser(null);
  }

  return (
    <AuthContext
      value={{
        signed: !!user,
        loading,
        signIn,
        user,
        signOut,
      }}
    >
      {children}
    </AuthContext>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("O contexto não foi encontrado!");
  }

  return context;
}
