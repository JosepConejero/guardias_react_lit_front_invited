import { LitElement, html, css } from "lit";

class AuthLayout extends LitElement {
  static properties = {
    title: { type: String },
  };

  static styles = css`
    :host {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    main {
      display: flex;
      background-color: #0000e0;
      min-height: 100vh;
      align-items: center;
      justify-content: center;
    }
  `;

  render() {
    return html`
      <main>
        <slot></slot>
      </main>
    `;
  }
}

customElements.define("auth-layout", AuthLayout);
