import { Attempts } from "../components/Attempts";
import GameSettings from "../components/GameControls";
import Game from "../container/game";
import LogoutButton from "../../../../components/ButtonLogout";
import "./styles.css";
import { PortalLoader } from "../../../../components/Loader";
import { ButtonAction } from "../components/ButtonPlay";
import VictoryModal from "../components/VictoryModal";
import { useMemoryGame } from "../../application/hooks/useMemoryGame";
import { useState } from "react";

const MemoryGame = () => {
  const {
    characters,
    cardLimit,
    setCardLimit,
    attempts,
    setAttempts,
    loading,
    isGameOver,
    setIsGameOver,
    restartGame,
  } = useMemoryGame();
  const [hasStarted, setHasStarted] = useState(false);

  const handleStartGame = () => {
    setHasStarted(true);
  };
  if (loading) return <PortalLoader />;

  return (
    <>
      {isGameOver && (
        <VictoryModal attempts={attempts} onRestart={restartGame} />
      )}
      <div className="game-header_options">
        <Attempts attempts={attempts} />
        <LogoutButton />
      </div>
      <div className="game-header_options">
        <GameSettings cardLimit={cardLimit} setCardLimit={setCardLimit} />
        <ButtonAction text="Reiniciar" onClick={restartGame} />
      </div>
      {hasStarted ? (
        <Game
          characters={characters}
          limit={cardLimit}
          setAttempts={setAttempts}
          onVictory={() => setIsGameOver(true)}
        />
      ) : (
        <div className="game-waiting-room">
          <h2>¿Listo para el desafío, Morty?</h2>
          <p>Presiona Play para revelar las cartas por 3 segundos.</p>
          <ButtonAction text="Play ▶" onClick={handleStartGame} />
        </div>
      )}
    </>
  );
};

export default MemoryGame;
