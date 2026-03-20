import { getCharacter } from "../services/getCharacter.service";
import { getCharacterMapper } from "../../application/mappers/getCharacter.mapper";
import type { ICharacterDto } from "../../domain/character/character.dto";

export const getCharacterRepository = async (): Promise<ICharacterDto[]> => {
  try {
    const response = await getCharacter();
    const data = getCharacterMapper(response?.data || []);
    return data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
};
