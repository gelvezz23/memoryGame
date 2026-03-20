// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const limitCardsOnBoard = (data: any[], cardLimit: number) => {
  const limitedCharacters = data.slice(0, cardLimit);
  return limitedCharacters;
};
