import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Marketing from "./components/Marketing";
import Header from "./components/Header";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
  seed: "co",
});

export default function App() {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Marketing />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
}
