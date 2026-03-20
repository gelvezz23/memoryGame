import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { managerTokenStorage } from "../../utils/managerToken";

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    managerTokenStorage.removeToken();
    navigate("/login", { replace: true });
  };

  return (
    <button className="logout-btn" onClick={handleLogout}>
      <span className="icon">🚀</span>
      Abandonar Dimensión
    </button>
  );
};

export default LogoutButton;
