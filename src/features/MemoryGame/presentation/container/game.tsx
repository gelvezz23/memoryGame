import {
  useState,
  useMemo,
  type Dispatch,
  type SetStateAction,
  useEffect,
} from "react";
import "./styles.css";
import type { ICharacterDto } from "../../domain/character/character.dto";
import { shuffleCards } from "../../application/useCase/shuffledCard";
import { usePreparingGame } from "../../application/hooks/usePreparingGame";

interface Props {
  characters: ICharacterDto[];
  limit?: number;
  setAttempts: Dispatch<SetStateAction<number>>;
  onVictory: () => void;
}

const Game = ({ characters, limit = 8, setAttempts, onVictory }: Props) => {
  const [flippedCards, setFlippedCards] = useState<ICharacterDto[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const { isPreparing } = usePreparingGame();

  const cards = useMemo(() => {
    if (characters.length === 0) return [];
    const limitedCharacters = characters.slice(0, limit);
    const shuffledCards = shuffleCards(limitedCharacters);
    return shuffledCards;
  }, [characters, limit]);

  const handleCardClick = (card: ICharacterDto) => {
    if (
      flippedCards.length === 2 ||
      flippedCards.includes(card) ||
      matchedCards.includes(card.id)
    ) {
      return;
    }

    const newFlipped = [...flippedCards, card];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setAttempts((prev) => prev + 1);
      checkMatch(newFlipped);
    }
  };

  const checkMatch = (selectedCards: ICharacterDto[]) => {
    const [first, second] = selectedCards;
    if (first.id === second.id) {
      setMatchedCards((prev) => [...prev, first.id]);
    }
    setTimeout(() => setFlippedCards([]), 1000);
  };

  useEffect(() => {
    if (matchedCards.length > 0 && matchedCards.length === limit) {
      const timer = setTimeout(() => {
        onVictory();
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [matchedCards, limit, onVictory]);

  return (
    <div className="game-wrapper">
      <div className="card-grid">
        {cards.map((card) => {
          const isFlipped =
            isPreparing ||
            flippedCards.includes(card) ||
            matchedCards.includes(card.id);
          return (
            <div
              key={card.uniqueId}
              className={`card-item ${isFlipped ? "is-flipped" : ""}`}
              onClick={() => handleCardClick(card)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div className="card-back-design">?</div>
                </div>
                <div className="card-back">
                  <img src={card.image} alt={card.name} />
                  <h3>{card.name}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Game;
