import React from "react";
import { createComponent } from "@lit/react";
import { LoginPage } from "../login_page/login-page";

export const LoginPageLit = createComponent({
  tagName: "login-page",
  elementClass: LoginPage,
  react: React,
  /*   events: {
    onactivate: "activate",
    onchange: "change",
    onsubmit: "onSubmit",
  }, */
});
