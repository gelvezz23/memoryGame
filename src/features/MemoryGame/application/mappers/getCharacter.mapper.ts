import type { ICharacterDto } from "../../domain/character/character.dto";
import type { ICharacterEntity } from "../../domain/character/character.entity";

export const getCharacterMapper = (data: ICharacterEntity): ICharacterDto[] => {
  if (!data || !data.results || data.results.length === 0) {
    return [];
  }

  return data.results.map((character) => ({
    id: character.id,
    name: character.name,
    image: character.image,
  }));
};
