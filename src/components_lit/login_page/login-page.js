import { LitElement, html, css } from "lit";

import "./input-styled";
import "./button-styled";

// isAuthenticating={isAuthenticating}
// email="email"
// password="password"
// onInputChange={onInputChange}
// onSubmit={onSubmit}

export class LoginPage extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      isAuthenticating: { type: Boolean },
      email: { type: String },
      password: { type: String },
      onInputChange: { type: Function },
      onSubmit: { type: Function },
    };
  }

  static styles = css`
    /* $sides-space: 15px; */

    :host {
      display: block;
      padding: 0;
      margin: 0;
    }

    form {
      box-sizing: border-box;
      display: flex;
      background-color: white;
      height: 330px;
      width: 350px;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      padding: 10px 25px;
    }

    @media all and (width > 400px) {
      form {
        width: 450px;
      }
    }

    article {
      /*   border: 1px solid black; */
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    header {
      /* border: 1px solid black; */
      /* padding-left: 15px; */
      flex: 1;
    }

    section {
      /*  border: 1px solid black; */
      flex: 5;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    footer {
      /* border: 1px solid black; */
      flex: 3;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-content: center;
    }

    h1 {
      font-size: 1.5em;
      font-style: normal;
      margin: 10px 0 10px 0;
      padding: 0;
      font-weight: normal;
    }

    a {
      align-self: flex-end;
      margin-right: 15px;
    }
  `;

  render() {
    return html`
      <form>
        <article>
          <header>
            <h1>${this.title}</h1>
          </header>

          <section>
            <input-styled
              .onInputChange=${this.onInputChange}
              data=${this.email}
              label="Correo"
              dataType="email"
              .onSubmit=${this.onSubmit}
            ></input-styled>
            <input-styled
              .onInputChange=${this.onInputChange}
              data=${this.password}
              label="Contraseña"
              dataType="password"
              .onSubmit=${this.onSubmit}
            ></input-styled>
          </section>

          <footer>
            <button-styled
              text="LOGIN"
              .onSubmit=${this.onSubmit}
            ></button-styled>
            <a href="/register">Crear una cuenta</a>
          </footer>
        </article>
      </form>
    `;
  }
}

customElements.define("login-page", LoginPage);

//<!-- @onClick="{this.cauentot()}" -->

// <--- <input type="text" placeholder="Correo"></input>
// <input type="text" placeholder="Contraseña"></input> --->
//<button>LOGIN</button>

//input {
/*  font-size: 1em;
  padding: 12px 10px;
  margin: 12px 15px; */
/*  border: 0.5px solid grey; */
/*  border-radius: 5px;
  height: 2em;
  border-style: solid;
  border-color: lightgrey;
  border-width: 1px; */
/*  box-sizing: border-box; */
// }

//input:focus {
/*    outline: none;
  background-color: #dfe;
  border: 2px solid blue; */

/* border-style: none; */

/*   box-sizing: border-box; */
/*       border-inline: none;*/
/* border-style: solid;
  border-color: red; */
/*  border-width: 3px; */
/* background-color: red; */
/*  outline: 5px; */
/* animation: slide 2 s infinite; */
// }

/*  input:focus::placeholder {
  color: red;
  font-size: 0.8em;
  font-style: bold;
  position: relative;
  top: -25px;
  transition: font-size 0.5s;
}
*/
