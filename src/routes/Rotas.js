import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import EsqueceuSenha from "../components/EsqueceuSenha";
import BodyLogin from "../components/BodyLogin";
import BodyCadastro from "../components/BodyCadastro";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BodyLogin />} path="/login" />
        <Route element={<BodyCadastro />} path="/cadastro" />
        <Route element={<EsqueceuSenha />} path="/esqueceusenha" />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
