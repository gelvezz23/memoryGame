/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect } from "vitest";
import type { ICharacterEntity } from "../../domain/character/character.entity";
import { getCharacterMapper } from "./getCharacter.mapper";

describe("getCharacterMapper", () => {
  it("debería transformar correctamente una entidad de API a un DTO", () => {
    const mockEntity: ICharacterEntity = {
      results: [
        {
          id: 1,
          name: "Rick Sanchez",
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          status: "Alive",
          species: "Human",
        },
      ],
    };

    const result = getCharacterMapper(mockEntity);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      id: 1,
      name: "Rick Sanchez",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    });
    expect(result[0]).not.toHaveProperty("status");
    expect(result[0]).not.toHaveProperty("species");
  });

  it("debería retornar un arreglo vacío si la entidad no tiene resultados", () => {
    const mockEmptyEntity: ICharacterEntity = {
      results: [],
    };

    const result = getCharacterMapper(mockEmptyEntity);

    expect(result).toEqual([]);
    expect(result).toHaveLength(0);
  });

  it("debería manejar casos donde data o results sean null/undefined", () => {
    expect(getCharacterMapper(null as any)).toEqual([]);

    expect(getCharacterMapper({} as any)).toEqual([]);
  });

  it("debería mapear múltiples personajes correctamente", () => {
    const mockMultiple: ICharacterEntity = {
      results: [
        {
          id: 1,
          name: "Char 1",
          image: "img1",
          status: "",
          species: "",
        },
        { id: 2, name: "Char 2", image: "img2", status: "", species: "" },
      ],
    };

    const result = getCharacterMapper(mockMultiple);

    expect(result).toHaveLength(2);
    expect(result[1].name).toBe("Char 2");
  });
});
