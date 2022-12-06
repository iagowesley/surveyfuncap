import "./BodyLogin.min.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

function BodyCadastro() {
  return (
    <div className="body-login">
      <div className="caixa-login">
        <h2>Etapa 1 - Dados</h2>
        <p>Recupere sua conta</p>

        <div className="inputs">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "90%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Nome da empresa"
              variant="outlined"
            />
          </Box>
          <button className="btn-entrar">RECUPERAR SENHA</button>
          <div className="cadastre">
            <p>
              Não possui conta? <Link to="/cadastro">Cadastre-se</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyCadastro;
