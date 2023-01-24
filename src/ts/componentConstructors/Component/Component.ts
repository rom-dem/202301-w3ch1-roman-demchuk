import { type Character } from "../../characters/Character/Character";
import type ComponentStructure from "./ComponentStructure";

class Component implements ComponentStructure {
  element: Element;
  character: Character;

  constructor(
    parentElement: Element,
    tagName: string,
    className: string,
    person: Character
  ) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    this.character = person;
    parentElement.appendChild(this.element);
    this.render();
  }

  render() {
    this.element.innerHTML = `
        <div class="card character__card">
          <img src="${this.character.characterData.imageSource}" alt="${this.character.characterData.name} ${this.character.characterData.family}" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${this.character.characterData.name} ${this.character.characterData.family}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Age: ${this.character.characterData.age}</li>
                <li>
                  State:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Years of Reign: X</li>
                <li>Weapon: XXX</li>
                <li>Dexterity: X</li>
                <li>Kiss Ass level: X</li>
                <li>Advises to: X</li>
                <li>Serves to: X</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">communicate</button>
                <button class="character__action btn">die</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
        </div>`;
  }
}

export default Component;
