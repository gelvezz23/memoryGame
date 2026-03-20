import { SignJWT, jwtVerify, decodeJwt } from "jose";

const SECRET_KEY = new TextEncoder().encode(import.meta.env.VITE_JWT_SECRET);

export const authService = {
  generateToken: async (email: string) => {
    const jwt = await new SignJWT({ email, role: "player" })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("24h")
      .sign(SECRET_KEY);

    return jwt;
  },

  verifyToken: async (token: string) => {
    try {
      const { payload } = await jwtVerify(token, SECRET_KEY);
      return payload;
    } catch (error) {
      console.error("Error verifying token:", error);
      return null;
    }
  },

  getUserInfo: (token: string) => {
    return decodeJwt(token);
  },
};
