import { LoginForm } from "../data/LoginForm";

export interface AuthContextType {
    isAuthenticated?: boolean;
    signIn: (data:LoginForm) => Promise<any>;
    logout: () => void;
}
  