import { useState, useEffect } from "react";
import type { ICharacterDto } from "../../domain/character/character.dto";
import { getCharacterRepository } from "../../infraestructure/repository/getCharacter.repository";

export const useMemoryGame = () => {
  const [characters, setCharacters] = useState<ICharacterDto[]>([]);
  const [cardLimit, setCardLimit] = useState<number>(4);
  const [attempts, setAttempts] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await getCharacterRepository();
        setCharacters(response);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const restartGame = () => window.location.reload();

  return {
    characters,
    cardLimit,
    setCardLimit,
    attempts,
    setAttempts,
    loading,
    isGameOver,
    setIsGameOver,
    restartGame,
  };
};
