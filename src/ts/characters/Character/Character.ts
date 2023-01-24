import { type CharacterDataStructure } from "./CharacterDataStructure";
import { type CharacterStructure } from "./CharacterStructure";

export class Character implements CharacterStructure {
  public isAlive = true;
  public series = "Game of Thrones";

  constructor(public characterData: CharacterDataStructure) {}

  communicate(): string {
    return `${this.characterData.name} says: `;
  }

  die(): void {
    this.isAlive = false;
  }
}
