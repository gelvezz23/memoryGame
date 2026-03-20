import type { AxiosResponse } from "axios";
import apiClient from "../../../../api/http.client";
import type { ICharacterEntity } from "../../domain/character/character.entity";

export const getCharacter = async (): Promise<
  AxiosResponse<ICharacterEntity>
> => {
  const response = await apiClient.get<ICharacterEntity>(`/api/character`);
  return response;
};
