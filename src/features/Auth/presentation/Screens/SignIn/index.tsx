import React, { useState } from "react";
import "./styles.css";
import type { ILoginDto } from "../../../domain/auth.dto";
import { useNavigate } from "react-router-dom";
import { authService } from "../../../infraestructure/services/auth.service";
import { managerTokenStorage } from "../../../../../utils/managerToken";

const SignIn = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<ILoginDto>({ email: "", password: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = await authService.generateToken(form.email);
    managerTokenStorage.setToken(token);
    navigate("/game");
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <div className="portal-decoration"></div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
          alt="Rick and Morty"
          className="login-logo"
        />
        <h2>Acceso Interdimensional</h2>

        <div className="input-group">
          <input
            type="email"
            placeholder="Correo Galáctico"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        </div>

        <button type="submit" className="login-button">
          Entrar al Portal
        </button>
      </form>
    </div>
  );
};

export default SignIn;
