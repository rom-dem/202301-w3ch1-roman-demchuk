import { Advisor } from "./characters/Advisor/Advisor";
import Component from "./componentConstructors/Component/Component";
import { type CharacterDataStructure } from "./characters/Character/CharacterDataStructure";
import { Fighter } from "./characters/Fighter/Fighter";
import { King } from "./characters/King/King";
import { Squire } from "./characters/Squire/Squire";

const joffreyData: CharacterDataStructure = {
  name: "Joffrey",
  family: "Baratheon",
  age: 16,
  imageSource: "../img/joffrey.jpg",
};

const jaimeData: CharacterDataStructure = {
  name: "Jaime",
  family: "Lannister",
  age: 45,
  imageSource: "../img/jaime.jpg",
};

const daeneryseData: CharacterDataStructure = {
  name: "Daenerys",
  family: "Targaryen",
  age: 30,
  imageSource: "../img/daenerys.jpg",
};

const tyrionData: CharacterDataStructure = {
  name: "Tyrion",
  family: "Lannister",
  age: 40,
  imageSource: "../img/tyrion.jpg",
};

const bronnData: CharacterDataStructure = {
  name: "Bronn",
  family: "Blackwater",
  age: 54,
  imageSource: "../img/bronn.jpg",
};

const joffrey: King = new King(joffreyData, 2);
const jaime = new Fighter(jaimeData, "sword", 7);
const daenerys = new Fighter(daeneryseData, "Dragons", 10);
const tyrion = new Advisor(tyrionData, daenerys);
const bronn = new Squire(bronnData, 0, jaime);

export const characters = [jaime, joffrey, daenerys, tyrion, bronn];

console.table(characters);

const app = document.querySelector(".app")!;

const appElement = new Component(
  app,
  "ul",
  "characters-list row list-unstyled"
);

const ul = document.querySelector(".characters-list")!;

const ulElement = new Component(ul, "li", "character col");
