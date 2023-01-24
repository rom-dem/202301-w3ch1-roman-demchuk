import { type CharacterStructure } from "../Character/CharacterStructure";

export interface FighterStructure extends CharacterStructure {
  weapon: string;
  dexterity: number;
}
