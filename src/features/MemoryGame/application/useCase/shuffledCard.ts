import type { ICharacterDto } from "../../domain/character/character.dto";

export const shuffleCards = (characters: ICharacterDto[]) => {
  const shuffledCards = [...characters, ...characters]
    .map((char, index) => ({ ...char, uniqueId: `${char.id}-${index}` }))
    .sort(() => Math.random() - 0.5);
  return shuffledCards;
};
