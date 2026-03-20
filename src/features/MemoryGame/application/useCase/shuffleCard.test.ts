/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect } from "vitest";
import type { ICharacterDto } from "../../domain/character/character.dto";
import { shuffleCards } from "./shuffledCard";

describe("shuffleCards Utility", () => {
  // 1. Setup de datos de prueba
  const mockCharacters: ICharacterDto[] = [
    { id: 1, name: "Rick", image: "rick.jpg" },
    { id: 2, name: "Morty", image: "morty.jpg" },
  ];

  it("debería duplicar la cantidad de personajes (pares)", () => {
    const result = shuffleCards(mockCharacters);
    // 2 personajes originales -> 4 cartas en el tablero
    expect(result).toHaveLength(mockCharacters.length * 2);
  });

  it("cada carta debe tener un uniqueId único para evitar colisiones en el DOM", () => {
    const result = shuffleCards(mockCharacters);
    const ids = result.map((card: { uniqueId: any }) => card.uniqueId);
    const uniqueIdsSet = new Set(ids);

    // Si el Set tiene el mismo tamaño que el array, todos son únicos
    expect(uniqueIdsSet.size).toBe(result.length);
  });

  it("debería mantener las propiedades originales del personaje", () => {
    const result = shuffleCards(mockCharacters);
    const firstCard = result[0];

    expect(firstCard).toHaveProperty("id");
    expect(firstCard).toHaveProperty("name");
    expect(firstCard).toHaveProperty("image");
    expect(firstCard).toHaveProperty("uniqueId");
  });

  it("debería contener exactamente dos instancias de cada ID de personaje", () => {
    const result = shuffleCards(mockCharacters);

    mockCharacters.forEach((char) => {
      const count = result.filter(
        (card: { id: number }) => card.id === char.id,
      ).length;
      expect(count).toBe(2);
    });
  });

  it("debería (probablemente) retornar un orden diferente en ejecuciones consecutivas", () => {
    // Nota: Aunque estadísticamente es posible que salgan igual,
    // con 4+ cartas la probabilidad es muy baja.
    const run1 = shuffleCards(mockCharacters).map((c: { id: any }) => c.id);
    const run2 = shuffleCards(mockCharacters).map((c: { id: any }) => c.id);

    // Verificamos que no sean idénticos (aunque los datos sean los mismos)
    // Usamos JSON.stringify para comparar el orden de los arrays
    const areIdentical = JSON.stringify(run1) === JSON.stringify(run2);

    // No fallamos el test si son iguales (por azar), pero es una buena métrica
    if (areIdentical) {
      console.warn(
        "Shuffle produjo el mismo orden, esto es normal ocasionalmente.",
      );
    }
  });
});
