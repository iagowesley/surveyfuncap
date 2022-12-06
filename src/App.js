import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Rotas from "./routes/Rotas";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Rotas/>
    </div>
  );
};

export default App;
