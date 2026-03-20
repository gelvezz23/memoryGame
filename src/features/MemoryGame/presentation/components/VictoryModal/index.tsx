import React from "react";
import confetti from "canvas-confetti";
import "./styles.css";

interface VictoryModalProps {
  attempts: number;
  onRestart: () => void;
}

const VictoryModal: React.FC<VictoryModalProps> = ({ attempts, onRestart }) => {
  React.useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#dcf26b", "#98eff9", "#00ff00"],
    });
  }, []);

  const getRankMessage = () => {
    if (attempts <= 12)
      return { title: "¡NIVEL RICK!", sub: "C-137 estaría orgulloso." };
    if (attempts <= 20)
      return {
        title: "¡NIVEL MORTY!",
        sub: "Nada mal para un humano promedio.",
      };
    return {
      title: "¡NIVEL JERRY!",
      sub: "Al menos lo intentaste... supongo.",
    };
  };

  const { title, sub } = getRankMessage();

  return (
    <div className="victory-overlay">
      <div className="victory-card">
        <div className="portal-bg"></div>
        <h1 className="victory-title">{title}</h1>
        <p className="victory-subtitle">{sub}</p>

        <div className="stats-container">
          <span className="stats-label">Turnos totales:</span>
          <span className="stats-value">{attempts}</span>
        </div>

        <button className="restart-button" onClick={onRestart}>
          Viajar a otra dimensión (Reiniciar)
        </button>
      </div>
    </div>
  );
};

export default VictoryModal;
