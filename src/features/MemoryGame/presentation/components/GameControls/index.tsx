import React from "react";
import "./styles.css";

interface GameSettingsProps {
  cardLimit: number;
  setCardLimit: (limit: number) => void;
}

const GameSettings: React.FC<GameSettingsProps> = ({
  cardLimit,
  setCardLimit,
}) => {
  const options = [4, 6, 8, 12, 16];

  return (
    <div className="game-controls-container">
      <div className="control-group">
        <label htmlFor="limit" className="control-label">
          Dificultad (Parejas)
        </label>
        <div className="select-wrapper">
          <select
            id="limit"
            className="custom-select"
            value={cardLimit}
            onChange={(e) => setCardLimit(Number(e.target.value))}
          >
            {options.map((num) => (
              <option key={num} value={num}>
                {num} pares ({num * 2} cartas)
              </option>
            ))}
          </select>
          <span className="select-arrow"></span>
        </div>
      </div>
    </div>
  );
};

export default GameSettings;
