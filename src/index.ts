import { LitElement, customElement, html, property } from "lit-element";
import "./dependency";
@customElement("x-app")
class App extends LitElement {
  @property({ type: String })
  message;

  render() {
    return html` <div>Hello ${this.message}<x-app-dep></x-app-dep></div> `;
  }
}
