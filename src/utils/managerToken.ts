import { authService } from "../features/Auth/infraestructure/services/auth.service";

export const managerTokenStorage = {
  setToken: (token: string) => {
    localStorage.setItem("auth_token", token);
  },
  getToken: () => {
    return localStorage.getItem("auth_token");
  },
  removeToken: () => {
    localStorage.removeItem("auth_token");
  },
  isValid: () => {
    const token = localStorage.getItem("auth_token")!;
    const tokenVerify = token && authService.verifyToken(token);
    return !!tokenVerify;
  },
};
