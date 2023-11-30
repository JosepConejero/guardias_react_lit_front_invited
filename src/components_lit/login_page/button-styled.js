import { LitElement, html, css } from "lit";

import "./login-page";

class ButtonStyled extends LitElement {
  static get properties() {
    return {
      text: { type: String },
      onSubmit: { type: Function },
    };
  }

  constructor() {
    super();
    this.text = "PULSE AQUÍ";
  }

  static styles = css`
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-content: center;
    }

    button {
      border: none;
      font-size: 0.8em;
      padding: 9px 0;
      margin: 0;
      background-color: #0000e0;
      color: white;
      font-weight: bold;
      border-radius: 5px;
    }

    button:hover {
      background-color: rgb(0, 0, 156);
      box-shadow: 3px 3px 5px grey;
      transition: background-color 0.3s, box-shadow 0.3s;
    }

    .prueba {
      background-color: red;
    }
  `;

  borrarTodo() {
    function removeAllChildren(element) {
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
    }
    removeAllChildren(document.body);
    const a = document.createElement("div");
    const b = document.createElement("div");
    const c = document.createElement("div");
    document.body.appendChild(a);
    document.body.appendChild(b);
    document.body.appendChild(c);
    const elementos = document.querySelectorAll("div");
    elementos.forEach((elem) => {
      elem.style.width = "200px";
      elem.style.height = "200px";
      elem.style.backgroundColor = "red";
      elem.style.margin = "20px";
      elem.style.border = "2px solid black";
      elem.addEventListener("click", () => {
        elem.style.backgroundColor = "blue";
      });
    });
    const elementoh1 = document.createElement("h1"); // crea elemento h1
    const elementodiv = document.createElement("div");
    const elementobutton = document.createElement("button");
    document.body.appendChild(elementodiv); // agrega el div al body
    elementodiv.appendChild(elementoh1); // agrega el h1 al div
    elementodiv.appendChild(elementobutton); // agrega el h1 al div
    elementobutton.style.backgroundColor = "red";
    elementobutton.textContent = "pulsa";
    console.log(elementobutton.nodeName, elementobutton.nodeType);
  }

  render() {
    return html`
      <div>
        <button @click=${this.onSubmit}>${this.text}</button>
        <button @click=${this.borrarTodo}>BORRAR TODO</button>
      </div>
    `;
  }
}

customElements.define("button-styled", ButtonStyled);
