import { LitElement, html, css } from "lit";

import "./login-page";

class InputStyled extends LitElement {
  static get properties() {
    return {
      label: { type: String },
      inputText: { type: String },
      emptyInput: { type: Boolean },
      onInputChange: { type: Function },
      data: { type: String },
      dataType: { type: String },
      onSubmit: { type: Function },
    };
  }
  constructor() {
    super();
    this.label = "ESCRIBA AQUÍ";
    this.inputText = this.data;
    this.emptyInput = true;
  }

  static styles = css`
    .input-container {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-content: center;
    }

    .input-container input {
      font-size: 1em;
      height: 2em;
      padding: 12px 10px;
      margin: 12px 0px;
      border-radius: 5px;
      border-style: solid;
      border-color: lightgrey;
      border-width: 1px;
    }

    .input-container input:focus {
      outline: none;
      border: 2px solid blue;
    }

    .input-container label {
      position: absolute;
      pointer-events: none;
      transform-origin: top left;
      transform: translate(1em, 0em);
      transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
      color: grey;
    }

    .input-container .filled {
      transform: translate(1em, -1.7em) scale(0.8);
      background-color: white;
      padding: 0 6px;
      color: blue;
    }

    .input-container:focus-within label {
      transform: translate(1em, -1.7em) scale(0.8);
      background-color: white;
      padding: 0 6px;
      color: blue;
    }
  `;

  handleChange(e) {
    this.inputText = e.target.value;
    this.emptyInput = this.inputText.length > 0;
  }

  render() {
    /*     const myInput = this.renderRoot?.querySelector("input");
    console.log(myInput ? "algo" : "nada");
    console.log({ vacio: this.emptyInput }); */
    return html`
    <div class="input-container">
      <label class="${this.inputText ? "filled" : ""}">${this.label}</label>
      <input name=${this.dataType} type=${this.dataType} @input=${
      this.onInputChange
    } @change=${this.handleChange}
    @keydown=${(e) => {
      if (e.key === "Enter") this.onSubmit(e);
    }}
    ></input>
    </div>
    `;
  }
}

customElements.define("input-styled", InputStyled);

//@change=${  this.onInputChange}

//<input type="text" placeholder=${this.label}></input>

// <!-- <label class=${this.input.value !== "" ? "" : "filed"}>${
//   this.label
// }</label> -->

//     <!-- <input type={type} value={value} onChange={handleChange} /> -->
//     <!--<label class={value && "filled"} htmlFor={name}>{label}</label>-->

/* .input-container:focus-within label {
      transform: translate(0, -10px) scale(0.8);
      //  color: #0a53e4;
      color: green;
      background-color: white;
      border: 1px solid black;
      border-radius: 5px;
      padding: 3px;
    }
    
    .input-container .filled {
      transform: translate(0, -10px) scale(0.8);
      background-color: white;
      border: 1px solid black;
      border-radius: 5px;
      padding: 3px;
    }
    
    .input-container label {
      // position: absolute; 
      pointer-events: none;
      transform: translate(0, 23px) scale(1);
      transform-origin: top left;
      transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
      color: #6f81a5;
    }
    
    .input-container input {
      border-radius: 4px;
      border: none;
      outline: none;
      box-shadow: none;
      transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    }
    

    NO
    .input-container input:focus {
      box-shadow: 0 0 0 2px #79b1ff;
    } */
