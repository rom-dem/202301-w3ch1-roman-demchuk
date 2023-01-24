import { type Character } from "../Character/Character";
import { type CharacterStructure } from "../Character/CharacterStructure";

export interface AdvisorStructure extends CharacterStructure {
  advises: Character;
}
