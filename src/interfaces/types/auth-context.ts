import { LoginSchema } from "../schemas/login-schema";


export interface AuthContextType {
    isAuthenticated?: boolean;
    signIn: (data:LoginSchema) => Promise<any>;
    logout: () => void;
}
  