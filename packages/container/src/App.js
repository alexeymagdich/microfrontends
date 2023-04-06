import React from "react";
import { BrowserRouter } from "react-router-dom";

import Marketing from "./components/Marketing";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Marketing />
      </div>
    </BrowserRouter>
  );
}
