import { LoginForm } from "../data/login-form";

export interface AuthContextType {
    isAuthenticated?: boolean;
    signIn: (data:LoginForm) => Promise<any>;
    logout: () => void;
}
  