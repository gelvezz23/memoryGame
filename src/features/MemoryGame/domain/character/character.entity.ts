export interface ICharacterResult {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
}

export interface ICharacterEntity {
  results: ICharacterResult[];
  info?: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
}

export type ICharacterFromAndToEntity = ICharacterResult;
