import { LitElement, customElement, html } from "lit-element";

@customElement("x-app-dep")
export class Dependency extends LitElement {
  render() {
    return html` <div>This is a dependency</div> `;
  }
}
