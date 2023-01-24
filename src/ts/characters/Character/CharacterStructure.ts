import { type CharacterDataStructure } from "./CharacterDataStructure";

export interface CharacterStructure {
  characterData: CharacterDataStructure;
  isAlive: boolean;
  series: string;
  communicate: () => string;
  die: () => void;
}
