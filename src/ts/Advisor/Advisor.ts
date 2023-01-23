import { Character } from "../Character/Character";
import { type CharacterDataStructure } from "../Character/CharacterDataStructure";
import { type AdvisorStructure } from "./AdvisorStructure";

export class Advisor extends Character implements AdvisorStructure {
  constructor(
    characterData: CharacterDataStructure,
    public advises: Character
  ) {
    super(characterData);
    if (advises instanceof Character) {
      this.advises = advises;
    }
  }

  communicate(): string {
    return `${super.communicate()}I have a funny feeling that I'm going to die`;
  }
}
