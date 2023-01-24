import type ComponentStructure from "./ComponentStructure";

class Component implements ComponentStructure {
  element: Element;
  // Title: string;

  constructor(parentElement: Element, tagName: string, className: string) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    parentElement.appendChild(this.element);
  }
}

export default Component;
