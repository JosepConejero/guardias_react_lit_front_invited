import { LitElement, css } from "lit";
import { html, literal } from "lit/static-html.js";

import { Link } from "react-router-dom";

class LogoPage extends LitElement {
  static styles = css`
    :host {
    }
    /*   .logo-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    } */
  `;

  tag = literal`Link`;

  render() {
    return html`
   /*  <div className="logo-container animate__animated animate__fadeIn animate__faster"> */
    <${this.tag} to="/login">
      <img src="/assets/logo.png" alt="logo de MPE"></img>
    </${this.tag}>
  /* </div>  */`;
  }
}
customElements.define("logo-page", LogoPage);
