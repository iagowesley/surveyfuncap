import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import EsqueceuSenha from "../components/EsqueceuSenha";
import BodyLogin from "../components/BodyLogin";
import BodyCadastro from "../components/BodyCadastro";
import Dashboard from "../components/Dashboard";
import CreateForm from "../components/CreateForm";
import { useState } from "react";

const Rotas = () => {
  const [email, setEmail] = useState('')
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BodyLogin setUserEmail={setEmail}/>} path="/login" />
        <Route element={<BodyCadastro />} path="/cadastro" />
        <Route element={<EsqueceuSenha />} path="/esqueceusenha" />
        <Route element={<Dashboard email={email}/>} path="/dashboard" />
        <Route element={<CreateForm />} path="/create-form" />

      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
