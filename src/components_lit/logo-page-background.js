import { LitElement, css, html } from "lit";

class LogoPageBackground extends LitElement {
  static styles = css`
    :host {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .logo-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
  `;

  render() {
    return html`
      <div
        className="logo-container animate__animated animate__fadeIn animate__faster"
      >
        ${this.innerHTML}
      </div>
    `;
  }
}
customElements.define("logo-page-background", LogoPageBackground);
